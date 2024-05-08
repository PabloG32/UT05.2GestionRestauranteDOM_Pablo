const MODEL = Symbol('RestaurantModel');
const VIEW = Symbol('RestaurantView');

class RestaurantController {
    constructor(RestaurantModel, viewRestaurant) {
        this[MODEL] = RestaurantModel;
        this[VIEW] = viewRestaurant;

        this.onLoad();

        // Eventos iniciales del Controlador
        this.onInit();
        this[VIEW].bindInit(this.handleInit);

    }
    onInit = () => {
        this.createData();
        this.onCategories();
        this.onAllergenes();
        this.onMenus();
        this.onRestaurants();
        this.onDishes();
    };

    handleInit = () => {
        this.onInit();
    }

    onLoad = () => {


    };

    onCategories() {
        const categories = this[MODEL].categories;
        this[VIEW].showCategoriesMenu(categories);
        this[VIEW].bindCategoriesMenu(this.handlerShowCategory);
        this[VIEW].showCategories(categories);
        this[VIEW].bindCategoriesMain(this.handlerShowCategoryDishes);
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
        this[VIEW].showDishes(dishes);
        this[VIEW].bindDishes(this.handlerShowDish);
    }

    createData() {
        const data = {
            categories: [
                {
                    name: 'Entrantes', description: 'Deliciosos platos para abrir el apetito antes de la comida principal.',
                    dishes: ['Ensalada_César', 'Croquetas_de_jamón', 'Nachos', 'Patatas']
                },
                {
                    name: 'Platos principales', description: 'Sabrosos platos que satisfacen el hambre y deleitan el paladar.',
                    dishes: ['Paella_de_marisco', 'Pasta', 'Sopa', 'Gazpacho']
                },
                {
                    name: 'Platos segundos', description: 'Exquisitas opciones para aquellos que desean algo más sustancial después del plato principal.',
                    dishes: ['Solomillo', 'Dorada', 'Lagarto', 'Entrecot']
                }
            ],

            allergenes: [
                { name: 'Gluten', description: 'Proteína presente en cereales como trigo, cebada y centeno, que puede causar reacciones adversas en personas con intolerancia al gluten.' },
                { name: 'Lácteos', description: 'Productos derivados de la leche de vaca, oveja o cabra, que pueden provocar reacciones alérgicas en algunas personas.' },
                { name: 'Crustáceos', description: 'Mariscos como camarones, langostinos y cangrejos, que pueden desencadenar alergias alimentarias en ciertas personas.' },
                { name: 'Huevos', description: 'Alimento comúnmente utilizado en la cocina que puede desencadenar alergias en algunas personas, especialmente en la clara de huevo.' }
            ],

            menus: [
                { name: 'Menú del día 1', description: 'Una selección variada de platos diseñados para satisfacer tus papilas gustativas y mantener tu energía durante el día.' },
                { name: 'Menú del día 2', description: 'Platos cuidadosamente elaborados con ingredientes frescos y de temporada para una experiencia culinaria única.' },
                { name: 'Menú del día 3', description: 'Disfruta de una combinación equilibrada de sabores y texturas en nuestro tercer menú del día, preparado con esmero para tu deleite.' }
            ],

            restaurants: [
                { name: 'Restaurante 1', description: 'Un acogedor lugar que ofrece una mezcla de cocina tradicional y moderna en un ambiente relajado y amigable.' },
                { name: 'Restaurante 2', description: 'Un destino gastronómico de renombre que se enorgullece de su enfoque en ingredientes frescos y técnicas culinarias innovadoras.' },
                { name: 'Restaurante 3', description: 'Un encantador restaurante que combina elegancia y sencillez, ofreciendo una experiencia culinaria excepcional con platos cuidadosamente elaborados.' }
            ],

            dishes: [
                { name: 'Ensalada_César', description: 'Mezcla de lechugas, pollo, crutones y aderezo César', ingredients: ["lechugas", "pollo", "crutones", "aderezo César"], image: '../img/ensaladaCesar.jpg' },
                { name: 'Croquetas_de_jamón', description: 'Croquetas caseras de jamón ibérico', ingredients: ["jamón ibérico"], image: '../img/croquetasJamon.jpg' },
                { name: 'Nachos', description: 'Nachos con guacamole', ingredients: ["nachos", "guacamole"], image: '../img/nachos.jpeg' },
                { name: 'Patatas', description: 'Patatas con huevo y jamon', ingredients: ["patatas", "huevo", "jamón"], image: '../img/patatas.jpg' },
                { name: 'Paella_de_marisco', description: 'Paella con mariscos frescos', ingredients: ["paella", "mariscos frescos"], image: '../img/paellaMarisco.jpg' },
                { name: 'Pasta', description: 'Macarrones boloñesa', ingredients: ["pasta", "carne picada", "salsa de tomate", "queso rallado"], image: '../img/pasta.jpg' },
                { name: 'Sopa', description: 'Sopa de verdura', ingredients: ["verduras", "caldo"], image: '../img/sopa.jpg' },
                { name: 'Gazpacho', description: 'Gazpacho andaluz', ingredients: ["tomate", "pepino", "pimiento", "cebolla", "ajo", "vinagre", "aceite de oliva", "sal"], image: '../img/gazpacho.jpeg' },
                { name: 'Solomillo', description: 'Solomillo de pavo', ingredients: ["solomillo de pavo"], image: '../img/solomillo.jpg' },
                { name: 'Dorada', description: 'Dorada con naranja', ingredients: ["dorada", "naranja"], image: '../img/dorada.jpg' },
                { name: 'Lagarto', description: 'Lagarto con salsa de setas', ingredients: ["lagarto", "setas", "vino blanco", "nata", "caldo de carne"], image: '../img/lagarto.jpg' },
                { name: 'Entrecot', description: 'Entrecot de ternera a la parrilla con guarnición', ingredients: ["entrecot de ternera", "guarnición"], image: '../img/entrecot.jpg' }
            ]

        }

        for (const dish of data.dishes) {
            this[MODEL].addDish(this[MODEL].createDish(dish.name, dish.description, dish.ingredients, dish.image));

        }

        for (const category of data.categories) {
            const storedCategory = this[MODEL].createCategory(category.name, category.description);
            this[MODEL].addCategory(storedCategory);
            if (category.dishes) {
                for (const dish of category.dishes) {
                    const sotredDish = this[MODEL].createDish(dish);
                    this[MODEL].assignCategoryToDish(storedCategory, sotredDish);
                }
            }
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
    }

    handlerShowCategory = (name) => {
        const category = this[MODEL].createCategory(name);
    }

    handlerShowAllergen = (name) => {
        const allergen = this[MODEL].createAllergen(name);
    }

    handlerShowMenu = (name) => {
        const menu = this[MODEL].createMenu(name);
    }

    handlerShowRestaurant = (name) => {
        const restaurant = this[MODEL].createRestaurant(name);
        this[VIEW].showRestaurants(restaurant);
    }

    handlerShowDish = (name) => {
        const dish = this[MODEL].createDish(name);
    }

    handlerShowCategoryDishes = (name) => {
        const category = this[MODEL].createCategory(name);
        const dishes = this[MODEL].getDishesInCategory(category);
        this[VIEW].showDishesInCategory(dishes);
    }
}
export default RestaurantController;
