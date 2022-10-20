'use strict';

class Accordion{
    static CLASSES={
        ITEM:'accordion-item',
        TITLE:'accordion-title',
        ACTIVE:'accordion-active',  
    }
    #element = null;
    constructor (elem){
        this.#element = elem;
        this.#contextEvent();
    }
    #contextEvent(){
        this.#element.addEventListener('click', (event)=>{
            if(event.target.classList.contains(Accordion.CLASSES.TITLE)){
                const item = event.target.closest('.'+Accordion.CLASSES.ITEM);
                this.toggle(item);
            }
        });
    }
    toggle(elem){
        elem.classList.toggle(Accordion.CLASSES.ACTIVE);
       
    }
   

}

 