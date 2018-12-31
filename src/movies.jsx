import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMovies, removeMovie, onLikePressed } from "./services/services";
import MovieRow from "./components/MovieRow";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  onDeletePress = movie => {
    removeMovie(movie);
    this.setState({ movies: getMovies() });
  };

  onLikePress = movie => {
    onLikePressed(movie);
    this.setState({ movies: getMovies() });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  state = { movies: getMovies(), pageSize: 4, currentPage: 1 };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <React.Fragment>
        <h2>This is movies</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              return (
                <MovieRow
                  key={movie._id}
                  movie={movie}
                  onDeletePress={this.onDeletePress}
                  onLikeClick={this.onLikePress}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
