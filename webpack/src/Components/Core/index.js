class Component {
  state;
  props;
  target;

  constructor(target, props) {
    this.target = target;
    // document.querySelector('form');
    this.props = props;
    this.setState();
    this.setEvent();
    this.render();
  }

  template() {
    return "";
  }
  setEvent() {}
  setUp() {}
  ComponentDidMount() {
    const { addItem } = this;
  }

  render() {
    this.target.innerHTML = "";
    this.template();
    this.ComponentDidMount();
  }
  setState(newState) {
    this.state = { ...this.state, newState };
    this.render();
  }
}
export default Component;
