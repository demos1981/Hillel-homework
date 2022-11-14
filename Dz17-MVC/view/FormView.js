class FormView {
    #config = null;
    el = null;
    static template = `
   <div class="row">
    <form id="newTodoForm">
        <div class="columnsInput">
            <input
                type="text"
                class="inputItems"
                name="title"
            />
        </div>
        <div class="columnsButton">
            <button >Save</button>
        </div>
    </form>
  </div>`;
    constructor(config){
        this.#config = config;
        this.#initView();
    }
    #initView(){
       this.el = htmlToElement(FormView.template);
       this.el.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log(e.target);
        const obj = {
            title : e.target.elements.title.value,
        }
        this.config.onSave(obj);
        e.target.reset();
       });
    }
}