import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let classes = "fas fa-heart";
    if (this.props.isLike === false) {
      classes = "far fa-heart";
    }
    return (
      <i
        onClick={this.props.onLikeClick}
        style={{ cursor: "pointer" }}
        className={classes}
      />
    );
  }
}

export default Like;
