const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/carousel.db');

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser());
app.use(express.static('public'))

app.get('/api/item/:item_id/', function (req, res) {
  console.log(req.params);
  var item_id = req.params.item_id;
  console.log('item id', item_id);
  db.all('SELECT img_url FROM images WHERE item_id=?', item_id, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data)
    res.send(data);
  })
})

app.listen(3001, () => console.log('server is listening on port 3001'))