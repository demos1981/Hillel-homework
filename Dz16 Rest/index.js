
//'use strict';


//-----------------------Условие
//Реализовать таблицу контактов. Таблица состоит из 4-х колонок (Имя, Фамилия, email, действия).



//Внизу таблицы находяться инпуты для ввода соответствующих данных и кнопка добавить.

//Также нужно реализовать валидацию, чтобы нельзя было добавить контакт с каким-то пустым полем

//В каждой строке контакта есть кнопка удалить, которая удаляет запись.

//Список нужно сохранять в localstorage и восстанавливать когда пользователь вернеться на страницу

//Реализовать редактирование. 
//Рядом с кнопкой удалить в каждой строке есть кнопка редактировать. 
//При нажатии на нее, форма внизу страницы, заполняется данными того контакта на который нажали. 
//После внесения изменений и сохранения, данные того контакта должны обновиться


    const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
    const DELETE_CLASS_BTN = 'deleteBtn';
    const EDIT_CLASS_BTN = 'editBtn';
    const INVALID_CLASS_INPUT = 'invalidInput';
    const CONTACT_ITEM_SELECTOR = '.contactItem';

    const inputContactElement = document.querySelector('#allInputContacts');
    const contactingForm = document.querySelector('#contactingForm');
    const inputId = document.querySelector('#id');
    const inputName = document.querySelector('#name');
    const inputSurname = document.querySelector('#surname');
    const inputEmail = document.querySelector('#email');
    const inputContactTamplate = document.querySelector('#contactInputTemplate').innerHTML;

 
    contactingForm.addEventListener('submit',onFormSubmit);
    inputContactElement.addEventListener('click',onContactListElClick);
    inputName.addEventListener('input',onFormElInput);
    inputSurname.addEventListener('input',onFormElInput);
    inputEmail.addEventListener('input',onFormElInput);
    let contactTemplates = [];
    render();

    function render(){
        fetchUsers();
        renderHtml(contactTemplates);
    }
    function fetchUsers(){
        fetch(API_URL)
        .then((resp)=>resp.json())
        .then((data)=>{
            contactTemplates = data;
                renderHtml(contactTemplates);
            });
       
    }
 
    function renderHtml(elem){
        inputContactElement.innerHTML = elem.map(generateNewHtml).join('');
    }

    function generateNewHtml({id,name,surname,email}){
        return inputContactTamplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{name}}', name)
        .replaceAll('{{surname}}', surname)
        .replaceAll('{{email}}', email);
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
            id:inputId.value,
            name:inputName.value,
            surname:inputSurname.value,
            email:inputEmail.value,
        };
     }
     function validsInput(){
       
        if(inputName.value ===''){
           
            return false;
        }
        if(inputSurname.value ===''){
            return false;
        }
        if(inputEmail.value ===''){
            return false;
        }
        return true;
     }
  
     function saveContact(contact){
     
        if (contact.id === ''){
            addContact(contact);
        }else{
            updateContact(contact);
        }
     }
     function addContact(contact){
       fetch(API_URL,{
        method:'POST',
        body:JSON.stringify(contact),
        headers:{
            'Content-Type':'application/json'
        },
      } ).then((resp)=>resp.json())
      .then((data)=>{
         contactTemplates =[...contactTemplates,data] ;
        renderHtml(contactTemplates);
      })
       

     }
     function updateContact(contact){
      
        fetch(API_URL + contact.id,{
            method:'PUT',
            body:JSON.stringify(contact),
            headers:{
                'Content-Type':'application/json',
            }
        }).then(() => {
        contactTemplates = contactTemplates.map((item)=>
        item.id === contact.id ? contact: item);   
         renderHtml(contactTemplates);
     });
    
    }
     function resetFormValues(){
        inputId.value = '';
        inputName.value = '';
        inputSurname.value = '';
        inputEmail.value = '';
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
        return element.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
    }
    function  deleteContact(id){
        fetch(API_URL + id,{
            method:'DELETE',
        }).then(()=>{
             contactTemplates = contactTemplates.filter((item) => item.id !==id);
        renderHtml(contactTemplates);
    
        });
    }
       
    function  editContact(id){
        const contact = contactTemplates.find((item) => item.id === id);
        currentContactId = id;
        fillFormValues(contact);
    }
    function fillFormValues({id, name, surname, email}){
        inputId.value = id;
        inputName.value = name;
        inputSurname.value = surname;
        inputEmail.value = email;
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
