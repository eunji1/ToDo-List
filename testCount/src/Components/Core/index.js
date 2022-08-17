class Component {
  target;
  state;
  props;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.setUp();
    this.render();
    this.setEvent();
  }
  setUp() {}
  template() {
    return "";
  }
  render() {
    this.target.innerHTML = this.template();
    this.componentDidMount();
  }
  componentDidMount() {}
  setState(newState) {
    this.state = newState;
    this.render();
  }
  setEvent() {}
}

export default Component;
