import React, { useState, useRef } from "react";
import Title from "./Components/Title";
import Insert from "./Components/Insert";
import List from "./Components/List";
import "./style/App.css";
import ListStyled from "./Components/List/ListStyle";
import Wrapper from "./Components/Wrapper/Wrapper";

function App() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  const handleSubmit = (text) => {
    // setTodos([...todos, text]);
    const todo = {
      id: nextId.current,
      text,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; // nextId를 1씩 더하기
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // console.log(todos.map((todo) => todo.checked));

  return (
    <>
      <Wrapper>
        <Title />
        <Insert onSubmit={handleSubmit}></Insert>
        <ListStyled>
          <List todos={todos} onDelete={onDelete} />
        </ListStyled>
      </Wrapper>
    </>
  );
}

export default App;
