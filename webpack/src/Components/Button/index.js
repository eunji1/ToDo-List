import Component from "../Core";

class Button extends Component {
  setup() {
    this.state = state;
  }
  template() {
    const { items } = this.state;
    return '<button type="button" id="button">입력</button>';
  }
  setEvent() {
    // 모든 이벤트를 this.target에 등록하여 사용하면 된다.
  }
}

export default Button;
