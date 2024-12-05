const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const handleRedirect = require('./controllers/handleRedirect');

const urlRoute = require('./routes/url');

const app = express();

PORT = process.env.PORT;
MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  console.log('MongoDB Connected!');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/', urlRoute);
app.get('/:shortID', handleRedirect);

app.listen(PORT || 5001, () => {
  console.log(`Server running on ${PORT}`);
});
