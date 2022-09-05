'use strict';


//-----------------------Условие
// Спрашиваем мат. операцию + - * / // -
// Валидируем
// Спрашиваем сколько чисел нужно считать // 3 >=2
// Валидируем
// Спрашиваем число 1 // 2
// Валидируем
// Спрашиваем число 2 // 3
// Валидируем
// ....
// Спрашиваем число N // 5
// Валидируем


//Выводим результат
// 2 - 3 -5 = -6

//----------------------Решение

//Спрашиваем мат.операцию------------------------------------------
let action;

do{
 action = prompt('Какое действие с числами вы хотите сделать?');
}while(isCheckingValidityAction(action));

function isCheckingValidityAction(val) {
    return val !== '+'&& val !== '-' && val !== '*' && val !== '/';
}
   console.log(action);


//Спрашиваем сколько чисел нужно считать---------------------------
let howManyTimes;

function getAndCheckNumber(){
do{
    howManyTimes = prompt('Сколько чисел нужно для действий?');
}while(invalidChekValue(howManyTimes));
return Number(howManyTimes);
}
getAndCheckNumber();


function invalidChekValue(param) {
    return param === null||param.trim() === ''|| isNaN(param);
}

console.log(howManyTimes);

//Спрашиваем числа исходя из количества и записываем их в массив

let iterationCount=1;
let valueOutput;
let arr = [];
function actionsOnIntroductory() {
 do{
    do{
        valueOutput = prompt ('Введите число');
        
    }while(invalidChekValue(valueOutput));
    alert('Вы ввели число-'+  valueOutput);

    arr.push(Number(valueOutput));
    iterationCount++;
    
 }while(iterationCount <= howManyTimes);
}
actionsOnIntroductory();
console.log(arr);

//Выводим числа и применяем соответствующее действие
let sumValue;
let valueProcessing;

function outputApplyAction(param){
    switch (param){
        case '+': valueProcessing = arr.reduce(function(sum, elem) {
                    return sum + elem;
                   
                }, 0);
                console.log(valueProcessing);
                alert('Вы ввели числа-:'+arr.join('+')+'='+ valueProcessing);    
        break;
        case '-':valueProcessing = arr.reduce(function(sum, elem) {
                    
                  return sum - elem;
                }, (arr[0]*2));
                console.log(valueProcessing);
                alert('Вы ввели числа-:'+arr.join('-')+'='+ valueProcessing); 
                
        break;
        case '*':valueProcessing = arr.reduce(function(sum, elem) {
                    
                  return sum * elem;
                }, 1);
  
               console.log(valueProcessing);
               alert('Вы ввели числа-:'+arr.join('*')+'='+ valueProcessing); 
        break;
        case '/':valueProcessing = arr.reduce(function(sum, elem) {
                    
                 return sum / elem;
                }, (arr[0]*arr[0]));

                console.log(valueProcessing);
                alert('Вы ввели числа-:'+arr.join('/')+'='+ valueProcessing); 
        break;
    
       }
     
}
outputApplyAction(action);



