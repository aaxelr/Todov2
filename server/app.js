require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
require('./auth/passportGoogle');
const { isAuthenticated } = require('./middlewares/isAuthenticated');

const authRouter = require('./routes/authRouter');
const todoRouter = require('./routes/todoRouter');

const app = express();

const corsOrigin = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));

app.set('trust proxy', 1);

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 2,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/api/v1/todos', isAuthenticated, todoRouter);

module.exports = app;
