const faker = require('faker');
const {imagePush, generateRandomNumber} = require('./dataHelpers.js');
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./carousel.db');
var imagesArr = imagePush();

db.serialize(function() {
  db.run(`CREATE TABLE item (id INTEGER PRIMARY KEY AUTOINCREMENT, item_name VARCHAR(255))`);
  db.run(`CREATE TABLE images (id INTEGER PRIMARY KEY AUTOINCREMENT, img_url VARCHAR(255), item_id INT, FOREIGN KEY (item_id) REFERENCES item(id))`);
  
  for (var i = 1; i <= 100; i++) {
    var item_name = faker.commerce.product();
    var imageArr = imagesArr.slice(0, generateRandomNumber() + 1);
    var itemVals = [item_name];
    console.log(itemVals);
    db.run("INSERT INTO item (item_name) VALUES(?)", itemVals);
    for (var j = 0; j < imageArr.length; j++) {
      var imageVals = [imageArr[j], i];
      console.log(imageVals, j);
      db.run("INSERT INTO images (img_url, item_id) VALUES(?, ?)", imageVals);
    }
  }
})
