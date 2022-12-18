class HeaderButtonAddView {
    #config = null;
    el = null;

    static template = `
        <div class="heading">
            <button class="button-add-note">Add Note</button>
        </div>
    `;

    constructor(config) {
        this.#config = config;

        this.#initView();
    }

    #initView() {
        this.el = htmlToElement(HeaderButtonAddView.template);
        this.el.querySelector('button').addEventListener('click', () => {
            this.#config.onCreate();
        });
    }
}