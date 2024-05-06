const MODEL = Symbol('RestaurantModel');
const VIEW = Symbol('RestaurantView');

class RestaurantController {
    constructor(RestaurantModel, viewRestaurant) {
        this[MODEL] = RestaurantModel;
        this[VIEW] = viewRestaurant;

        this.onLoad();
        // Eventos iniciales del Controlador
        this.onInit();

        // Enlazamos handlers con la vista
        //this[VIEW].bindInit(this.handleInit);

    }
    onInit = () => {
        this[VIEW].init();
        //this[VIEW].showCategories(this[MODEL].categories);
    };

    handleInit = () => {
        this.onInit();
    }

    onLoad = () => {
        this.createData();
        this.onCategories();
        this.onAllergenes();
        this.onMenus();
        this.onRestaurants();
        this.onDishes();
    };

    onCategories() {
        const categories = this[MODEL].categories;
        this[VIEW].showCategoriesMenu(categories);
        this[VIEW].bindCategoriesMenu(this.handlerShowCategory);
        this[VIEW].showCategories(categories);
        this[VIEW].bindCategories(this.handlerShowCategory);
    }

    onAllergenes() {
        const allergenes = this[MODEL].allergenes;
        this[VIEW].showAllergenesMenu(allergenes);
        this[VIEW].bindAllergenesMenu(this.handlerShowAllergen);
    }

    onMenus() {
        const menus = this[MODEL].menus;
        this[VIEW].showMenusMenu(menus);
        this[VIEW].bindMenusMenu(this.handlerShowMenu);
    }

    onRestaurants() {
        const restaurants = this[MODEL].restaurants;
        this[VIEW].showRestaurantsMenu(restaurants);
        this[VIEW].bindRestaurantsMenu(this.handlerShowRestaurant);
    }

    onDishes() {
        const dishes = this[MODEL].dishes;
        this[VIEW].showDishesMenu(dishes);
        this[VIEW].bindDishesMenu(this.handlerShowDish);
    }

    createData() {
        const data = {
            categories: [
                { name: 'Entrantes', description: '' },
                { name: 'Platos principales', description: '' },
                { name: 'Platos segundos', description: '' }
            ],

            allergenes: [
                { name: 'Gluten', description: '' },
                { name: 'Lácteos', description: '' },
                { name: 'Crustáceos', description: '' },
                { name: 'Huevos', description: '' }

            ],

            menus: [
                { name: 'Menú del día 1', description: '' },
                { name: 'Menú del día 2', description: '' },
                { name: 'Menú del día 3', description: '' }
            ],

            restaurants: [
                { name: 'Restaurante 1', description: '' },
                { name: 'Restaurante 2', description: '' },
                { name: 'Restaurante 3', description: '' }
            ],

            dishes: [
                { name: 'Ensalada César', description: 'Mezcla de lechugas, pollo, crutones y aderezo César', ingredients: [], image: '' },
                { name: 'Croquetas de jamón', description: '', ingredients: [], image: '' },
                { name: 'Nachos', description: '', ingredients: [], image: '' },
                { name: 'Patatas', description: '', ingredients: [], image: '' },
                { name: 'Paella de marisco', description: '', ingredients: [], image: '' },
                { name: 'Pasta', description: '', ingredients: [], image: '' },
                { name: 'Sopa', description: '', ingredients: [], image: '' },
                { name: 'Gazpacho', description: '', ingredients: [], image: '' },
                { name: 'Solomillo', description: '', ingredients: [], image: '' },
                { name: 'Dorada', description: '', ingredients: [], image: '' },
                { name: 'Lagarto', description: '', ingredients: [], image: '' },
                { name: 'Entrecot', description: '', ingredients: [], image: '' }
            ]
        }

        for (const category of data.categories) {
            this[MODEL].addCategory(this[MODEL].createCategory(category.name, category.description));

        }

        for (const allergen of data.allergenes) {
            this[MODEL].addAllergen(this[MODEL].createAllergen(allergen.name, allergen.description));

        }

        for (const menu of data.menus) {
            this[MODEL].addMenu(this[MODEL].createMenu(menu.name, menu.description));

        }

        for (const restaurant of data.restaurants) {
            this[MODEL].addRestaurant(this[MODEL].createRestaurant(restaurant.name, restaurant.description));

        }

        for (const dish of data.dishes) {
            this[MODEL].addDish(this[MODEL].createDish(dish.name, dish.description, dish.ingredients, dish.image));

        }

    }

    handlerShowCategory = (name) => {
        const category = this[MODEL].createCategory(name);
        //const dishes = this[MODEL].getDishesInCategory(category);

        //this[VIEW].showDishes(dishes);
    }

    handlerShowAllergen = (name) => {
        const allergen = this[MODEL].createAllergen(name);
    }

    handlerShowMenu = (name) => {
        const menu = this[MODEL].createMenu(name);
    }

    handlerShowRestaurant = (name) => {
        const restaurant = this[MODEL].createRestaurant(name);
    }

    handlerShowDish = (name) => {
        const dish = this[MODEL].createDish(name);
    }
}
export default RestaurantController;
