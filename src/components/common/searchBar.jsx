import React, { Component } from "react";

class SearchBar extends Component {
  state = {};

  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={e => onChange(e.currentTarget.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
