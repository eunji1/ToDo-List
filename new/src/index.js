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

    const onclickEvent = (operartor) => {
      if (operartor === "+") this.setState(this.state + 1);
      else this.setState(this.state - 1);
    };

    new Button(ButtonTarget, onclickEvent);
    new Title(TitleTarget, this.state);
  }
}

const AppComponent = new App(document.querySelector("#App"));

// setInterval(() => console.log(counter), 2000);
