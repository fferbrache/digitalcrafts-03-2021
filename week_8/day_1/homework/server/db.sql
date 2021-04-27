CREATE DATABASE nationalparklist;

CREATE TABLE park(
  park_id SERIAL PRIMARY KEY,
  park_name VARCHAR(255),
  park_location VARCHAR(255)
);