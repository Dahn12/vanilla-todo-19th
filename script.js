const inputField = document.querySelector('.todo-input'); //todo 입력창
const TodoButton = document.querySelector('.todo-input-button'); //+추가 버튼
const todoLists = document.querySelector('.todo-lists'); //todo list목록
const doneLists = document.querySelector('.done-lists'); //done list목록


//+ 버튼 클릭시 todo에 list를 추가
TodoButton.addEventListener('click', addTodo); 
function addTodo(event){
    event.preventDefault(); //event에 대한 기본 동작 실행 방지
    
    //todo list div 생성
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    //todo list li 생성
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-li");
   
    //todo list done button 생성
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #28c840;"></i>';
    doneButton.classList.add("done-button");
   
    //todo list 삭제 button 생성
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-square-minus" style="color: #ff5f58;"></i>'
    deleteButton.classList.add('delete-button');
   
    //공백 여부에 따른 처리
    if(!inputField.value.trim())
            alert("할일을 추가해 보세요!");
    else{
        todoLi.innerText = inputField.value;
        todoDiv.appendChild(todoLi);
        todoDiv.appendChild(doneButton);
        todoDiv.appendChild(deleteButton);
        todoLists.appendChild(todoDiv);
    }

    //input field 초기화
    inputField.value = '';
}  

//todoLists의 버튼 클릭 함수
todoLists.addEventListener('click', deleteDoneTodo);
function deleteDoneTodo(e){
    const item = e.target;

    //delete 버튼 클릭시 삭제
    if(item.classList[0] === "delete-button"){
        const todoItem = item.parentElement;
        todoItem.remove();
    }

    //done 버튼 클릭시 donelists로 이동
    if(item.classList[0] === "done-button"){
        const doneItem = item.parentElement;
        doneLists.appendChild(doneItem);
        doneItem.classList.add('done-div'); //done lists는 따로 css 부여
    }
}

//doneLists의 삭제 버튼 클릭 함수
doneLists.addEventListener('click', deleteDone);
function deleteDone(e){
    const item = e.target;

    if(item.classList[0] === 'delete-button'){
        const doneItem = item.parentElement;
        doneItem.remove();
    }
}