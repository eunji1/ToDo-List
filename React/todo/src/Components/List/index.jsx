import React from "react";
import Item from "../Item";

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
