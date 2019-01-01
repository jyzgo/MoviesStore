import React, { Component } from "react";
import MovieRow from "./MovieRow";
import TableHeader from "./common/tableHeader";
class MovieTable extends Component {
  state = {};

  render() {
    const columns = [
      { path: "title", title: "title" },
      { path: "genre._id", title: "Genre" },
      { path: "numberInstock", title: "Stock" },
      { path: "dailyRentalRate", titel: "Rate" }
    ];
    const { movies, onDeletePress, onLikeClick } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          handleSort={this.props.handleSort}
          sortColumn={this.props.sortColumn}
        />
        {/* <thead>
          <tr>
            <th onClick={() => this.handleSort("title")}>Title</th>
            <th onClick={() => this.handleSort("genre._id")}>Genre</th>
            <th onClick={() => this.handleSort("numberInstock")}>Stock</th>
            <th onClick={() => this.handleSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead> */}
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
