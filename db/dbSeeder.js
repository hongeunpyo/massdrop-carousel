const faker = require('faker');
const {imagePush, generateRandomNumber} = require('./dataHelpers.js');
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./carousel.db');

db.run(`CREATE TABLE item (item_id INTEGER PRIMARY KEY AUTOINCREMENT, item_name VARCHAR, isMassdropMade BOOLEAN)`);
db.run(`CREATE TABLE images (image_id INTEGER PRIMARY KEY AUTOINCREMENT, img_url VARCHAR, item_id INTEGER, FOREIGN KEY (item_id) REFERENCES item(item_id))`);
db.serialize(function() {
  
  for (var k = 1; k < 101; k++) {
    var itemVals = faker.commerce.productName();
    var bool = Math.round(Math.random());
    db.run(`INSERT INTO item(item_name, isMassdropMade) VALUES(?, ?)`,[itemVals, bool], function(err) {
      if (err) {
        console.log('encountered error in item seeding', err);
      }
    });
  }
  
  var imagesArr = imagePush();
  for (var i = 1; i < 101; i ++) {
    var genIndex = generateRandomNumber();
    var images = imagesArr.slice(0, genIndex);
    for (var j = 0; j < images.length; j++) {
      db.run(`INSERT INTO images(img_url, item_id) VALUES(?, ?)`,[images[j], i], function(err) {
        console.log('encountered error in image seeding', err);
      });
    }
  }
  db.close();
})