class Component {
  state;
  props;
  target;

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
  setEvent() {}

  setState(newState) {
    this.state = newState;
    this.render();
  }
  componentDidMount() {}
}
export default Component;
