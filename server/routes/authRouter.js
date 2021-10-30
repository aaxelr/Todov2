const express = require('express');
const passport = require('passport');

const router = express.Router();

// TODO update redirect routes
const successRedirect = 'http://localhost:5000';
const failureRedirect = 'http://localhost:5000';

router
  .route('/auth/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email'] }));

router
  .route('/auth/google/callback')
  .get(passport.authenticate('google', {
    successRedirect,
    failureRedirect,
  }));

router
  .route('/logout')
  .get((req, res) => {
    req.logout();
    res.status(205).end();
  });

module.exports = router;
