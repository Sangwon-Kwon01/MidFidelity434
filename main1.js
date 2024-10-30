/*************************                       Objects Constructors          *********************************/

function Meal(name, icon) {
    this.name = name;
    this.icon = icon
}

function Grocery(name, price) {
    this.name = name;
    this.price = price;
}

function Allergies(name, icon) {
    this.name = name;
    this.icon = icon
}

const categoryIcons = {
    dairy: 'dairyIcon.png',
    frozen: 'frozenIcon.png',
    vegetables: 'vegetablesIcon.png',
    fruits: 'fruitsIcon.png',
    meats: 'meatsIcon.png',
    snacks: 'snacksIcon.png'
};

const chefIcons = {
    beginner: 'begChef.png',
    intermediate: 'intChef.png',
    advanced: 'advChef.png'
};

const allergyIcons = {
    peanuts: 'scroll_icons/peanuts.png',
    lactose: 'scroll_icons/milk.png',
    gluten: 'gluten.png',
    fish: 'scroll_icons/shrimp.png'
};

/*************************                       Recipies Objects          *********************************/

// const pasta = new Meal("Pasta", 1200, [
//     "Pasta",
//     "Butter",
//     "Heavy Cream",
//     "Parmesan Cheese",
//     "Garlic",
//     "Salt and Pepper"
// ]);

// const quesadilla = new Meal("Quesadilla", 700, [
//     "Flour Tortillas",
//     "Shredded Cheese",
//     "Chicken or Beef (optional)",
//     "Bell Peppers",
//     "Onion",
//     "Sour Cream",
//     "Salsa"
// ]);

// const steak = new Meal("Steak", 800, [
//     "Steak (Ribeye, Sirloin, etc.)",
//     "Olive Oil",
//     "Salt",
//     "Pepper",
//     "Garlic",
//     "Rosemary or Thyme (optional)"
// ]);

// const waffles = new Meal("Waffles", 600, [
//     "Flour",
//     "Baking Powder",
//     "Sugar",
//     "Milk",
//     "Eggs",
//     "Butter",
//     "Vanilla Extract"
// ]);

// const tacos = new Meal("Tacos", 500, [
//     "Tortillas (Corn or Flour)",
//     "Ground Beef or Chicken",
//     "Taco Seasoning",
//     "Lettuce",
//     "Tomato",
//     "Cheese",
//     "Sour Cream",
//     "Salsa or Hot Sauce"
// ]);

// const salad = new Meal("Salad", 150, [
//     "Lettuce or Mixed Greens",
//     "Cherry Tomatoes",
//     "Cucumber",
//     "Red Onion",
//     "Carrots",
//     "Olive Oil",
//     "Vinegar or Lemon Juice",
//     "Salt and Pepper"
// ]);

// const milkshake = new Meal("Milkshake", 400, [
//     "Ice Cream (Vanilla or Chocolate)",
//     "Milk",
//     "Whipped Cream (optional)",
//     "Chocolate Syrup (optional)",
//     "Maraschino Cherry (optional)"
// ]);

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
const favMeals = [];
const favGrocery = [];
const favAllergies = [];

/*************************                       Sets with all items for objects          *********************************/
const allMealsSet = new Set([]);
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
            <img src="${meal.icon}" class="scroll-recipes"/>
            <span>${meal.name}</span>
            <span>
                <img src="remove.png" class="add-item" id="remove" onclick="openRemModelRec(favGrocery, '${meal.name}', 'grocery')"/>
            </span>
        `;
        
        // mealDiv.onclick = () => showGroceryDetails(meal);
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
            <img src="${meal.icon}" class="scroll-recipes"/>
            <span>${meal.name}</span>
            <span>
                <img src="remove.png" class="add-item" id="remove" onclick="openRemModelRec(favMeals, '${meal.name}', 'meal')"/>
            </span>
        `;
        
        //mealDiv.onclick = () => showMealDetails(meal);
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
            <img src="${meal.icon}" class="scroll-recipes"/>
            <span>${meal.name}</span>
            <span>
                <img src="remove.png" class="add-item" id="remove" onclick="openRemModelRec(favAllergies, '${meal.name}', 'allergy')"/>
            </span>
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

// function showGroceryDetails(grocery) {
//     const modal = document.getElementById('groceryModal');
//     modal.querySelector('.modal-name').innerText = grocery.name;
//     modal.querySelector('.modal-price').innerHTML = `<strong>Price</strong>: \$${grocery.price}`;

//     modal.style.display = 'block';
// }

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

/*************************                       Add New Object to the Page          *********************************/
function openAddModel(foodArr, foodSet, type) {
    const addModal = document.getElementById('addModalAllergy');
    const mealPicsContainer = addModal.querySelector('.meal-pics');
    const select = addModal.querySelector('select');
    const newItemInput = addModal.querySelector('#new');
    const addToFavButton = document.getElementById('addToFavButton2');
    
    mealPicsContainer.innerHTML = ''; 
    select.innerHTML = '';

    Object.keys(allergyIcons).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        option.setAttribute('data-icon', categoryIcons[category]);

        select.appendChild(option);
    });

    foodArr.forEach(meal => {
        mealPicsContainer.innerHTML += `
            <div class="meal-item">
                <img src="${meal.icon}" class="scroll-recipes"/>
                <span>${meal.name}</span>
            </div>
        `;
    });

    addToFavButton.onclick = () => {
        const selectedCategory = select.value;
        addAllergyToFav(selectedCategory, foodArr, foodSet);
    };

    addModal.style.display = 'block';
}

function openAddModelGroc(foodArr, foodSet, type) {
    const addModal = document.getElementById('addModal');
    const mealPicsContainer = addModal.querySelector('.meal-pics');
    const select = addModal.querySelector('select');
    const newItemInput = addModal.querySelector('#new');
    const addToFavButton = document.getElementById('addToFavButton');
    
    mealPicsContainer.innerHTML = ''; 
    select.innerHTML = '';

    Object.keys(categoryIcons).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        option.setAttribute('data-icon', categoryIcons[category]);

        select.appendChild(option);
    });

    foodArr.forEach(meal => {
        mealPicsContainer.innerHTML += `
            <div class="meal-item">
                <img src="${meal.icon}" class="scroll-recipes"/>
                <span>${meal.name}</span>
            </div>
        `;
    });

    addToFavButton.onclick = () => {
        const newItem = newItemInput.value.trim(); 
        const selectedCategory = select.value;
        newItemInput.value = '';

        if (newItem) {
            addGrocToFav(newItem, selectedCategory, foodArr, foodSet);
        } else {
            alert("Please enter an item to add.");
        }
    };

    addModal.style.display = 'block';
}

function openAddModelRec(foodArr, foodSet, type) {
    const addModal = document.getElementById('addModal');
    const mealPicsContainer = addModal.querySelector('.meal-pics');
    const select = addModal.querySelector('select');
    const newItemInput = addModal.querySelector('#new');
    const addToFavButton = document.getElementById('addToFavButton');
    
    mealPicsContainer.innerHTML = ''; 
    select.innerHTML = '';

    Object.keys(chefIcons).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        option.setAttribute('data-icon', categoryIcons[category]);

        select.appendChild(option);
    });

    foodArr.forEach(meal => {
        mealPicsContainer.innerHTML += `
            <div class="meal-item">
                <img src="${meal.icon}" class="scroll-recipes"/>
                <span>${meal.name}</span>
            </div>
        `;
    });

    addToFavButton.onclick = () => {
        const newItem = newItemInput.value.trim(); 
        const selectedCategory = select.value;
        newItemInput.value = '';
        
        if (newItem) {
            addMealToFav(newItem, selectedCategory, foodArr, foodSet);
        } else {
            alert("Please enter an item to add.");
        }
    };

    addModal.style.display = 'block';
}


function closeAddModal(foodArr) {
    const addModal = document.getElementById('addModal');
    addModal.style.display = 'none';
}

function closeAddModalAllergy() {
    const addModal = document.getElementById('addModalAllergy');
    addModal.style.display = 'none';
}


function addMealToFav(newItem, selectedCategory, foodArr, foodSet) {
    const select = document.querySelector('#addModal select');
    const itemIcon = chefIcons[selectedCategory];
    const item = new Meal(newItem, itemIcon);

    //const selectedMeal = Array.from(foodSet).find(meal => meal.name === selectedMealName);

    if (item && !foodArr.includes(item)) {
        foodArr.push(item);
        openAddModelRec(foodArr, foodSet, 'meal');
        renderRecipes(foodArr)
    }
}

function addGrocToFav(newItem, selectedCategory, foodArr, foodSet) {
    const select = document.querySelector('#addModal select');
    const itemIcon = categoryIcons[selectedCategory];
    const item = new Meal(newItem, itemIcon);

    //const selectedGroc = Array.from(foodSet).find(meal => meal.name === selectedMealName);

    if (item && !foodArr.includes(item)) {
        foodArr.push(item);
        openAddModelGroc(foodArr, foodSet, 'grocery');
        renderGroceries(foodArr)
    }
}

function addAllergyToFav(selectedCategory, foodArr, foodSet) {
    const select = document.querySelector('#addModal select');
    const itemIcon = allergyIcons[selectedCategory];
    selectedCategory = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
    const item = new Allergies(selectedCategory, itemIcon);

    if (item && !foodArr.includes(item)) {
        foodArr.push(item);
        openAddModel(foodArr, foodSet, 'allergy');
        renderAllergies(foodArr)
    }
}

function openRemModelRec(foodArr, name, type){
    const index = foodArr.findIndex(item => item.name === name);
    
    if (index !== -1) {
        foodArr.splice(index, 1); // Remove the item directly from the array
    }

    if (type === 'meal') {
        renderRecipes(foodArr);
    } else if (type === 'grocery') {
        renderGroceries(foodArr);
    } else {
        renderAllergies(foodArr);
    }
}

/*************************                       Loading the Page          *********************************/

document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(favMeals)
    renderGroceries(favGrocery)
    renderAllergies(favAllergies)
});