require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const corsOrigin = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(express.json());
app.use(cors({
  origin: corsOrigin,
}));

app.get('/', (req, res) => {
  res.send('<h1>TJABA</h1>');
});

module.exports = app;
