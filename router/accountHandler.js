const Accounts = require('../data/accountModel');

const getAllAccounts = (req, res) => {
  Accounts.get()
    .then(accounts =>
      res.status(200).json({
        status: 200,
        data: accounts,
      }),
    )
    .catch(() => res.status(500).json({
      status: 500,
      message: 'Error getting accounts.',
    }));
};

const getAccountById = (req, res) => {
  const { id } = req.params;

  Accounts.get(id)
    .then(account =>
      res.status(200).json({
        status: 200,
        data: account,
      }),
    )
    .catch(() => res.status(500).json({
      status: 500,
      message: 'Error getting account.',
    }));
};

const createAccount = (req, res) => {
  const { name, budget } = req.body;

  Accounts.insert({ name, budget })
    .then(account =>
      res.status(200).json({
        status: 201,
        data: {
          id: account[0],
          name,
          budget,
        },
      }),
    )
    .catch(() => res.status(500).json({
      status: 500,
      message: 'Error creating accounts',
    }));
};

const updateAccount = (req, res) => {
  const { id } = req.params;

  Accounts.update(id, req.body)
    .then(account =>
      res.status(200).json({
        status: 200,
        data: account,
      }),
    )
    .catch(() => res.status(500).json({
      status: 500,
      message: 'Error updating account.',
    }));
};

const deleteAccount = (req, res) => {
  const { id } = req.params;

  Accounts.remove(id)
    .then(account =>
      res.status(200).json({ message: `${account} account deleted.` }),
    )
    .catch(() => res.status(500).json({
      status: 500,
      message: 'Error deleting account.',
    }));
};

module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};
