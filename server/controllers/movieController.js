const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    apiHelpers.getMoviesByGenreID(req.query.genre_ids)
    .then(({data}) => {
      res.status(200).json(data.results);
    })
    .catch((err) => {
      console.log('this is my error: ', err);
      res.status(404);
    })
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    apiHelpers.getGenreTitles()
    .then(({data}) => {
      res.status(200).json(data.genres);
    })
    .catch((err) => {
      console.log('this is my error: ', err)
      res.sendStatus(404);
    })
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back
  },
  // POST movie to DB
  saveMovie: (req, res) => {
    console.log(req)
    var params = [req.body.id, req.body.title, req.body.genre_ids];

    // movieModel.saveItem(params, function(err, results) {
    //   if (err) {
    //     console.log('DID NOT SAVE', err)
    //   } else {
    //     res.sendStatus(201);
    //   }
    // })


  },
  // DELETE movie from DB
  deleteMovie: (req, res) => {
    var params = [req.body.id];
    models.deleteItem(params, function(err, results) {
      if (err) {
        console.log('DID NOT DELETE', err)
      } else {
        res.sendStatus(201);
      }
  })
}
}
