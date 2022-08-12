import Button from "./Components/Button";
import Component from "./Components/Core";

class App extends Component {
    template() {
        return `<form data-component = '#input'></form>`
    }
    ComponentDidMount() {
        const formInput = this.target.querySelector('[data-component = "#input"]')
 
    }
}

clickButton() {
    let li = document.createElement("li");
    let removeBtn = document.createElement("button");

    li.innerHTML = input.value;
    removeBtn.innerText = "삭제";
    // removeBtn.addEventListener("click", removeOne);
    li.appendChild(removeBtn);
    list.appendChild(li);
    li.setAttribute("id", num);
    let toDoObj = {
        text: input.value,
        id: num,
    };
    toDos.push(toDoObj);
    
}