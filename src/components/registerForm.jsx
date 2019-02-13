import React, { Component } from "react";
import Form from "./common/form";
import { Joi } from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" }
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username")
      .email(),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    name: Joi.string()
      .required()
      .label("Name")
      .min(5)
  };

  doSubmit = () => {
    //call server
    console.log("register");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
