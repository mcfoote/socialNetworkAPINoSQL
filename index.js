const mongoose = require('mongoose');
const express = require('express');
const db = require('./config/connection');
const PORT = process.nextTick.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkAPI', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  });