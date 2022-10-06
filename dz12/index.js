'use strict';


//-----------------------Условие
//Написать функцию createCalculator, используя функцию конструктор.
function Calculator(num){

   this.number = num;//есть значение
   this.base = this.number;
   
   this.add=function(num){
       return this.base += num;
   };
   this.div=function(num){
       return this.base /= num;
   }
   this.sub=function(num){
       return this.base -= num;
   }
   this.mult=function(num){
       return this.base *= num;
   }
   this.set= function(){
       return this.base = this.number;
   }
}

const calc = new Calculator(10);
const calc2 =new Calculator(20);


