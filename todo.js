let button = document.getElementById("button");
let input = document.getElementById("input");
let list = document.getElementById("list");
let form = document.getElementById("form");
let toDos =
  localStorage.todos === undefined ? [] : JSON.parse(localStorage.todos);
// cnt 초깃값 설정
if (!localStorage.getItem("cnt")) {
  localStorage.setItem("cnt", 0);
}
// li 속성 구분할 값 num으로 지정
let num = localStorage.getItem("cnt");

function makeNum() {
  // num 값을 cnt값에서 +1씩 추가해주기
  if (num === undefined) {
    num = 1;
  } else {
    num++;
    localStorage.setItem("cnt", num);
  }
  return num;
}

function clickButton() {
  let li = document.createElement("li");
  let removeButton = document.createElement("button");

  li.innerHTML = input.value;
  removeButton.innerText = "삭제";
  removeButton.addEventListener("click", removeOne);

  li.appendChild(removeButton);
  list.appendChild(li);
  // li에 속성 부여하기
  li.setAttribute("id", num);
  let toDoObj = {
    text: input.value,
    id: num,
  };
  // toDos = JSON.parse(localStorage.getItem("todos"));
  toDos.push(toDoObj);
  // localStorage에 todos를 저장하기
  localStorage.setItem("todos", JSON.stringify(toDos));
  // 입력값 초기화
  input.value = "";
  num++;
}

function removeOne(event) {
  let removing = event.target.parentElement;
  removing.remove();
  toDos = toDos.filter(function (lst) {
    return lst.id !== parseInt(removing.id);
  });
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function init() {
  for (index in toDos) {
    let stringList = toDos[index];
    let valueText = stringList[Object.keys(stringList)[0]];
    let valueId = stringList[Object.keys(stringList)[1]];
    // todos 메모리에 저장된 값을 불러와서 list안에 다시 넣기
    let dolist = document.createElement("li");
    let dobtn = document.createElement("button");
    dolist.setAttribute("id", valueId);
    dolist.append(valueText);
    dobtn.innerText = "삭제";
    dobtn.addEventListener("click", removeOne);
    dolist.appendChild(dobtn);
    list.appendChild(dolist);
  }
}

button.addEventListener("click", clickButton);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clickButton();
});

makeNum();

init();
