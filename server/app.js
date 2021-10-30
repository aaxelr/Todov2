require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

const corsOrigin = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: corsOrigin,
}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI,
  }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));

app.get('/', (req, res) => {
  res.send('<h1>TJABA</h1>');
});

module.exports = app;
