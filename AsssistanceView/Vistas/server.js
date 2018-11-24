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
  const db = client.db('club_baloncesto');

  if (err) {
    return console.error(err);
  }

  app.get('/athletes', async function(req, res) {
    console.log(req.query);
    if (req.query.idGroup) {
      return res.json(
        await db
          .collection('athletes')
          .find({ idGroup: +req.query.idGroup })
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

  app.get('/groups', async function(req, res) {
    console.log(req.query);
    return res.json(
      await db
        .collection('groups')
        .find({})
        .toArray()
    );
  });

  app.get('/assistance', async function(req, res) {
    console.log(req.query);
    if (req.query.idGroup) {
      return res.json(
        await db
          .collection('assistance')
          .find({ idGroup: +req.query.idGroup })
          .toArray()
      );
    }
    if (req.query.idAthlete) {
      return res.json(
        await db
          .collection('assistance')
          .find({ idAthlete: +req.query.idAthlete })
          .toArray()
      );
    }
    return res.json(
      await db
        .collection('assistance')
        .find({})
        .toArray()
    );
  });

  const insertAthletes = function(db) {
    // Get the documents collection
    const collection = db.collection('athletes');
    // Insert some documents
    collection.insertOne(
      {
        idAthlete: '123',
        assisted: false,
        date: '2016-05-18 05:00:00.000+00:00',
        grupo: 1
      },
      function(err, result) {
        console.log('Inserted 1 documents into the collection');
      }
    );
  };

  const insertGroups = function(db) {
    // Get the documents collection
    const collection = db.collection('groups');
    // Insert some documents
    collection.insertOne(
      {
        idAthlete: '123',
        assisted: false,
        date: '2016-05-18 05:00:00.000+00:00',
        grupo: 1
      },
      function(err, result) {
        console.log('Inserted 1 documents into the collection');
      }
    );
  };

  const insertAssistance = function(db) {
    // Get the documents collection
    const collection = db.collection('assistance');
    // Insert some documents
    collection.insertOne(
      {
        idAthlete: '123',
        assisted: false,
        date: '2016-05-18 05:00:00.000+00:00',
        grupo: 1
      },
      function(err, result) {
        console.log('Inserted 1 documents into the collection');
      }
    );
  };
  app.listen(app.get('port'), function() {
    console.log(
      "You're a wizard, Harry. I'm a what? Yes, a wizard, on port",
      app.get('port')
    );
  });
});
