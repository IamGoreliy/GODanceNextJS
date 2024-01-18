'use server'
import {createRouter} from 'next-connect';
import connectToDatabase from '../../lib/db';
import {v4 as uuidv4} from 'uuid';
const jwt = require('jsonwebtoken');
import {JWTKEY} from '../../lib/db';

const router = createRouter();
// const JWTKEY = 'ALJSFFNdS';

router.post(async (req, res) => {
  const userReq = req.body;
  const userAgent = req.headers['user-agent'];
  let userData, connection, userSession, token;

  try {
    try {
      connection = await connectToDatabase();
      [userData] = await connection.query('SELECT * FROM `user` WHERE `mail` = ? AND `pass` = ?', [userReq.email, userReq.password]);
    }catch (e) {
      throw new Error ('нет ответа от базы');
    }

    if (!userData.length) {
      res.status(200).json({verification: false})
    }

    userData = userData.reduce((acc, user) => {
      acc.id = user.id;
      acc.name = user.name;
      acc.mail = user.mail;
      acc.avatar = user.avatar;
      return acc;
    }, {});

    const sessionKey = uuidv4();

    await connection.query('INSERT INTO `user-session` (user_id, user_machine_info, session_key) VALUES (?, ?, ?)', [userData.id, userAgent, sessionKey]);
    [userSession] = await connection.query('SELECT * FROM `user-session` ORDER BY `id` DESC LIMIT 1');

    userSession = userSession[0];

    try {
      token = jwt.sign(userSession, JWTKEY);
    }catch (e) {
      throw new Error ('поломка при создании jwt');
    }

    await connection.end();
    res.status(200).json({userData, token, verification: true});
  } catch (e) {
    res.status(400).send(e.message);
  }
})

export default router.handler();