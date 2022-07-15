let button = document.getElementById("button");
let input = document.getElementById("input");
let list = document.getElementById("list");
let form = document.getElementById("form")

if(!localStorage.getItem('cnt')){
    localStorage.setItem('cnt', 0)
}
let num = localStorage.getItem('cnt');

function makeNum() {

    if (num === undefined){
        num = 1;
    } else {
        num++;
        localStorage.setItem('cnt', num);
    }
    return num;    
}

makeNum();

let storageString = [];

// localStorage.clear()
button.addEventListener("click", clickButton);

form.addEventListener("submit",(e)=>{ 
    e.preventDefault();
    clickButton()
})

function clickButton() {
    let temp = document.createElement("li");
    let removeButton = document.createElement("button");
    temp.innerHTML = input.value;
    removeButton.innerText = "삭제";
    removeButton.addEventListener("click", removeOne);
    temp.appendChild(removeButton);
    list.appendChild(temp);
    localStorage.setItem(num,input.value);  
    temp.setAttribute('id',num)
    input.value = "";
    num++;
}

// let regetItem = document.querySelectorAll("ul > li");
// console.log(regetItem);

function removeOne(event) {
    let removing = event.target.parentElement;
    console.log(removing.id); //
    localStorage.removeItem(removing.id);
    // localStorage.clear()
  
    //storageString.push(JSON.stringify(list));
    // localStorage.setItem("todos",storageString);
    removing.remove();
}


// storageString을 list안으로 넣어주기


function init() {   
    if (localStorage.length > 1) {
        for(let i = 0; i<localStorage.length; i++){
            let dolist = document.createElement("li");
            let doRmbtn = document.createElement("button");
            let storageKey = localStorage.key(i);
            let storageValue = localStorage.getItem(storageKey);
            dolist.setAttribute("id",storageKey);
            dolist.append(storageValue);
            doRmbtn.innerText="삭제";
            doRmbtn.addEventListener("click", removeOne);
            dolist.appendChild(doRmbtn);
            list.appendChild(dolist);
            console.log(localStorage.key(i))
            
    }
    }
    document.getElementById("cnt").remove();

}

// console.log(localStorage.getItem("todos"));
init();

// list.sort((a, b) => {
//     if(a.id > b.id) return 1;
//     if(a.id < b.id) return -1;
//     return 0;
// })