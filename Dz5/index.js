'use strict';


//-----------------------Условие
//1) с помощью промта спрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор пока он введет допустимое значение

//2) спрашиваем у пользователя операнды, он их вводит в одном промте через запятую. То что введет пользователь не должно быть пустой строкой
// или null.

//3) С помощью alert или console.log выводим результат действия (+ - / *) с операндами.

//----------------------Решение


const valueAction = chooseYourAction();
let operandArray=[];
let arrOperand=getAndCheckNumber();
const resultOperators = operandActions(valueAction);

function chooseYourAction(){
    let action;
do{
    action = prompt('Choose your action:-;+;*;/.');
    alert ('You choose:'+ action);
}while(isCheckingValidityAction(action));
return action;
}


function isCheckingValidityAction(val) {
    return val !== '+'&& val !== '-' && val !== '*' && val !== '/';
}
 


function getAndCheckNumber(){
    let arg;
    do{
     arg= prompt('Enter operands separated by commas-1,2,...n?');
    }while(invalidChekValue(arg));
    alert('your number-'+  arg);
   operandArray.push.apply(operandArray, arg.split(",").map(Number));
  
}


function invalidChekValue(param) {
   
    return param === null|| param === '';
}


function operandActions(param){
   let valueProcessing;
    switch (param){
      
        case '+': valueProcessing = operandArray.reduce(function( sum) {
                    return sum+=sum;
                   
                });
                console.log(valueProcessing);
                
        break;
        case '-':valueProcessing = operandArray.reduce(function(sum,elem) {
                  
                  return sum = sum - elem;
                });
                console.log(valueProcessing);
           
                
        break;
        case '*':valueProcessing = operandArray.reduce(function(sum,elem) {
                    
                  return sum * elem;
                });
  
               console.log(valueProcessing);
              
        break;
        case '/':valueProcessing = operandArray.reduce(function(sum,elem) {
                    
                 return sum / elem;
                });

                console.log(valueProcessing);
               
        break;
    
       }
     return valueProcessing;

}
alert('Your result:' + resultOperators);




