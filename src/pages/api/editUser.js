'use server';
const jwt = require('jsonwebtoken');
import connectToDatabase from '../../lib/db';
import { createRouter } from 'next-connect';
import {JWTKEY} from '../../lib/db';


const router = createRouter();

router.get( async (req, res) => {
  const {token, value: {firstName, lastName, email, phone, state, country}} = req.body;
  let decoded, connection;
  try{
    try {
      decoded = jwt.decode(token, JWTKEY);
    } catch (e) {
     throw new Error ('ошибка при поверке токена')
    }
    try {
      // 🦄🦄🦄необходимо сделать проверку токена + найти юзера и провести изминения
      connection = await connectToDatabase();
      await connection.query('INSERT INTO `user` (`name`, `second_name`, `city`, `country`, `telephone`, `mail`) VALUES (?, ?, ?, ?, ?, ? )', [firstName, lastName, email, phone, state, country]);
    }catch (e) {

    }
  }catch (e) {

  }
})

export default router.handler();