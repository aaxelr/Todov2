const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/userModel');

const callbackURL = process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5000/auth/google/callback';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL,
  passReqToCallback: true,
},
(req, accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id }, async (error, user) => {
    if (error) {
      return done(error, null);
    }

    if (!user) {
      const newUser = new User({
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        googleId: profile.id,
      });

      await newUser.save();
      done(null, newUser);
    }

    return done(null, user);
  });
}));

// eslint-disable-next-line no-underscore-dangle
passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
    .catch((error) => done(error, null));

  if (user) done(null, user);
});
