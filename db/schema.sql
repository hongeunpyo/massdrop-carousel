IF EXISTS DROP DATABASE massdrop-carousel;

CREATE DATABASE massdrop-carousel;

CREATE TABLE item (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  img_url VARCHAR(255),
  item_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (item_id) REFERENCES item(id)
);