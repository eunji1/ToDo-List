import Component from "../Core";

class Button extends Component {
  template() {
    return `
        <button class="up">+</button>
        <button class="down">-</button>`;
  }
  setUp() {
    this.state = "1";
  }
  setState(newState) {
    this.state = newState;
  }
  setEvent() {
    let eventTargets = this.target.querySelectorAll("button");
    for (let i of eventTargets) {
      // console.log(i);
      i.addEventListener("click", () => this.props(i.innerText));
    }
  }
}

export default Button;
