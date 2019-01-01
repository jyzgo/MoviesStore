import React, { Component } from "react";
import MovieRow from "./MovieRow";
class MovieTable extends Component {
  state = {};
  render() {
    const { movies, onDeletePress, onLikeClick, handleSort } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("title")}>Title</th>
            <th onClick={() => handleSort("genre._id")}>Genre</th>
            <th onClick={() => handleSort("numberInstock")}>Stock</th>
            <th onClick={() => handleSort("dailyRentalRate")}>Rate</th>
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
