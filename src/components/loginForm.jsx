import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: {}
  };
  validate = () => {
    const errors = {};
    var account = this.state.account;
    if (account.username.trim() === "") {
      errors.username = "User name is required";
    } else if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? {} : errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    //Call the server
  };
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") {
        return "Username is required";
      }
    }

    if (name === "password" && value.trim() === "") {
      return "Password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
