class TodoController{
    #todoListView = null;
    #formView = null;
    #todoCollection= null;
    constructor (container){
         this.#todoListView = new TodoListView({
            onToggle: (id) => this.toggle(id),
            onDelete: (id) => this.delete(id),
        });
        container.append(this.#todoListView.el);
        
        this.#formView = new FormView({
            onSave:(data) => this.create(data),
        });

        container.append(this.#formView.el);
      
        this.#todoCollection = new TodosCollection();
        this.#todoCollection
        .fetchList()
        .then(()=> this.#todoListView.renderHtml(this.#todoCollection.list));
}
toggle(id){
    this.#todoCollection
    .toggle(id)
    .then(()=>
        this.#todoListView.renderHtml(this.#todoCollection.list));
    
}
delete(id){
    this.#todoCollection
    .delete(id)
    .then(()=> 
     this.#todoListView.renderHtml(this.#todoCollection.list));
}
create(data){
    this.#todoCollection
    .create(data)
    .then(()=> 
     this.#todoListView.renderHtml(this.#todoCollection.list));
}

}