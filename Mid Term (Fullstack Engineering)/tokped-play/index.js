require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./src/routes/routes');
const cors = require('cors');

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

database.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});