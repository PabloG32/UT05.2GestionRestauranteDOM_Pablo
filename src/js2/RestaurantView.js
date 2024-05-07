class RestauranteView {
    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.categoriesMenu = document.getElementById('categories-menu');
        this.allergenesMenu = document.getElementById('allergenes-menu');
        this.menusMenu = document.getElementById('menus-menu');
        this.restaurantsMenu = document.getElementById('restaurants-menu');
        this.dishesMenu = document.getElementById('dishes-menu');
        this.categories = document.getElementById('cat-centro');
        this.dishes = document.getElementById('platos-centro');
        this.restaurantsCentral = document.getElementById('restaurantsCentral');

    }

    // init() {
    //     this.main.replaceChildren();
    //     this.main.insertAdjacentHTML('afterbegin', `
    //     <section class="elemento-individual">
    //     <h2>Categorias</h2>
    //     <p>Descripción del elemento...</p>
    //     </section>`);
    // }

    bindInit(handler) {
        document.getElementById('init').addEventListener('click', (event) => {
            handler();
        });
        // document.getElementById('logo').addEventListener('click', (event) => {
        //     handler();
        // });

    }

    //Categories
    showCategoriesMenu(categories) {
        this.categoriesMenu.replaceChildren();
        for (const category of categories) {
            this.categoriesMenu.insertAdjacentHTML('beforeend', `<li><a data-category="${category.name}" class="dropdown-item" href="#">${category.name}</a></li>`)
        }
    }

    bindCategoriesMenu(handler) {
        for (const li of this.categoriesMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.category);
            });
        }
    }

    showCategories(categories) {
        this.categories.replaceChildren();
        for (const category of categories) {
            this.categories.insertAdjacentHTML('beforeend', `
            <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>${category.name}</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                    dy=".3em">${category.name}</text>
            </svg>
            <div class="card-body">
                <p class="card-text">${category.name}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" data-cat="${category.name}" class="btn btn-sm btn-outline-secondary">Ver</button>
                    </div>
                </div>
            </div>
            </div>
        </div>`)
        }
    }

    bindCategories(handler) {
        for (const div of this.categories.children) {
            div.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.category);
            });
        }
    }

    //Allergenes
    showAllergenesMenu(allergenes) {
        this.allergenesMenu.replaceChildren();
        for (const allergen of allergenes) {
            this.allergenesMenu.insertAdjacentHTML('beforeend', `<li><a data-allergen="${allergen.name}" class="dropdown-item" href="#">${allergen.name}</a></li>`)
        }
    }

    bindAllergenesMenu(handler) {
        for (const li of this.allergenesMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.allergen);
            });
        }
    }

    //Menus
    showMenusMenu(menus) {
        this.menusMenu.replaceChildren();
        for (const menu of menus) {
            this.menusMenu.insertAdjacentHTML('beforeend', `<li><a data-menu="${menu.name}" class="dropdown-item" href="#">${menu.name}</a></li>`)
        }
    }

    bindMenusMenu(handler) {
        for (const li of this.menusMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.menu);
            });
        }
    }

    //Restaurant
    showRestaurantsMenu(restaurants) {
        this.restaurantsMenu.replaceChildren();
        for (const restaurant of restaurants) {
            this.restaurantsMenu.insertAdjacentHTML('beforeend', `<li><a data-restaurants="${restaurant.name}" class="dropdown-item" href="#">${restaurant.name}</a></li>`)
        }
    }

    bindRestaurantsMenu(handler) {
        for (const li of this.restaurantsMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.restaurant);
            });
        }
    }

    // showRestaurantsCentral(restaurants) {
    //     this.main.replaceChildren();
    //     for (const restaurant of restaurants) {
    //         this.restaurantsMenu.insertAdjacentHTML('beforeend', `<li><a data-restaurants="${restaurant.name}" class="dropdown-item" href="#">${restaurant.name}</a></li>`)
    //     }
    // }

    // bindRestaurantsCentral(handler) {
    //     for (const div of this.restaurantsCentral.children) {
    //         div.firstElementChild.addEventListener('click', (event) => {
    //             handler(event.currentTarget.dataset.restaurant);
    //         });
    //     }
    // }

    //Platos
    showDishesMenu(dishes) {
        this.dishesMenu.replaceChildren();
        for (const dish of dishes) {
            this.dishesMenu.insertAdjacentHTML('beforeend', `<li><a data-dishes="${dish.name}" class="dropdown-item" href="#">${dish.name}</a></li>`)
        }
    }

    bindDishesMenu(handler) {
        for (const li of this.dishesMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.dish);
            });
        }
    }

    showDishes(dishes) {
        this.dishes.replaceChildren();
        for (const dish of dishes) {
            this.dishes.insertAdjacentHTML('beforeend', `
            <div class="col">
            <div class="card shadow-sm">
            <img src="${dish.image}" alt="${dish.name}">
                <div class="card-body">
                <p class="card-text">${dish.name}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#info${dish.name}">Ver</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <!-- Modal info -->
        <div class="modal fade" id="info${dish.name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" id="modalHeader">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${dish.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <p>
                            Nombre: ${dish.name}
                            <br><br>
                            Descripción: ${dish.description}
                            <br><br>
                            Ingredientes: ${dish.ingredients}
                            <br><br>
                            Imagen: <img src="${dish.image}" alt="${dish.name}" width="200px" height="140px">
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div> <!--Fin modal-->
        `)
        }
    }

    bindDishes(handler) {
        for (const div of this.dishes.children) {
            div.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.dish);
            });
        }
    }


}
export default RestauranteView;