import express from 'express';
import { mySqlConnection } from '../app.js';

export const catsRouter = express.Router();

//TODO real sql random on cat.id and redirect to /cats/id
catsRouter.get('/random', (req, res, next) => {
  mySqlConnection.query(`SELECT * from \`cats\` ORDER BY RAND() LIMIT 1`, (err, rows, fields) => {
    if (rows.length === 0) {
      res.json({ urlRandom: '/images/noCatsYet.jpg' });
    } else {
      res.json({ urlRandom: rows[0].url });
    }
  });
});

catsRouter.get('/', (req, res, next) => {
  res.render('createCat', { title: 'Cat detail' });
});

catsRouter.get('/browse', (req, res, next) => {
  mySqlConnection.query(`SELECT \`id\` from \`cats\` LIMIT 1`, (err, rows, fields) => {
    if (rows.length > 0) {
      res.redirect(`/cats/${rows[0].id}`);
    } else {
      res.render('noCat', { title: 'No cat yet...' });
      res.end();
    }
  });
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
    if (rows[0].length === 0) {
      res.render('404');
    } else {
      const catInfo = rows[0][0];
      const previousId = rows[1][0] ? rows[1][0].id : undefined;
      const nextId = rows[2][0] ? rows[2][0].id : undefined;
      res.render(`catDetail`, { title: 'Cat detail', cat: catInfo, previousId, nextId });
    }
  });
});
