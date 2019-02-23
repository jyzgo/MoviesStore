import React, { Component } from "react";

class SearchBar extends Component {
  state = {};

  handleChange = e => {
    console.log(e.currentTarget.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
