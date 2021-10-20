const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/userModel');

const callbackURL = process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5000/api/v1/auth/google/callback';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL,
}, async (accessToken, refreshToken, profile, done) => {
  const newUser = {
    fullName: `${profile.name.givenName} ${profile.name.familyName}`,
    email: profile.emails[0].value,
    googleId: profile.id,
  };

  try {
    let user = await User.findOne({ googleId: profile.id });
    if (user) {
      done(null, user);
    } else {
      user = await User.create(newUser);
      done(null, user);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Something went wrong: ', error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
