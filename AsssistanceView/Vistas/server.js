//server.js (todo-ionic2-heroku/server.js)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { connect } = require('./connection');

const app = express();

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8200);
app.use(cors()); // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(express.static('www')); // Our Ionic app build is in the www folder (kept up-to-date by the Ionic CLI using 'ionic serve')

connect(function(err, client) {
  const db = client.db();

  if (err) {
    return console.error(err);
  }

  app.get('/athletes', async function(req, res) {
    console.log(req.query);
    if (req.query.groupId) {
      return res.json(
        await db
          .collection('athletes')
          .find({ grupo: +req.query.groupId })
          .toArray()
      );
    }
    return res.json(
      await db
        .collection('athletes')
        .find({})
        .toArray()
    );
  });

  app.listen(app.get('port'), function() {
    console.log(
      "You're a wizard, Harry. I'm a what? Yes, a wizard, on port",
      app.get('port')
    );
  });
});
