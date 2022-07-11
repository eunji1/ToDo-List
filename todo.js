let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('list');
let cnt = 1;

button.addEventListener('click', clickButton);

function clickButton(){
    let temp = document.createElement('li');
    // li에 속성값 부여
    temp.setAttribute("class", "todo-list");
    temp.setAttribute("id", "li"+cnt);
    // input값 저장하기
    temp.innerHTML = input.value;
    // 삭제 button 만들기
    btnType = "<button type='button' class='btn' onclick='remove("+cnt+")'>삭제</button>"
    temp.innerHTML += btnType;
    list.appendChild(temp);
    cnt++;
}

function remove(cnt){
    // 삭제 버튼 cnt값과 li(id)의 cnt값과 동일한 li를 삭제 
    let li = document.getElementById('li'+cnt);
    list.removeChild(li);
}