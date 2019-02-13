import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenere } from "./../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/services";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailiyRentalRate: "" },
    genres: [],
    errors: {}
  };

  componentDidMount() {
    const genres = getGenere();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailiyRentalRate
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  saveMovie(data) {}

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre")
      .min(5),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailiyRentalRate: Joi.number()
      .label("Rate")
      .min(0)
      .max(10)
      .required()
  };

  render() {
    const { match, history } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Movie Form </h1>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genre", "Genre", this.state.genres)}
        {this.renderInput("numberinstock", "Number in Stock")}
        {this.renderInput("rate", "Rate")}
        {this.renderButton("Save")}
      </div>
    );
  }
}

export default MovieForm;
