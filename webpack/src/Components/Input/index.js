import Component from "../Core";

class Input extends Component {
  template() {
    return `<input type="text" id = "input" placeholder="할 일을 추가해주세요.">`;
  }
  setEvent() {
    const { additem } = this.props;
    this.addEvent("submit", "#input");
  }
}
// const button = document.querySelector("#button");
// const input = document.querySelector("#input");
// button.addEventListener("click", clickButton);

export default Input;
