const { connect, connection } = require('mongoose');

const connectionString =  'mongodb://localhost/socialNetworkAPINoSQL';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
module.exports = connection;