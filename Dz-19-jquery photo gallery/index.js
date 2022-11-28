
const URL ='https://jsonplaceholder.typicode.com/photos?_limit=10';
const template = $('#photoItemTemplate').html();
const $photosContainer = $('#photos');

init();

function init(){
    fetchMyPhoto ().then(()=>{
        $photosContainer.find('a').simpleLightbox({
            fileExt:'',//обязательное условие плагтна что бы ссылки имели окончание-png/jpg/jpeg/gif- если гне удовлетворяет условиям то меняем это условие для плагина,устанавливаем пустую строку.
        });
    });
}

function  fetchMyPhoto (){
     return fetch (URL)
    .then((resp)=>resp.json())
    .then(renderPhotos);
}
function renderPhotos(list){
    const html = list.map((item)=>interpolate(template,item)).join('\n');
    $photosContainer.html(html);
}

