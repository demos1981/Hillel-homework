class NoteAllController{
    #collection = null;
    #headerButtonAddView = null;
    #tableView = null;

    constructor($container) {
        this.#headerButtonAddView = new HeaderButtonAddView ({
            onCreate: this.createNote,
        });
        $container.append(this.#headerButtonAddView.el);//$el

        this.#tableView = new TableView ({
            onUpdate: this.updateNote,
            onDelete: this.deleteNote,
           
        });
        $container.append(this.#tableView.$el);

        this.#collection = new NoteAllCollection();
        this.#collection.fetchList().then(()=>{
            this.#tableView.renderList(this.#collection.list);
        });

    }

    
    createNote = () =>{
        this.#collection.createNote().then(()=>{
            this.#tableView.renderList(this.#collection.list);
        })
    }

    updateNote = (id,changes) => {
        this.#collection.updateNote(id,changes).then(()=>{
       
        })
    }

    deleteNote = (id) => {
        this.#collection.deleteNote(id).then(()=>{
            this.#tableView.renderList(this.#collection.list);
        });
    }  
  



   

   
}