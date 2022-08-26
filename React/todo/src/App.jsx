import React from "react";
import Title from "./Components/Title";
import Button from "./Components/Button";
import Input from "./Components/Input";
import List from "./Components/List";
import "./style/App.css";

function App() {
  const inputRef = useRef();
  const [content, setContent] = useState();
  const [todo, setTodo] = useState([]);

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    setTodo([...todo, content]);
    inputRef.current.focus();
    setContent("");
  };

  const onDelete = (removeItem) => {
    setTodo(todo.filter((item) => item !== removeItem));
  };

  return (
    <>
      <div className="todolist">
        <Title />
        <form id="form">
          <Input onChange={onChange} input={inputRef} content={content} />
          <Button onClick={onClick} />
        </form>
        {todo.map((i) => (
          <List />
        ))}
      </div>
    </>
  );
}

export default App;
