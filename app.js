import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import path from 'path';
import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
import './config/index.js'

import ApiRouter from './routes/apiRouter.js'
import indexRouter from './routes/index.js'

const app = express();

// Database connection
import './config/db-config.js'

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.all('/api/*', ApiRouter);
app.use('/', indexRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
