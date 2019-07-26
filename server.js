const express = require('express');
const cors = require('cors');
const compression = require('compression');
const logger = require('morgan');
const helmet = require('helmet');

const server = express();
const accountRouter = require('./router');
const accountMiddleware = require('./middleware');

server.use(express.json());
server.use(cors());
server.use(compression());
server.use(logger('dev'));
server.use(helmet());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome to the server that other servers look up to.',
  }),
);

server.use('/api/accounts', accountRouter);
server.use(accountMiddleware.badUrl);

module.exports = server;
