import Input from "./Components/Input";
import Component from "./Components/Core";

class App extends Component {
    setup() {
        this.state = ''
    }
    template() {
        return `<form data-component = 'Input'></form>`
    }
    ComponentDidMount() {
        const formInput = this.target.querySelector('[data-component = "Input"]')
        clickButton() {
            let toDoObj = {
                text: formInput.value,
                id: num
            };
            // toDos.push(toDoObj);   
        }  
        formInput.addEventListener("submit", (e)=>{
            e.preventDefault();
            clickButton();
        })
    }
}