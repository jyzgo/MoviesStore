import React, { Component } from "react";
import MovieRow from "../MovieRow";
import _ from "lodash";

class TableBody extends Component {
  state = {};
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={column.path}> {this.renderCell(item, column)} </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
