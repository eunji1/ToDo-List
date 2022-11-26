import React, { useState } from "react";
import ListStyled from "./Components/List/ListPresent";
import Wrapper from "./Components/Wrapper/WrapperPresent";
import Title from "./Components/Title";
import Insert from "./Components/Insert";
import List from "./Components/List";
import { v4 } from "uuid";

function App() {
  //  List State
  const [todos, setTodos] = useState([]);

  // useRef 사용해서 id값을 갱신
  // UUID를 사용하는게 좋습니다

  // useRef 1번째 DOM을 건드리고 싶을때
  // useRef 2번째 전역변수를 만들고싶을때
  const handleSubmit = (text) => {
    // setTodos([...todos, text]);
    const todo = {
      id: v4(),
      text,
    };
    // 불변성
    // slice, concat,reduce,filter
    // immer라는 라이브러리를 통해 불변성을 지켜줄수 있어요
    setTodos(todos.concat(todo));
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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
