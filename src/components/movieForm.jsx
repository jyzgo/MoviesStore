import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberinstock: "", rate: "" },
    errors: {}
  };
  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre")
      .min(5),
    numberinstock: Joi.number()
      .required()
      .min(0)
      .label("Number in Stock"),
    rate: Joi.number()
      .label("Rate")
      .min(0)
      .max(5)
      .required()
  };

  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h1>Movie Form </h1>
        {this.renderInput("title", "Title")}
        {this.renderInput("genre", "Genre")}
        {this.renderInput("numberinstock", "Number in Stock")}
        {this.renderInput("rate", "Rate")}
        {this.renderButton("Save")}
      </div>
    );
  }
}

export default MovieForm;
