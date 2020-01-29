import express from 'express';
import { mySqlConnection } from '../app.js';

export const catsRouter = express.Router();

const cats = [
  'https://purr.objects-us-east-1.dream.io/i/smPafU3.jpg',
  'https://purr.objects-us-east-1.dream.io/i/capturadepantalla2017-12-17alas9.34.38p.m..png',
  'https://purr.objects-us-east-1.dream.io/i/20161027_175945.jpg',
  'https://purr.objects-us-east-1.dream.io/i/43LBW.jpg',
  'https://purr.objects-us-east-1.dream.io/i/c5OYV.jpg',
  'https://purr.objects-us-east-1.dream.io/i/image1a.jpg',
  'https://purr.objects-us-east-1.dream.io/i/rme9h.jpg',
  'https://purr.objects-us-east-1.dream.io/i/yPjrX.jpg'
];

catsRouter.get('/random', (req, res, next) => {
  const randomIndex = Math.floor(cats.length * Math.random());
  const urlRandom = cats[randomIndex];
  res.json({ urlRandom });
});

catsRouter.post('/', (req, res, next) => {
  const { name, url } = req.body;
  if (!name || !url) {
    res.status;
  }
  mySqlConnection.query(
    `INSERT INTO \`cats\` (\`name\`, \`url\`) VALUES ('${name}', '${url}');`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json({ id: rows.insertId });
      res.end();
    }
  );
});
