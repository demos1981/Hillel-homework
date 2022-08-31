"use strict"
//---Условие
// Спрашиваем число.
// Проверяем что введено число и оно больше 0;
// Если нажата отмена или пустая строка или значение невалидно, переспрашиваем
// Посчитать сумму все четных чисел до этого числа включительно // 2+4+6+8+10
// Посчитать сумму все не...

//--------Решение

//проверка введенного числа на валидность

let firstNum;
function numberChek(){
do{
    firstNum = prompt('Введите целое число больше 0');
  
}while(firstNum===null||firstNum==0||firstNum<=0||firstNum.trim===''||isNaN(firstNum));
    alert('вы ввели число-'+ firstNum);
    return (Number(firstNum));
}
numberChek()

//Проверяем чет или нечет и записываем сумму соответствующих чисел

let sumEvenNumbers=0;//сумма четных чисел
let sumOddNumbers=0;//сумма нечетных чисел

function allNumbersSumm (num){
    let i=0;
    let s=1;
    let n=num;
    
  do{
    if(num %2==0){
       {
        i += 2;
        sumEvenNumbers+=i;
       }
        
     }else if(num %2==1){
       s += 2;
       sumOddNumbers+=s;
        
       }
       else{
          alert('not now');
       }
      
     }while(i<n&&s<n);

}
allNumbersSumm (firstNum);


//Выводим получившиеся значения чет или нечет.
if (sumEvenNumbers!==0){
alert('Сумма четных чисел равна-'+ sumEvenNumbers);
}
else if(sumOddNumbers!==0){
    alert('Сумма нечетных чисел равна-'+(sumOddNumbers+1));
}
else{
    alert('ups,what wrong');
}

