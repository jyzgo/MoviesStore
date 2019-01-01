import React, { Component } from "react";
import ListGroup from "./components/common/listgroup";
import "./App.css";
import { getMovies, removeMovie, onLikePressed } from "./services/services";
import { getGenere } from "./services/fakeGenreService";
import MovieRow from "./components/MovieRow";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";
import _ from "lodash";
import MovieTable from "./components/MovieTable";
class Movies extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };
  onDeletePress = movie => {
    removeMovie(movie);
    this.setState({ movies: getMovies() });
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "Allgenres" }, ...getGenere()];
    this.setState({ movies: getMovies(), genres });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleGenereSelect = genre => {
    this.setState({ selectedGenere: genre, currentPage: 1 });
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
      sortColumn,
      movies: allMovies
    } = this.state;
    const filtered =
      selectedGenere && selectedGenere._id
        ? allMovies.filter(m => m.genre._id === selectedGenere._id)
        : allMovies;
    const pag = paginate(filtered, currentPage, pageSize, selectedGenere);

    const movies = _.orderBy(pag, [sortColumn.path], [sortColumn.order]);
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
          <h2>Showing {filtered.length} movies in database</h2>
          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            handleSort={this.handleSort}
            onDeletePress={this.onDeletePress}
            onLikeClick={this.onLikePress}
            handleSort={this.handleSort}
          />
          <Pagination
            itemsCount={movies.length}
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
