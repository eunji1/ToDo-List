import Button from "./Components/Button";
import Component from "./Components/Core";
import Title from "./Components/Title";

class App extends Component {
  setUp() {
    this.state = 0;
  }
  template() {
    return `
        <div data-component="Title"></div>
        <div data-component="Button"></div>
        `;
  }
  componentDidMount() {
    const TitleTarget = document.querySelector('[data-component="Title"]');
    const ButtonTarget = document.querySelector('[data-component="Button"]');

    const onclickEvent = (operator) => {
      if (operator === "+") this.setState(this.state + 1);
      else this.setState(this.state - 1);
    };

    new Title(TitleTarget, this.state);
    new Button(ButtonTarget, onclickEvent);
  }
}

const AppComponent = new App(document.querySelector("#App"));
