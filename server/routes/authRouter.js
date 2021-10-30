const express = require('express');
const {
  authUser,
  authUserCallback,
  logoutUser,
} = require('../controllers/authController');

const router = express.Router();

router
  .route('/auth/google')
  .get(authUser);

router
  .route('/auth/google/callback')
  .get(authUserCallback);

router
  .route('/logout')
  .get(logoutUser);

module.exports = router;
