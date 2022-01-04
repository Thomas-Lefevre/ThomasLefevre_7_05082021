const recipesList = document.querySelector('.listeRecettes');
const searchBar = document.querySelector('#recherche');
let recipesArray = [];

function getRecipes() {
    fetch('public/js/recipes.json')
        .then(res => res.json())
        .then(data => {
            data.recipes.forEach(recipe => {
                displayData(recipe);
                recipesArray.push(recipe);
            });
        });
}

function displayData(recipe) {
    const recipeModel = recipesFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesList.appendChild(recipeCardDOM);
};

getRecipes();
filteredRecipes(recipesArray, searchBar);