import React, { Component } from "react";
//columns:array
//sort column
//onSort :function
class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.handleSort(sortColumn);
  };
  state = {};
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th onClick={() => this.raiseSort(column.path)}>{column.title}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
