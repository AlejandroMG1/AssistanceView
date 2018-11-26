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
          .find({ idGroup: req.query.idGroup })
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
          .find({ idGroup: req.query.idGroup })
          .toArray()
      );
    }
    if (req.query.idAthlete) {
      return res.json(
        await db
          .collection('assistance')
          .find({ idAthlete: req.query.idAthlete })
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

  app.get('/schedule', async function(req, res) {
    
    console.log(req.query);
    if (req.query.idGroup) {
      return res.json(
        await db
          .collection('schedule')
          .find({ idGroup: req.query.idGroup })
          .toArray()
      );
    }
    if (req.query.idAthlete) {
      return res.json(
        await db
          .collection('schedule')
          .find({ idAthlete: req.query.idAthlete })
          .toArray()
      );
    }
    return res.json(
      await db
        .collection('schedule')
        .find({})
        .toArray()
    );
  });

  app.post('/athletes', async function(req, res) {
    // Get the documents collection
    const collection = db.collection('athletes');
    // Insert some documents
    const result = await collection.insertOne({
      idAthlete: req.body.idAthlete,
      assisted: false,
      date: req.body.date,
      name: req.body.name,
      idGroup: req.body.idGroup
    });

    return res.json(result.insertedId);
  });

  app.post('/groups', async function(req, res) {
    // Get the documents collection
    const collection = db.collection('groups');
    // Insert some documents
    const result = await collection.insertOne({
      name: req.body.name
    });

    return res.json(result.insertedId);
  });

  app.post('/assistances', async function(req, res) {
    // Get the documents collection
    const collection = db.collection('assistance');
    // Insert some documents
    const result = await collection.insertOne({
      idAthlete: req.body.idAthlete,
      assisted: false,
      date: req.body.date,
      idSchedule: req.body.idSchedule
    });

    return res.json(result);
  });

  app.post('/schedule', async function(req, res) {
    // Get the documents collection
    const collection = db.collection('schedule');
    // Insert some documents
    const result = await collection.insertOne({
      date: req.body.date,
      idGroup: req.body.idGroup
    });

    return res.json(result);
  });

  app.delete('/assistances/:idAthlete/:idSchedule', async function(req, res) {
    // Get the documents collection
    const collection = db.collection('assistance');
    // Insert some documents
    console.log("Delete: ",req.params);
    const result = await collection.deleteOne({
     $and: [ {idAthlete: {$eq : req.params.idAthlete}},
      {idSchedule: {$eq: req.params.idSchedule}} ]
    });

    return res.json(result);
  });


  app.listen(app.get('port'), function() {
    console.log(
      "You're a wizard, Harry. I'm a what? Yes, a wizard, on port",
      app.get('port')
    );
  });
});
