const express = require('express');
const {
  authUser,
  authUserCallback,
} = require('../controllers/authController');

const router = express.Router();

router
  .route('/auth/google')
  .get(authUser);

router
  .route('/auth/google/callback')
  .get(authUserCallback);

module.exports = router;
