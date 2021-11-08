const passport = require('passport');

const CLIENT = process.env.CLIENT_URL || 'http://localhost:3000';
const successRedirect = `${CLIENT}/login/success`;
const failureRedirect = `${CLIENT}/login/error`;

exports.authUser = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.authUserCallback = passport.authenticate('google', {
  successRedirect,
  failureRedirect,
});

exports.getUser = (req, res) => {
  res.json(req.user);
};
