'use strict';


//-----------------------Условие
//Написать функцию createCalculator, чтобы ее можно было использовать таким образом. Более подробно задание в конце видео с лекции.

const calc = createCalculator(10);


function createCalculator(param){
     let count;
     count=param;
    
    return  {
         sum:(arg)=>{
            return count= count + arg;
            },
         mult:(factor)=>{
            return count=count*factor;
         },
         sub:(diff)=>{
            return count= count - diff;
         },
         div:(divider)=>{
            return count=count / divider;
         },
         set:(approp)=>{
             return count = approp;
            },

}
}


alert(`If count + 5 = ${calc.sum(5)}`); /// 15
alert(`If count * 10 = ${calc.mult(10)}`); // 150
alert(`If count - 40 = ${calc.sub(40)}`); // 110
alert(`If count / 10 = ${calc.div(10)}`); // 11/
alert(`If count assign 100 = new count is ${calc.set(100)}`);//100
