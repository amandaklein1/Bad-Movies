const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file


// GET genres
//`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

// GET least pop movies by genre
// `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&with_original_language=en&with_genres=${id}`


let getMoviesByGenreID = ((id) => {
  let options = {
    type: `GET`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&with_original_language=en&with_genres=${id}`
  }
  return axios(options);
})


let getGenreTitles = (() => {
  let options = {
    type: `GET`,
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  }
  return axios(options);
})

module.exports.getGenreTitles = getGenreTitles;
module.exports.getMoviesByGenreID = getMoviesByGenreID;
