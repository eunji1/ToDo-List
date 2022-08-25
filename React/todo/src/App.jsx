import React from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import List from "./Components/List";
import "./style/App.css";

function App() {
  return (
    <>
      <div className="App">
        <div id="Title">
          <h1>TODO LIST</h1>
        </div>
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
