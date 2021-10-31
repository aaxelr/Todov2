const passport = require('passport');

// TODO update redirect routes
const successRedirect = 'http://localhost:3000/dashboard';
const failureRedirect = 'http://localhost:3000/login/error';

exports.authUser = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.authUserCallback = passport.authenticate('google', {
  successRedirect,
  failureRedirect,
});
