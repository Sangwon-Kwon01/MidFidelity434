/*************************                       Objects Constructors          *********************************/

function Meal(name, calories, ingredients) {
    this.name = name;
    this.calories = calories;
    this.ingredients = ingredients;
}

function Grocery(name, price) {
    this.name = name;
    this.price = price;
}

function Allergies(name) {
    this.name = name;
}

/*************************                       Recipies Objects          *********************************/

const pasta = new Meal("Pasta", 1200, [
    "Pasta",
    "Butter",
    "Heavy Cream",
    "Parmesan Cheese",
    "Garlic",
    "Salt and Pepper"
]);

const quesadilla = new Meal("Quesadilla", 700, [
    "Flour Tortillas",
    "Shredded Cheese",
    "Chicken or Beef (optional)",
    "Bell Peppers",
    "Onion",
    "Sour Cream",
    "Salsa"
]);

const steak = new Meal("Steak", 800, [
    "Steak (Ribeye, Sirloin, etc.)",
    "Olive Oil",
    "Salt",
    "Pepper",
    "Garlic",
    "Rosemary or Thyme (optional)"
]);

const waffles = new Meal("Waffles", 600, [
    "Flour",
    "Baking Powder",
    "Sugar",
    "Milk",
    "Eggs",
    "Butter",
    "Vanilla Extract"
]);

const tacos = new Meal("Tacos", 500, [
    "Tortillas (Corn or Flour)",
    "Ground Beef or Chicken",
    "Taco Seasoning",
    "Lettuce",
    "Tomato",
    "Cheese",
    "Sour Cream",
    "Salsa or Hot Sauce"
]);

const salad = new Meal("Salad", 150, [
    "Lettuce or Mixed Greens",
    "Cherry Tomatoes",
    "Cucumber",
    "Red Onion",
    "Carrots",
    "Olive Oil",
    "Vinegar or Lemon Juice",
    "Salt and Pepper"
]);

const milkshake = new Meal("Milkshake", 400, [
    "Ice Cream (Vanilla or Chocolate)",
    "Milk",
    "Whipped Cream (optional)",
    "Chocolate Syrup (optional)",
    "Maraschino Cherry (optional)"
]);

/*************************                       Grocery Objects          *********************************/
const apples = new Grocery("Apples", 2.50);
const butter = new Grocery("Butter", 3.00);
const cereal = new Grocery("Cereal", 4.00);
const eggs = new Grocery("Eggs", 2.00);
const strawberries = new Grocery("Strawberries", 5.00);
const chicken = new Grocery("Chicken", 8.00);
const carrots = new Grocery("Carrots", 1.50);
const milk = new Grocery("Milk", 1.80);

/*************************                       Allergy Objects          *********************************/
const peanuts = new Allergies("Peanuts");
const treeNuts = new Allergies("Tree Nuts");
const shrimp = new Allergies("Shrimp");


/*************************                       Starting Page Items          *********************************/
const favMeals = [tacos, salad, milkshake, quesadilla];
const favGrocery = [strawberries, chicken, carrots, milk];
const favAllergies = [peanuts];

/*************************                       Sets with all items for objects          *********************************/
const allMealsSet = new Set([pasta, quesadilla, steak, waffles, tacos, salad, milkshake]);
const allGrocerySet = new Set([apples, butter, cereal, eggs, strawberries, chicken, carrots, milk]);
const allAllergies = new Set([peanuts, treeNuts, shrimp]);


/*************************                       Render through lists to print on page          *********************************/
function renderGroceries(favGrocery) {
    const scrollMenu = document.querySelector('.scrollmenu-gro');
    scrollMenu.innerHTML = '';

    favGrocery.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('scroll-item');
        
        mealDiv.innerHTML = `
            <img src="scroll_icons/${meal.name.toLowerCase()}.png" class="scroll-recipes"/>
            <span>${meal.name}</span>
        `;
        
        mealDiv.onclick = () => showGroceryDetails(meal);
        scrollMenu.appendChild(mealDiv);
    });
}

function renderRecipes(favMeals) {
    const scrollMenu = document.querySelector('.scrollmenu-fav');
    scrollMenu.innerHTML = '';

    favMeals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('scroll-item');
        
        mealDiv.innerHTML = `
            <img src="scroll_icons/${meal.name.toLowerCase()}.png" class="scroll-recipes"/>
            <span>${meal.name}</span>
        `;
        
        mealDiv.onclick = () => showMealDetails(meal);
        scrollMenu.appendChild(mealDiv);
    });
}

function renderAllergies(favMeals) {
    const scrollMenu = document.querySelector('.scrollmenu');
    scrollMenu.innerHTML = '';

    favMeals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('scroll-item');
        
        mealDiv.innerHTML = `
            <img src="scroll_icons/${meal.name.toLowerCase()}.png" class="scroll-recipes"/>
            <span>${meal.name}</span>
        `;
        
        scrollMenu.appendChild(mealDiv);
    });
}

/*************************                       Show Details when Clicked          *********************************/
function showMealDetails(meal) {
    const modal = document.getElementById('mealModal');
    modal.querySelector('.modal-name').innerText = meal.name;
    modal.querySelector('.modal-calories').innerHTML = `<strong>Calories</strong>: ${meal.calories}`;
    const ingredientsList = modal.querySelector('.modal-ingredients');
    ingredientsList.innerHTML = '';

    meal.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.innerText = ingredient;
        ingredientsList.appendChild(listItem);
    });

    modal.style.display = 'block';
}

function showGroceryDetails(grocery) {
    const modal = document.getElementById('groceryModal');
    modal.querySelector('.modal-name').innerText = grocery.name;
    modal.querySelector('.modal-price').innerHTML = `<strong>Price</strong>: \$${grocery.price}`;

    modal.style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

/*************************                       Add New Object to the Page          *********************************/
function openAddModel(foodArr, foodSet, type) {
    const addModal = document.getElementById('addModal');
    const mealPicsContainer = addModal.querySelector('.meal-pics');
    const select = addModal.querySelector('select');
    
    mealPicsContainer.innerHTML = ''; 
    select.innerHTML = '';
    const nonFavMeals = Array.from(foodSet).filter(meal => !foodArr.includes(meal));
    
    nonFavMeals.forEach(meal => {
        const option = document.createElement('option');
        option.value = meal.name;
        option.textContent = meal.name;
        select.appendChild(option);
    });

    foodArr.forEach(meal => {
        mealPicsContainer.innerHTML += `
            <div class="meal-item">
                <img src="scroll_icons/${meal.name.toLowerCase()}.png" class="scroll-recipes"/>
                <span>${meal.name}</span>
            </div>
        `;
    });

    if (type === 'meal') {
        addToFavButton.onclick = () => addMealToFav(foodArr, foodSet);
    } else if (type === 'grocery') {
        addToFavButton.onclick = () => addGrocToFav(foodArr, foodSet);
    } else {
        addToFavButton.onclick = () => addAllergyToFav(foodArr, foodSet);
    }

    addModal.style.display = 'block';
}


function closeAddModal(foodArr) {
    const addModal = document.getElementById('addModal');
    addModal.style.display = 'none';
}

function addMealToFav(foodArr, foodSet) {
    const select = document.querySelector('#addModal select');
    const selectedMealName = select.value;

    const selectedMeal = Array.from(foodSet).find(meal => meal.name === selectedMealName);

    if (selectedMeal && !foodArr.includes(selectedMeal)) {
        foodArr.push(selectedMeal);
        openAddModel(foodArr, foodSet, 'meal');
        renderRecipes(foodArr)
    }
}

function addGrocToFav(foodArr, foodSet) {
    const select = document.querySelector('#addModal select');
    const selectedMealName = select.value;

    const selectedGroc = Array.from(foodSet).find(meal => meal.name === selectedMealName);

    if (selectedGroc && !foodArr.includes(selectedGroc)) {
        foodArr.push(selectedGroc);
        openAddModel(foodArr, foodSet, 'grocery');
        renderGroceries(foodArr)
    }
}

function addAllergyToFav(foodArr, foodSet) {
    const select = document.querySelector('#addModal select');
    const selectedMealName = select.value;

    const selectedGroc = Array.from(foodSet).find(meal => meal.name === selectedMealName);

    if (selectedGroc && !foodArr.includes(selectedGroc)) {
        foodArr.push(selectedGroc);
        openAddModel(foodArr, foodSet, 'allergy');
        renderAllergies(foodArr)
    }
}

/*************************                       Loading the Page          *********************************/

document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(favMeals)
    renderGroceries(favGrocery)
    renderAllergies(favAllergies)
});