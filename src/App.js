import React from 'react';
import axios from 'axios';

//class component
//to use state, make class component
class App extends React.Component {
  state = {
    isLoading :  true,
    movies : []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json"); //to get api from the link, use axios
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {this.state.isLoading ? "Loading" : "We are ready"}
      </div>
    );
  }
}

export default App;
