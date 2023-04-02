const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'new_schema',
  password: 'password',
});

const app = express();

app.use(cors());

app.get('/', (_req, res) => {
  db.query('SELECT * FROM Review', (err, results) => {
    console.log({ err, results });
    if (err) res.status(500).json(err);

    res.status(200).json(results);
  });
});

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
