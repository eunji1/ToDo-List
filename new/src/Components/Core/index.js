class Component {
  state;
  props;
  target;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.rendering();
  }
  template() {
    return "";
  }
  rendering() {
    this.target.innerHTML = this.template();
    this.componentDidMount();
  }
  setEvent() {}

  setState(newState) {
    this.state = newState;
    this.rendering();
  }
  componentDidMount() {}
}
export default Component;
