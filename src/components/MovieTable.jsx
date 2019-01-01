import React, { Component } from "react";
import MovieRow from "./MovieRow";
import TableHeader from "./common/tableHeader";
class MovieTable extends Component {
  state = {};
  columns = [
    { path: "title", title: "title" },
    { path: "genre._id", title: "Genre" },
    { path: "numberInstock", title: "Stock" },
    { path: "dailyRentalRate", title: "Rate" },
    { path: "like" },
    { path: "delete" }
  ];

  render() {
    const { movies, onDeletePress, onLikeClick } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          handleSort={this.props.handleSort}
          sortColumn={this.props.sortColumn}
        />
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
