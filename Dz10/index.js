//'use strict';


//-----------------------Условие
 //Реализовать таблицу контактов. Таблица состоит из 4-х колонок (Имя, Фамилия, номер, действия).
 //Внизу таблицы находяться инпуты для ввода соответствующих данных и кнопка добавить.
 //Также нужно реализовать валидацию, чтобы нельзя было добавить контакт с каким-то пустым полем.
 //В каждой строке контакта есть кнопка удалить, которая удаляет запись.
 //Реализовать Вывод списка, добавление, удаление.

 //Дополнительное задание:
 //Реализовать редактирование.
 // В каждой строке есть кнопка редактировать. 
 //При клике на нее форма внизу таблицы заполняется данными из строки, которую редактируют. 
 //Пользователь может поменять эти данные в форме и нажимает сохранить. После этого данные в строке, 
 //которую редактируют меняются на новые из формы. форма очищается



    const DELETE_CLASS_BTN = 'deleteBtn';
    const EDIT_CLASS_BTN = 'editBtn';
    const INVALID_CLASS_INPUT = 'invalidInput';
    const CONTACT_ITEM_SELECTOR = '.contactItem';

    const inputContactElement = document.querySelector('#allInputContacts');
    const contactingForm = document.querySelector('#contactingForm');
    const inputId = document.querySelector('#id');
    const inputName = document.querySelector('#name');
    const inputSurname = document.querySelector('#surname');
    const inputPhone = document.querySelector('#phone');
    const inputContactTamplate = document.querySelector('#contactInputTemplate').innerHTML;

    let contactTemplates = [
        { id:1, name:'Ivan', surname:'Ivanov', phone:'+3809558672369'},
        { id:2, name:'Sergey', surname:'Yarov', phone:'+380954238691'},
        { id:3, name:'Anna', surname:'Gnatuk', phone:'+380953724608'}
    ];
    contactingForm.addEventListener('submit',onFormSubmit);
    inputContactElement.addEventListener('click',onContactListElClick);
    inputName.addEventListener('input',onFormElInput);
    inputSurname.addEventListener('input',onFormElInput);
    inputPhone.addEventListener('input',onFormElInput);

    render();

    function render(){
        renderHtml(contactTemplates);
    }


    function renderHtml(elem){
        inputContactElement.innerHTML = elem.map(generateNewHtml).join('');
    }

    function generateNewHtml({id,name,surname,phone}){
        return inputContactTamplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{name}}', name)
        .replaceAll('{{surname}}', surname)
        .replaceAll('{{phone}}', phone);
    }
//---------------------------------------------------------------------
    function onFormSubmit(event) {
        event.preventDefault();
        const contactValues = getFormValues();
        if(!validsInput()){
            return;
        }
        saveContact(contactValues);
        resetFormValues();
    }
     function getFormValues(){
        return{
            id:+inputId.value,
            name:inputName.value,
            surname:inputSurname.value,
            phone:inputPhone.value,
        };
     }
     function validsInput(){
        //resetValidationClass();
        if(inputName.value ===''){
           
            return false;
        }
        if(inputSurname.value ===''){
            return false;
        }
        if(inputPhone.value ===''){
            return false;
        }
        return true;
     }
     function resetValidationClass(){

     }
     function saveContact(contact){
        if (contact.id === 0){
            addContact(contact);
        }else{
            updateContact(contact);
        }
     }
     function addContact(contact){
        contact.id = Date.now();
        contactTemplates.push(contact);
        renderHtml(contactTemplates);

     }
     function updateContact(contact){
        contactTemplates = contactTemplates.map((item)=>
        item.id === contact.id ? contact : item
        );
        renderHtml(contactTemplates);
     }
     function resetFormValues(){
        inputId.value = '';
        inputName.value = '';
        inputSurname.value = '';
        inputPhone.value = '';
    }
     
//---------------------------------------------------------------------------
    function onContactListElClick(event){
        const contactId = getContactId(event.target);
        if(event.target.classList.contains(DELETE_CLASS_BTN)){
            deleteContact(contactId);
        }
        if(event.target.classList.contains(EDIT_CLASS_BTN)){
            editContact(contactId);
        }
    }
    function getContactId(element){
        return +element.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
    }
    function  deleteContact(id){
        contactTemplates = contactTemplates.filter((item) => item.id !==id);
        renderHtml(contactTemplates);
    }
    function  editContact(id){
        const contact = contactTemplates.find((item) => item.id === id);
        currentContactId = id;
        fillFormValues(contact);
    }
    function fillFormValues({id, name, surname, phone}){
        inputId.value = id;
        inputName.value = name;
        inputSurname.value = surname;
        inputPhone.value = phone;
    }
//-------------------------------------------------------------------------------
    function onFormElInput(event){
        validateInput(event.target);
    }
    function validateInput(input){
        resetValidate(input);
        if(input.value === '') {
            input.classList.add(INVALID_CLASS_INPUT);
        }
    }
    function resetValidate(input){
        input.classList.remove(INVALID_CLASS_INPUT);
    }
