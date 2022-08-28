// Модальные окна и их проверка
"use strict"


let  numberFirst;
function chekNumberFirst(){//Ввод и проверка первого числа на валидность
   
    do  {
        numberFirst =  prompt('Введите первое число','От 1 до ~')
        if (numberFirst ===null || numberFirst.trim()===''|| isNaN(numberFirst)) {
            alert('Было введено не число, попробуйте еще раз');
            continue;
          }
            
        
    
    } while(numberFirst === null || numberFirst.trim()==''|| isNaN(numberFirst));
    alert('Вы ввели число-' + numberFirst);
    return numberFirst;
}
chekNumberFirst();



let  numberSecond;
function chekNumberSecond(){//Ввод и проверка второго числа на валидность
   
    do  {
        numberSecond =  prompt('Введите второе число','От 1 до ~')
        if (numberSecond === null || numberSecond.trim()===''|| isNaN(numberSecond)) {
            alert('Было введено не число, попробуйте еще раз');
            continue;
          }
            
        
    
    } while(numberSecond === null || numberSecond.trim()==''|| isNaN(numberSecond));
    alert('Вы ввели число-' + numberSecond);
    return numberSecond;
}
chekNumberSecond();


    let myAction;
    function chekAction(){ //Проверка выбранного действия
     
   
        do  {
            myAction =  prompt('Введите действие для чисел; может +, или -,  но если хотите *,или же  /')
            if( myAction!=='+'&&  myAction!=='-'&&  myAction!=='/'&&  myAction!=='*'){
                alert('Введите действие');
               continue;
             }
           
             }while( myAction!=='+'&&  myAction!=='-'&&  myAction!=='/'&&  myAction!=='*')

       
        return myAction;
    }
    chekAction();
   



    function chooseAction(action,num1,num2){// Действия с операндами исходя из выбранного пользователем
      

        switch(action){

             case '+': alert('вы выбрали сложение');
             let resultPlus =num1 + num2;
             alert ('Ваш результат'+'-'+ num1+ '+' + num2 + '=' + resultPlus );
             break;
             case '-': alert('вы выбрали вычитание');
             let resultMinus = num1 - num2;
             alert ('Ваш результат'+'-'+ num1 + '-' + num2 + '=' + resultMinus );
             break;
             case '/': alert('вы выбрали деление');
             let resultDivision = num1 / num2;
             alert ('Ваш результат'+'-'+ num1 + '/' + num2 + '=' + resultDivision );
             break;
             case '*': alert ('вы выбрали умножение');
             let resultMultiplication = num1 * num2;
             alert ('Ваш результат'+'-'+ num1 + '*' + num2 + '=' + resultMultiplication );
             break;
             default:alert('выберите действие');
             

        }
        
    }
    chooseAction(myAction,+numberFirst,+numberSecond);

   
    







