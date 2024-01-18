import {createRouter} from 'next-connect';
import connectToDatabase from '../../lib/db';

const router = createRouter();



router.get(async (req, res) => {
  const connection = await connectToDatabase();
  const [rows] = await connection.query('SELECT * FROM `user`');
  await connection.end();
  res.json(rows);
});

export default router.handler();