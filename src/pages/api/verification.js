'use server'
import connectToDatabase from '../../lib/db';
import {createRouter} from 'next-connect';
const jwt = require('jsonwebtoken');
import {JWTKEY} from '../../lib/db';

const router = createRouter();

router.post(async (req, res) => {
  const userReq = req.body;
  const userAgent = req.headers['user-agent'];
  let decoded, connection, lastAuth, userData;
  try {
    try {
      decoded = jwt.decode(userReq, JWTKEY);
      console.log(decoded)
    }catch (e) {
      throw new Error ('поломка при работе jwt');
    }
    try {
      connection = await connectToDatabase();
      [lastAuth] = await connection.query('SELECT * FROM `user-session` WHERE `user_id` = ? ORDER BY `session_date` DESC LIMIT 1', [decoded['user_id']]);
    }catch (e) {
      throw new Error ('сервер не отвичает повторите опирацию позже');
    }

    if (!lastAuth.length) {
      throw new Error('верификация не пройдена user не найден');
    }
    lastAuth = lastAuth[0];

    if (lastAuth['session_key'] === decoded['session_key'] && lastAuth['session_data'] === decoded['session_data'] && lastAuth['user_machine_info'] === userAgent) {
      try {
          [userData] = await connection.query('SELECT * FROM `user` WHERE `id` = ?', [decoded['user_id']]);

          if (!userData.length) throw new Error ('чтото не так с сервером');

          userData = userData.reduce((acc, user) => {
            acc.id = user.id;
            acc.name = user.name;
            acc.mail = user.mail;
            acc.avatar = user.avatar;
            return acc;
          }, {});
      } catch (e) {
          throw new Error ('сервер не отвичает повторите опирацию позже');
      }
      await connection.end();
      res.status(200).json({verification: true, userData});
    }
    await connection.end();
    res.status(200).json({verification: false});
  } catch (e) {
    await connection.end();
    res.status(400).send(e.message);
  }
})

export default router.handler();



