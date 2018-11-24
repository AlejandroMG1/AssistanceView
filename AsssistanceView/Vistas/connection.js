const MongoClient = require('mongodb').MongoClient;

// Connection URL
// const url = 'mongodb+srv://@cluster0-tmgye.mongodb.net/club_baloncesto?retryWrites=true';
const url = 'mongodb://jairo:sabor2018@ds157522.mlab.com:57522/club_baloncesto';

exports.connect = serverCB => {
  // Use connect method to connect to the server
  MongoClient.connect(
    url,
    serverCB
  );
};
