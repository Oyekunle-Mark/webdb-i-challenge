const express = require('express');

const server = express();
const accountRouter = require('./router');
const accountMiddleware = require('./middleware');

server.use(express.json());

server.use('/api/accounts', accountRouter);
server.use(accountMiddleware.badUrl);

module.exports = server;
