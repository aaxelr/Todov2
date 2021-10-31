const express = require('express');
const { isAuthenticated } = require('../middlewares/isAuthenticated');

const router = express.Router();

// TODO remove test routes
router
  .route('/')
  .get((req, res) => {
    res.json(req.user || 'not logged in');
  });

router
  .route('/protected')
  .get(isAuthenticated, (req, res) => {
    res.json('he protec');
  });

router
  .route('/logout')
  .get((req, res) => {
    req.logout();
    res.sendStatus(205);
  });

module.exports = router;
