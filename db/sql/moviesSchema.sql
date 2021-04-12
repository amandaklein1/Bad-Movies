-- SET UP SCHEMA HERE
DROP DATABASE badmovies;
CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites (
  id int(255) NOT NULL,
  movieName varchar(60) NOT NULL,
  genreID int(255) NOT NULL,
  genreName varchar(60) NOT NULL,
  PRIMARY KEY(id)
);