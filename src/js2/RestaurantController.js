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
    };

    onCategories() {
        const categories = this[MODEL].categories;
        this[VIEW].showCategoriesMenu(categories);
        this[VIEW].bindCategoriesMenu(this.handlerShowCategory);
    }

    createData() {
        const data = {
            categories: [
                { name: 'Categoria 1', descripcion: '' },
                { name: 'Categoria 2', descripcion: '' },
                { name: 'Categoria 3', descripcion: '' },
                { name: 'Categoria 4', descripcion: '' },
            ]
        }

        for (const category of data.categories) {
            this[MODEL].addCategory(this[MODEL].createCategory(category.name, category.description));

        }


    }

    handlerShowCategory = (name) => {
        const category = this[MODEL].createCategory(name);
        //const dishes = this[MODEL].getDishesInCategory(category);

        //this[VIEW].showDishes(dishes);

        console.log(category);


    }


}
export default RestaurantController;
