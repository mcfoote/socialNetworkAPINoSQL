const express = require('express');
const db = require('./config/connection');
const PORT = process.nextTick.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes'));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  });