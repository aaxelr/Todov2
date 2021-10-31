const express = require('express');
const {
  authUser,
  authUserCallback,
} = require('../controllers/authController');

const router = express.Router();

router
  .route('/google')
  .get(authUser);

router
  .route('/google/callback')
  .get(authUserCallback);

module.exports = router;
