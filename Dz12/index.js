'use strict';


//-----------------------Условие
//const calc = new Calculator(10);

//calc.sum(5); /// 15
//calc.mult(10); // 150
//calc.sub(40); // 110
//calc.div(10); // 11
//calc.set(100); //
//Решение
function Calculator(num){

   this.number = num;
   this.base = this.number;
   
   this.sum=function(num){
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
   this.set= function(num){
       return this.number = num;
   }
}

const calc = new Calculator(10);
const calc2 =new Calculator(20);


