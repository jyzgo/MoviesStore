import React, { Component } from "react";
import Like from "./common/like";

class MovieRow extends Component {
  state = {};
  render() {
    const movie = this.props.movie;
    return (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInstock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like
            isLike={movie.Like}
            onLikeClick={() => this.props.onLikeClick(movie)}
          />
        </td>
        <td>
          <button
            onClick={() => {
              this.props.onDeletePress(movie);
            }}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
