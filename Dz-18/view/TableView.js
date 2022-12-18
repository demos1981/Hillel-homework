
class TableView {
    #config = null;
    $el = null;


static SELECTORS ={
    DRAG: '.drag-note',
    DELETE:'.delete-note',
    NOTE: '.note',
    TEXTAREA: '.edit-control',
};

static CLASSES ={
    DELETE:'.delete-note',
    NOTE:'note',
    TEXTAREA:'edit-control',
};

static template = `<div class="field "></div>`;

static noteTemplate = `
<div class="note" data-note-index="{{id}}" style="background-color: {{color}}; top: {{top}}px; left: {{left}}px" >
<span class="drag-note">o</span>
<span class="delete-note">x</span>
<textarea class="edit-note-control" name="description">{{description}}</textarea>
</div>
`;

static getNoteHtml(note) {
    const r = Math.round(Math.random() * 255).toString(16);
    const g = Math.round(Math.random() * 255).toString(16);
    const b = Math.round(Math.random() * 255).toString(16);
    const color = `#${r}${g}${b}`;
    return interpolate(TableView.noteTemplate, { ...note, color });
}

static getElementId($el) {
    return '' + $el.closest(TableView.SELECTORS.NOTE).data('noteIndex');
}

constructor (config) {
    this.#config = config;
    this.#initView();
}

#initView(){
    this.$el = $(TableView.template);
    console.log(TableView.SELECTORS);
    this.$el.on('click',TableView.SELECTORS.DELETE, (e) =>{
        const id = TableView.getElementId($(e.target));
        this.delete(id);
    });

    this.$el.on('change',TableView.SELECTORS.TEXTAREA,(e) =>{
        const $textarea = $(e.target);
        const id = TableView.getElementId($textarea);

        this.changeDescription(id,$textarea.val());
    });
}

renderList(list){
    const items = list.map(TableView.getNoteHtml).join('');
    this.$el.html(items);
    this.$el.find(TableView.SELECTORS.NOTE).draggable({
        handle:TableView.SELECTORS.DRAG,
        stop: (e,ui) => {
            const id = TableView.getElementId($(e.target));

            this.#config.onUpdate(id,ui.position);
        },
    });
}

delete(id) {
    this.#config.onDelete(id);
}

changeDescription(id,newValue) {
    this.#config.onUpdate(id,{description:newValue});
}


}