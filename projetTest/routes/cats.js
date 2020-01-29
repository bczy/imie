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

//TODO real sql random on cat.id and redirect to /cats/id
catsRouter.get('/random', (req, res, next) => {
  const randomIndex = Math.floor(cats.length * Math.random());
  const urlRandom = cats[randomIndex];
  res.json({ urlRandom });
});

catsRouter.get('/', (req, res, next) => {
  res.render('createCat');
});

catsRouter.post('/', (req, res, next) => {
  const { name, url } = req.body;
  if (!name || !url) {
    res.status = 400;
    res.end();
    return;
  }

  mySqlConnection.query(
    `INSERT INTO \`cats\` (\`name\`, \`url\`) VALUES ('${name}', '${url}');`,
    (err, rows, fields) => {
      if (err) throw err;
      res.redirect(`/cats/${rows.insertId}`);
    }
  );
});

//res.redirect(`/cats/${rows.insertId}`);
catsRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.statusCode = 400;
    res.end();
    return;
  }
  const request = `SELECT * from \`cats\` where \`id\`='${id}'; 
  SELECT \`id\` FROM \`cats\` WHERE \`id\` < ${id} ORDER BY id DESC LIMIT 1; 
  SELECT \`id\` FROM \`cats\` WHERE \`id\` > ${id} LIMIT 1`;

  mySqlConnection.query(request, [1, 2, 3], (err, rows, fields) => {
    if (err) throw err;
    if (rows.length === 0) {
      res.render('404');
    } else {
      const catInfo = rows[0][0];
      const previousId = rows[1][0] ? rows[1][0].id : undefined;
      const nextId = rows[2][0] ? rows[2][0].id : undefined;
      res.render(`catDetail`, { cat: catInfo, previousId, nextId });
    }
  });
});
