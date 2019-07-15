const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

function getAllAccounts(id) {
  if (id) return db('accounts').where({ id });

  return db('accounts');
}

function createAccount(account) {
  return db('accounts').insert(account);
}

function updateAccount(id, account) {
  db('accounts')
    .where({ id })
    .update(account);

  return db('accounts').where({ id });
}

function deleteAccount(id) {
  return db('accounts')
    .where({ id })
    .del();
}

server.get('/', (req, res) => {
  getAllAccounts().then(accounts => res.status(200).json(accounts));
});

server.get('/:id', (req, res) => {
  getAllAccounts(req.params.id).then(account => res.status(200).json(account));
});

server.post('/', (req, res) => {
  createAccount(req.body).then(account => res.status(200).json(account));
});

server.put('/:id', (req, res) => {
  updateAccount(req.params.id, req.body).then(account =>
    res.status(200).json(account),
  );
});

server.delete('/:id', (req, res) => {
  deleteAccount(req.params.id).then(account =>
    res.status(200).json({ message: `${account} account deleted.` }),
  );
});

module.exports = server;
