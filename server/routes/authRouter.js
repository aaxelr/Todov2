const express = require('express');
const {
  authUser,
  authUserCallback,
  getUser,
} = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');

const router = express.Router();

router
  .route('/google')
  .get(authUser);

router
  .route('/google/callback')
  .get(authUserCallback);

router
  .route('/user')
  .get(isAuthenticated, getUser);

router
  .route('/logout')
  .get((req, res) => {
    req.logout();
    res.sendStatus(205);
  });

module.exports = router;
