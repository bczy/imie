import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import { indexRouter } from './routes/index.js';
import { catsRouter } from './routes/cats.js';

const app = express();

const __dirname = path.resolve(path.dirname(''));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cats', catsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// parse application/json
app.use(bodyParser.json());

export const mySqlConnection = mysql.createConnection({
  //ONLY FOR MAMP AND MAC OS X USERS!!!
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', //path to mysql sock in MAMP
  host: 'localhost',
  user: 'trambz',
  password: 'toto',
  database: 'cats'
});

mySqlConnection.connect(err => {
  if (err) throw err;
  else {
    app.listen(3000, () => {
      console.log('Server listening...');
    });
  }
});
