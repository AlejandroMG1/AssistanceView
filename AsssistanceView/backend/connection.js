const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url =
  'mongodb+srv://jairo:sabor2018@cluster0-tmgye.mongodb.net/club_baloncesto?retryWrites=true';

// Use connect method to connect to the server
MongoClient.connect(
  url,
  function(err, client) {
    console.log('Connected successfully to server');
  }
);

exports.test = () => {
  console.log('holaaaaaaaaaaaaaaaaa');
};
