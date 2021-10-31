const passport = require('passport');

// TODO update redirect routes
const successRedirect = 'http://localhost:5000';
const failureRedirect = 'http://localhost:5000';

exports.authUser = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.authUserCallback = passport.authenticate('google', {
  successRedirect,
  failureRedirect,
});
