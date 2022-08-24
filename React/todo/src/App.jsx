import React from "react";
import "./style/App.css";

function App() {
  return (
    <>
      <div className="App">
        <div id="Title">
          <h1>TODO LIST</h1>
        </div>
        <form id="form">
          <input
            type="text"
            id="input"
            placeholder="할 일을 추가해주세요."
          ></input>
          <button type="button" id="button">
            입력
          </button>
        </form>

        <div id="todo-list">
          <ul id="list"></ul>
          <li>투두 리스트 만들기</li>
        </div>
      </div>
    </>
  );
}

export default App;
