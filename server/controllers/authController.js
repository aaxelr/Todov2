const passport = require('passport');

const CLIENT = process.env.CLIENT_URL;
const successRedirect = `${CLIENT}/login/success` || 'http://localhost:3000/login/success';
const failureRedirect = `${CLIENT}/login/error` || 'http://localhost:3000/login/error';

exports.authUser = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.authUserCallback = passport.authenticate('google', {
  successRedirect,
  failureRedirect,
});

exports.getUser = (req, res) => {
  res.json(req.user);
};
