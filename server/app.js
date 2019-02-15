const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/carousel.db');

var app = express();

app.use(cors());
app.use(morgan('dev'));
// app.use(bodyparser());
app.use(express.static('public'))

app.get('/api/item/:item_id/', function (req, res) {
  var {item_id} = req.params;
  db.all('SELECT img_url FROM images WHERE item_id=?', item_id, function(err, data) {
    if (err) {
      console.log(err);
    }
    res.send(data);
  })
})

app.get('/api/info/:item_id/', function (req, res) {
  var {item_id} = req.params;
  db.all('SELECT isMassdropMade FROM item WHERE item_id=?', item_id, function(err, data) {
    if (err) {
      console.log(err);
    }
    res.send(data);
  })
})

module.exports = app;