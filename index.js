const mongoose = require('mongoose');
const express = require('express');
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

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));