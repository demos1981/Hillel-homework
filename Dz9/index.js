'use strict';


//-----------------------Условие
//На странице находится инпут и кнопка.

//Пользователь может ввести что-то в инпут и нажать на кнопку, после этого в списке выше должна отобразится строка с тем что было введено в инпуте.

//После этого инпут очищается.

//Реализовать валидацию и добавлять строку только если инпут заполнен

//При клике на какое-то дело в списке, оно становится зеленым, при повторном клике возвращается в дефолтный цвет.
const newTextList = document.querySelector('#newTextList');
const enterArea = document.querySelector('#enterArea');
const actionBtn = document.querySelector('#actionBtn');

actionBtn.addEventListener('click', onClickAdd);


function onClickAdd(){
    if(!validateTextValue()){
        return;
    }
    const newDivEl = getTextInput();
    addNewList(newDivEl);
    resetTextInput();
}

function getTextInput(){
    return  enterArea.value;       
}

function validateTextValue(){
    if(enterArea.value ===''){
        return false;
    }
    return true;
}

function addNewList(elem){
 const textElem = generateTextElem(elem);
 
 newTextList.append(textElem);
}

function generateTextElem(elem){
    const divEl = document.createElement('div');
  
    divEl.textContent = elem;
    divEl.classList.add('newAddTask');
    divEl.addEventListener('click',()=>{
        divEl.classList.toggle('newColorText');
    });
  
    return divEl; 
}




function resetTextInput(){
    enterArea.value = '';
}