import React, { Component } from "react";
import ListGroup from "./components/common/listgroup";
import "./App.css";
import { getMovies, removeMovie, onLikePressed } from "./services/services";
import { getGenere } from "./services/fakeGenreService";
import MovieRow from "./components/MovieRow";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenere: "Action"
  };
  onDeletePress = movie => {
    removeMovie(movie);
    this.setState({ movies: getMovies() });
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenere() });
  }

  handleGenereSelect = genre => {
    this.setState({ selectedGenere: genre });
  };
  onLikePress = movie => {
    onLikePressed(movie);
    this.setState({ movies: getMovies() });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      selectedGenere,
      pageSize,
      currentPage,
      genres,
      movies: allMovies
    } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onSelected={this.handleGenereSelect}
            selectedGenere={selectedGenere}
          />
        </div>
        <div className="col">
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
        </div>
      </div>
    );
  }
}

export default Movies;
