//'use strict';


//-----------------------Условие
//Сеть фастфудов предлагает несколько видов гамбургеров:

//маленький (50 тугриков, 20 калорий)
//средний (75 тугриковб 30 каллорий)
//большой (100 тугриков, 40 калорий)

//Гамбургер может быть с одним из нескольких видов начинок:

//сыром (+ 10 тугриков, + 20 калорий)
//салатом (+ 20 тугриков, + 5 калорий)
//картофелем (+ 15 тугриков, + 10 калорий)
//посыпать приправой (+ 15 тугриков, 0 калорий)
//полить майонезом (+ 20 тугриков, + 5 калорий).
//При этом начинок можно добавить несколько или не быть совсем
//Напишите программу, расчитывающую стоимость и калорийность гамбургера.

//Пример работы кода:
//const hamburger = new Hamburger(SIZE_SMALL);
// добавка из майонеза
//hamburger.addTopping(TOPPING_MAYO);
//hamburger.addTopping(TOPPING_POTATO);

//console.log("Price with sauce: “ + hamburger.getPrice());
//console.log("Callories with sauce: “ + hamburger.getCallories());



//Решение
function Hamburger(size) {
    this._size = size;
    this._topping = [];
}
Hamburger.TOPPING_MAYO = {price:20,callories:5};
Hamburger.TOPPING_SALAD = {price:20,callories:5};
Hamburger.TOPPING_CHEESE = {price:10,callories:20};
Hamburger.TOPPING_SPICES = {price:15,callories:0};
Hamburger.SMALL_SIZE = {price:50,callories:200};
Hamburger.MEDIUM_SIZE = {price:75,callories:300};
Hamburger.BIG_SIZE = {price:100,callories:400};

Hamburger.prototype.addTopping = function(topping) {
    this._topping.push(topping);
    return this;
};

Hamburger.prototype.getPrice = function(){
    return this._topping.reduce((acc, {price})=>acc + price, this._size.price);
   
};

Hamburger.prototype.getCallories = function(){
    return this._topping.reduce((acc, {callories})=>acc + callories,this._size.callories);
};


 const burg = new Hamburger(Hamburger.SMALL_SIZE);
 burg.addTopping(Hamburger.TOPPING_MAYO)
     .addTopping(Hamburger.TOPPING_CHEESE)
     .addTopping(Hamburger.TOPPING_SALAD);
 
     console.log(`Your Hamburger pay is - ${burg.getPrice()} uah`);
     console.log(`Your Hamburger callories - ${burg.getCallories()} kkal`);

 

