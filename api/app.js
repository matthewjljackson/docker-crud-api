const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());

app.get('/', async (_req, res) => {
  const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: 'books',
    user: 'root',
    password: 'password',
  });

  db.query('SELECT * FROM Review', (err, results) => {
    console.log({ err, results });

    if (err) res.status(500).json(err);

    res.status(200).json(results);
  });
});

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
