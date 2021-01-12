const express = require('express');

const mongoose = require('mongoose');

const MONGODB_URI =
  'mongodb+srv://aviral:dNT8VD7PBLQ5tF30@cluster0.yrqwv.mongodb.net/cable-prices?retryWrites=true&w=majority';

const app = express();

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8080);
  })
  .catch(err => console.log(err));
