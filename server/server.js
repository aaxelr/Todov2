require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5000;
const db = process.env.DB_URI;

mongoose.connect(db)
  .then(() => {
    app.listen(5000, () => {
      // eslint-disable-next-line no-console
      console.log('Connected to database');
      // eslint-disable-next-line no-console
      console.log(`listening on port: ${port}...`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to connect to database.', error);
  });
