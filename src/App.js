import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";
//class component
//to use state, make class component
class App extends React.Component {
  state = {
    isLoading :  true,
    movies : []
  };
  getMovies = async () => {
    const {data: {data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); //to get api from the link, use axios
    this.setState({movies: movies, isLoading:false}) // first movies is from state, second is from axios but it can be just movies cuz they are the same
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ):(
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres = {movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
