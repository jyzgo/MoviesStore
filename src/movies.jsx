import React, { Component } from "react";
import ListGroup from "./components/common/listgroup";
import "./App.css";
import { getMovies, removeMovie, onLikePressed } from "./services/services";
import { getGenere } from "./services/fakeGenreService";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";
import _ from "lodash";
import MovieTable from "./components/MovieTable";
import { Link } from "react-router-dom";
import SearchBar from "./components/common/searchBar";

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenere: null,
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
  handleSearchChange = value => {
    console.log(value);
    this.setState({ searchQuery: value, selectedGenere: null });
  };

  getPagedData = () => {
    const {
      selectedGenere,
      pageSize,
      currentPage,
      genres,
      sortColumn,
      movies: allMovies,
      searchQuery
    } = this.state;
    let filtered = null;

    if (searchQuery) {
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery)
      );
    } else {
      filtered =
        selectedGenere && selectedGenere._id
          ? allMovies.filter(m => m.genre._id === selectedGenere._id)
          : allMovies;
    }
    const pag = paginate(filtered, currentPage, pageSize, selectedGenere);

    const movies = _.orderBy(pag, [sortColumn.path], [sortColumn.order]);
    return {
      movies,
      genres,
      selectedGenere,
      sortColumn,
      currentPage,
      pageSize,
      filtered
    };
  };
  render() {
    const {
      movies,
      genres,
      selectedGenere,
      sortColumn,
      currentPage,
      pageSize,
      filtered
    } = this.getPagedData();
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
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <h2>Showing {filtered.length} movies in database</h2>
          <SearchBar onChange={this.handleSearchChange} />

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
