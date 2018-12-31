import React from "react";

const ListGroup = p => {
  const { selectedGenere, items, valueProperty, textProperty, onSelected } = p;
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
            onClick={() => onSelected(item)}
            className={
              selectedGenere === item
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item[valueProperty]}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};
export default ListGroup;
