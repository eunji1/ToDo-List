import Component from "../Core";

class Input extends Component {
  template() {
    return `
    <form id="inputForm">
    <input type="text" id = "input" placeholder="할 일을 추가해주세요.">
    </form>`;
  }
  render() {}
  setEvent() {
    const { additem } = this.props;
    this.addEvent("submit", "#input");
  }
}
// const button = document.querySelector("#button");
// const input = document.querySelector("#input");
// button.addEventListener("click", clickButton);

export default Input;

// button.addEventListener("click", clickButton);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   clickButton();
// });

// function clickButton() {
//   let li = document.createElement("li");
//   let removeButton = document.createElement("button");

//   li.innerHTML = input.value;
//   removeButton.innerText = "삭제";
//   removeButton.addEventListener("click", removeOne);

//   li.appendChild(removeButton);
//   list.appendChild(li);
//   // li에 속성 부여하기
//   li.setAttribute("id", num);
//   let toDoObj = {
//     text: input.value,
//     id: num,
//   };
//   // toDos = JSON.parse(localStorage.getItem("todos"));
//   toDos.push(toDoObj);
//   // localStorage에 todos를 저장하기
//   localStorage.setItem("todos", JSON.stringify(toDos));
//   // 입력값 초기화
//   input.value = "";
//   num++;
// }
