import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";
export default class Main extends React.Component {
  state = {
    movies: [],
    loading : true
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=fcca3cb3&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=fcca3cb3&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading : false }));
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        <div className="container content">
          <Search searchMovie={this.searchMovies}/>
          {this.state.loading ? <Loader/> : <Movies movies={this.state.movies} />}
        </div>
      </>
    );
  }
}
