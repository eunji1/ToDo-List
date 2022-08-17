import Component from "../Core";

class Title extends Component {
  template() {
    return `<div>${this.props}</div>`;
  }
  render() {
    this.target.innerHTML += this.template();
  }
}
export default Title;
