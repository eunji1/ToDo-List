import Input from "../Input";

class Items extends Component {
  setup() {
    // let toDos =
    //   localStorage.todos === undefined ? [] : JSON.parse(localStorage.todos);
    // let toDoObj = {
    //   text: Input.value,
    //   id: num,
    // };
    // toDos.push(toDoObj);
    // localStorage.setItem("todos", JSON.stringify(toDos));
    //this.state = {todos: [text: , id: ]};
  }
  template() {
    //const { toDos } = this.state;
    // .list 안에 넣기
    return `
        <li>
            'inputText'
            <button class="delBtn">삭제</button>
        </li>
        `;
  }
  setEvent() {
    this.target.querySelectorAll(".delBtn").forEach((delBtn) => {
      delBtn.addEventLister("click", (event) => {
        event.target.parentElement.remove();
      });
    });
  }
}
