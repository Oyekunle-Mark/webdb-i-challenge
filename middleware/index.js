const Account = require('../data/accountModel');

const verifyId = (req, res, next) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id))
    return res.status(400).json({
      status: 400,
      message: 'Request parameter must be an integer',
    });

  Account.get(id).then(account => {
    if (!account.length)
      return res.status(404).json({
        status: 404,
        message: 'No account matches that Id.',
      });

    next();
  });
};

const verifyAccount = (req, res, next) => {
  const { name, budget } = req.body;

  if (!name || !budget)
    return res.status(400).json({
      status: 400,
      message: 'Request body must contain name and budget field',
    });

  next();
};

const badUrl = (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Check the URL mate. That won"t fly',
  });

module.exports = {
  verifyId,
  verifyAccount,
  badUrl,
};
