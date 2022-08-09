import Button from "./Components/Button";
import Component from "./Components/Core";
import Title from "./Components/Title";
const temp = 0;

class App extends Component {
  state = 0;
  template() {
    return `
            <div component="Title">${this.state}</div>
            <div component="Button"></div>
        `;
  }

  componentDidMount() {
    const { increase } = this;
    // const TitleTarget = document.querySelector('[component="Title"]');
    const ButtonTarget = document.querySelector('[component="Button"]');
    new Button(ButtonTarget, "+1");

    new Title(TitleTarget, this.state);
    // document
    //   .querySelector(".a")
    //   .addEventListener("click", () => this.setState(this.state + 1));
  }
}

new App(document.querySelector("#App"));

// setInterval(() => console.log(counter), 2000);
