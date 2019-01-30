import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import { Link } from "react-router-dom";
class MovieTable extends Component {
  state = {};
  columns = [
    {
      path: "title",
      title: "title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", title: "Genre" },
    { path: "numberInstock", title: "Stock" },
    { path: "dailyRentalRate", title: "Rate" },
    {
      path: "like",
      content: movie => (
        <Like isLike={movie.Like} onLikeClick={this.props.onLikeClick} />
      )
    },
    {
      path: "delete",
      content: movie => (
        <button
          onClick={() => {
            this.props.onDeletePress(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          handleSort={this.props.handleSort}
          sortColumn={this.props.sortColumn}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MovieTable;
