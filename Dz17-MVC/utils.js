function interpolate(template, obj) {//-заполнение шаблона при помощи функции
    for (key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }

    return template;
}
function htmlToElement(html){//создание DOM-элемента
   const container = document.createElement('div');
   container.innerHTML = html;
   return container.children[0];
}
    