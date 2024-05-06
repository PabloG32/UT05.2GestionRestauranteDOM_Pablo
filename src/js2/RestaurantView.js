class RestauranteView {
    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.categories = document.getElementById('categories');
        this.categoriesMenu = document.getElementById('categories-menu');
    }

    init() {
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('afterbegin', `
        <section class="elemento-individual">
        <h2>Categorias</h2>
        <p>Descripción del elemento...</p>
        </section>`);
    }

    bindInit(handler) {
        document.getElementById('init').addEventListener('click', (event) => {
            handler();
        });
        // document.getElementById('logo').addEventListener('click', (event) => {
        //     handler();
        // });

    }

    showCategoriesMenu(categories) {
        this.categoriesMenu.replaceChildren();
        for (const category of categories) {
            this.categoriesMenu.insertAdjacentHTML('beforeend', `<li><a data-category="${category.name}" class="dropdown-item" href="#">${category.name}</a></li>`)
            console.log(category);
        }
    }

    bindCategoriesMenu(handler) {
        for (const li of this.categoriesMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.category);
            });
        }
    }



}
export default RestauranteView;