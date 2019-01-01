import React, { Component } from "react";
import MovieRow from "./MovieRow";
class MovieTable extends Component {
  state = {};
  handleSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.handleSort(sortColumn);
  };
  render() {
    const { movies, onDeletePress, onLikeClick } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.handleSort("title")}>Title</th>
            <th onClick={() => this.handleSort("genre._id")}>Genre</th>
            <th onClick={() => this.handleSort("numberInstock")}>Stock</th>
            <th onClick={() => this.handleSort("dailyRentalRate")}>Rate</th>
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
                onDeletePress={onDeletePress}
                onLikeClick={onLikeClick}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
