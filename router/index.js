const router = require('express').Router();

const handler = require('./accountHandler');
const middleware = require('../middleware');

router.get('/', handler.getAllAccounts);
router.get('/:id', middleware.verifyId, handler.getAccountById);
router.post('/', middleware.verifyAccount, handler.createAccount);
router.put(
  '/:id',
  middleware.verifyId,
  middleware.verifyAccount,
  handler.updateAccount,
);
router.delete('/:id', middleware.verifyId, handler.deleteAccount);

module.exports = router;
