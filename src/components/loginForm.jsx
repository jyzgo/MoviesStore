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

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    //Call the server
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const account = this.state.account;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
          />

          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
