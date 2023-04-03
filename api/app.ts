import express, { Request, Response } from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();

app.use(cors());

app.get('/', async (_req: Request, res: Response) => {
  const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: 'books',
    user: 'root',
    password: 'password',
  });

  db.query('SELECT * FROM Review', (err, results) => {
    if (err) res.status(500).json(err);

    res.status(200).json(results);
  });
});

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
