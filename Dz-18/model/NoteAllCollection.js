const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';

class NoteAllCollection {
    list=[];
    #api = new RestApi(API_URL);

    fetchList(){
        return this.#api.getList().then((data)=>(this.list = data));
    }

    createNote() {
        const data = {
            description:'',
            top:50,
            left:50,
        };
        return this.#api
        .create(data)
        .then((newTodo)=>(this.list = [...this.list, newTodo]));

    }

    updateNote(id,changes) {
        const item = this.list.find((item) =>item.id === id);
        const updatedItem = {
            ...item,
            ...changes,
        };

        return this.#api.update(updatedItem).then(()=>{
            this.list = this.list.map((item)=>item.id === updatedItem.id ? updatedItem : item
            );
        });
    }


    deleteNote(id) {
        return this.#api.delete(id).then(()=>{
            this.list = this.list.filter((item) => item.id !== id);
        });

    }

   

   
  
}
