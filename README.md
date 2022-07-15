# ToDo-List

![이미지](%ED%88%AC%EB%91%90%ED%88%AC%EB%91%90.png)

++ [JavaScript] 웹 스토리지 사용하기

# 추가
1. 입력 버튼을 누르면 ul li 목록으로 넣기
    - enter키로도 가능하게 만들기
        - input의 event기능에 submit이용하기
2. storage 저장하기
    - 객체로 저장 {key, value} `{num: input값}`
    - JSON.stringfy: JSON 문자열로 저장
    - JSON.parse: 문자열 형식을 객체 형태로 저장
    - todo 목록안의 text를 삭제하면 메모리 안에 저장된 값도 같이 삭제되어야함

# 보완
1. storage에 저장된 값들 {key:value}이 새로고침을 하면 순서가 바뀐다.
    (todos 리스트를 만들어서 저장)`{todos: "text: text, id: id", ...}`