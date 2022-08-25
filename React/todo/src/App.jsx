import React from "react";
import Title from "./Components/Title";
import Button from "./Components/Button";
import Input from "./Components/Input";
import List from "./Components/List";
import "./style/App.css";

function App() {
  return (
    <>
      <div className="todolist">
        <Title />
        <form id="form">
          <Input />
          <Button />
        </form>
        <List />
      </div>
    </>
  );
}

export default App;
