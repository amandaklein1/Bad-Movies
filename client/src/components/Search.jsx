import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selectedGenre: ''
    };
    this.handleChange = this.handleChange.bind(this)
    // this.genreList = this.genreList.bind(this)
    // this.getGenres = this.getGenres.bind(this)
  }

  // genreList() {
  //   return this.getGenres()
  // }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('movies/genres')
    .then(({data}) => {
      console.log('this is my response: ', data)
      this.setState({
        genres: data
      });
    })

  }



  handleChange(event) {
    console.log('this is my event: ', event.target.value)

    this.setState({
      selectedGenre: event.target.value
    });
  }

  componentDidMount() {
    this.getGenres()
  }

  render() {

    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <div>
        <select onChange={this.handleChange}>
          {this.state.genres.map((genre) => {
            return <option key={genre.name} value={genre.id}>{genre.name}</option>
          })}
        </select>
        </div>
        <br/><br/>

        <button onClick={() => {this.props.getMovies(this.state.selectedGenre)}}>Search</button>

      </div>
    );
  }
}


export default Search;