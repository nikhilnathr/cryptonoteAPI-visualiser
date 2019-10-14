CREATE TABLE IF NOT EXISTS Addresses
(
  id INT NOT NULL AUTO_INCREMENT,
  address VARCHAR(500) NOT NULL,
  joined_time INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (address)
);

CREATE TABLE IF NOT EXISTS Global_Dump
(
  id INT NOT NULL AUTO_INCREMENT,
  address_id INT NOT NULL,
  hash INT NOT NULL,
  total_hashes INT NOT NULL,
  valid_shares INT NOT NULL,
  invalid_shares INT NOT NULL,
  due INT NOT NULL,
  paid INT NOT NULL,
  last_share_time INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Miners
(
  id INT NOT NULL AUTO_INCREMENT,
  miner_name VARCHAR(500) NOT NULL,
  address_id INT NOT NULL,
  joined_time INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Miner_Dump
(
  id INT NOT NULL AUTO_INCREMENT,
  last_share_time INT NOT NULL,
  miner_id INT NOT NULL,
  hash INT NOT NULL,
  total_hash INT NOT NULL,
  valid_shares INT NOT NULL,
  invalid_shares INT NOT NULL,
  PRIMARY KEY (id)
);