import Component from "../Core";

class Button extends Component {
  template() {
    return `
    <button class="inbutton">+</button>
    <button class="debutton">-</button>
    `;
  }
  setUp() {
    this.state = "1";
  }
  setState(newState) {
    this.state = newState;
    this.render();
  }
  setEvent() {
    let eventTargets = this.target.querySelectorAll("button");
    for (let i of eventTargets) {
      console.log(i);
      i.addEventListener("click", () => this.props(i.innerText));
    }

    // let eventTargetIn = this.target.querySelector(".inbutton");
    // let eventTargetDe = this.target.querySelector(".debutton");
    // eventTargetIn.addEventListener("click", () => this.props("+"));
    // eventTargetDe.addEventListener("click", () => this.props("-"));
  }
}

export default Button;
