import React from "react";
import Item from "../Item";
import PropTypes from "prop-types";

const List = ({ todos, onDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} onDelete={onDelete} />
      ))}
    </>
  );
};

export default List;

List.propTypes = {
  todos: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
