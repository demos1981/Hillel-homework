//'use strict';


//-----------------------Условие
//Написать класс Accordion
//Начальная структура:

//index.html


//<body>
//<div class="accordion-container">
//<div class="accordion-item">
    //<div class="accordion-title">Title 1</div>
    //<div class="accordion-body">Body 1</div>
//</div>
//<div class="accordion-item">
    //<div class="accordion-title">Title 2</div>
   //<div class="accordion-body">Body 2</div>
//</div>
//<div class="accordion-item">
    //<div class="accordion-title">Title 3</div>
    //<div class="accordion-body">Body 3</div>
//</div>
//<div class="accordion-item">
    //<div class="accordion-title">Title 4</div>
    //<div class="accordion-body">Body 4</div>
//</div>
//</div>
//</body>

//new Accordeon(document.querySelector('container'));
//Решение

const accordion = new Accordion(document.getElementById('container'));