//'use strict';

const TODO_ITEM_CLASS = 'todo-item';
const TODO_ITEM_SELECTOR = '.' + TODO_ITEM_CLASS;
const DONE_ITEM_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const INVALID_CLASS = 'invalid-input';
const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const listEl = document.querySelector('#listItems');
const newTodoTitleInput = document.querySelector('#newTodoTitle');
const saveTodoBtn = document.querySelector('#saveTodoBtn');
const newTodoForm = document.querySelector('#newTodoForm');
//--------------------------------------------------------------------
let todoList = [
    { id: 1, title: 'Do it', isDone: false },
    { id: 2, title: 'Must have', isDone: false },
    { id: 3, title: 'Well done', isDone: false },
];
//--------------------------------------------------------------------
const validation = {
    isValid: false,
    errors: {
        title: 'Field is Required',
    },
    touched: {
        title: false,
    },
};
//--------------------------------------------------------------------
newTodoForm.addEventListener('submit', onNewTodoFormSubmit);
newTodoForm.addEventListener('input', onFormInput);
newTodoForm.addEventListener('focusin', onFormFocus);
listEl.addEventListener('click', onListElClick);
//--------------------------------------------------------------------
init();

function init() {//инициализируем рендеринг
    renderList(todoList);
}

function renderList(list) {//запускаем функцию рендеринга
  listEl.innerHTML = list.map(generateTodoItemHtml).join('');//рендерим новый массив
}

function generateTodoItemHtml({ id, title, isDone }) {//перезаписываем данные в template
  return todoTemplate
      .replaceAll('{{id}}', id)//записываем id в id
      .replaceAll('{{title}}', title)//записываем title в title
      .replaceAll('{{doneClass}}', isDone ? DONE_ITEM_CLASS : '');//через тернарный оператор проверяем состояние
}
//-------------------------------------------------------------------------
function onNewTodoFormSubmit(e) {//событие формы
    e.preventDefault();//отменяем стандартнуе действие формы

    if (!validation.isValid) {//проверка на валидность
        return;
    }

    const newTodo = getFormValues();//записываем полученные значения в переменную
    addTodo(newTodo);//
    resetFormValues(); 
}

function getFormValues() {//получаем значение title
  return {
      title: newTodoTitleInput.value,//возвращаем новое значение title
  };
}
function addTodo(todo) {//добавляем новый id и новое состояние
  todo.id = Date.now();
  todo.isDone = false;

  
  todoList = [...todoList, todo];

  renderList(todoList);
}
function resetFormValues(){// очистка формы
  newTodoTitleInput.value = '';
 }




//------------------------------------------------------------------------------
function onListElClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const todoId = getTodoId(e.target);
        deleteTodo(todoId);
    }
    if (e.target.classList.contains(TODO_ITEM_CLASS)) {
        const todoId = getTodoId(e.target);
        toggleTodo(todoId);
    }
}

function getTodoId(el) {
  return +el.closest(TODO_ITEM_SELECTOR).dataset.todoId;
}
function deleteTodo(id) {
  todoList = todoList.filter((item) => item.id !== id);

  renderList(todoList);
}
//----------------------------------------------------------------------------
function onFormInput(e) {
    validateInput(e.target);
   
}

function onFormFocus(e) {
    touchInput(e.target);
}

function toggleTodo(id) {
    todoList = todoList.map((item) =>
        item.id !== id ? item : { ...item, isDone: !item.isDone }
    );

    renderList(todoList);
}

function validateInput(el) {
    let error=null;
    const { name, value } = el;

    resetValidation(el);

    if (value === '') {
       error = 'Field is Required';
       
    }
    if (value.length <3) {
        error = 'Field is too short';
    }
    validation.errors[name] = error;
    validation.isValid = !validation.errors.title;

    if (error !== null) {
        el.classList.add(INVALID_CLASS);
    }
    
}

function resetValidation(el) {
    el.classList.remove(INVALID_CLASS);
}

function touchInput(el) {
    validation.touched[el.name] = true;
}


 


 
 
