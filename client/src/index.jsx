import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    // this.saveMovie = this.saveMovie.bind(this);
    // this.deleteMovie = this.deleteMovie.bind(this);
  }

  getMovies(selected) {
    console.log('this is my value: ', selected)
    axios.get(`movies/search?genre_ids=${selected}`, {genre_ids: selected})
    .then(({data}) => {
      console.log('this is my movie list: ', data)
      this.setState({
        movies: data
      });
    })
  }

  saveMovie(movie) {
    // same as above but do something diff
    // axios.post('/save', {})
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  // componentDidMount() {
  //   this.getMovies()
  // }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search getMovies={this.getMovies.bind(this)} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));