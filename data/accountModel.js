const db = require('./dbConfig');

function get(id) {
  if (id) return db('accounts').where({ id });

  return db('accounts');
}

function insert(account) {
  return db('accounts').insert(account);
}

function update(id, account) {
  return db('accounts')
    .where({ id })
    .update(account)
    .then(() => get(id));
}

function remove(id) {
  return db('accounts')
    .where({ id })
    .del();
}

module.exports = {
  get,
  insert,
  update,
  remove,
};
