const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./connection');

const app = express();

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8100);
app.use(cors()); // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(express.static('www')); // Our Ionic app build is in the www folder (kept up-to-date by the Ionic CLI using 'ionic serve')

app.get('/atletas', function(req, res) {
  res.send('holaaaaa');
});

app.listen(app.get('port'), function() {
  console.log(
    "You're a wizard, Harry. I'm a what? Yes, a wizard, on port",
    app.get('port')
  );
});
