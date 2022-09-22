'use strict';


//-----------------------Условие
//Пользователь должен видеть два инпута и между ними знак плюс.

//Под инпутами есть кнопка Calculate, по клику на которую происходит суммирование чисел которые пользователь ввел в инпуты.
// Результат нужно показать после инпутов

//Задание со звездочкой:
//1) Сделать так, чтобы пользователь мог сам выбирать какую операцию он хочет 
//выполнить (селект с опциями +-/*)

const firstValue = document.querySelector('.valueOne');
const secondValue = document.querySelector('.valueTwo');
const resultAll = document.querySelector('.result');
const btn = document.querySelector('.pushButton');
const select = document.querySelector('.selectAction');
const divResult = document.querySelector('.watchResult');
btn.addEventListener('click',resultInAction);


function resultInAction(){
   switch(select.value){
      case '+':resultAll.value = Number(firstValue.value) + Number(secondValue.value);
      break;
      case '-':resultAll.value = Number(firstValue.value) - Number(secondValue.value);
      break;
      case '*':resultAll.value = Number(firstValue.value) * Number(secondValue.value);
      break;
      case '/':resultAll.value = Number(firstValue.value) / Number(secondValue.value);
      break;


   }
 return divResult.textContent = `${firstValue.value} ${select.value} ${secondValue.value} = ${resultAll.value}`;
}