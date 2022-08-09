import Component from "../Core";

class Button extends Component {
  template() {
    return `<button class="a">${this.props[0]}</button>`;
  }
  setEvent() {
    let eventTarget = document.querySelector(".a");
    eventTarget.onclick = function () {
      console.log("Aaa");
    };
  }
}

export default Button;
