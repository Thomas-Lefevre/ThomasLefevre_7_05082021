const recipesList = document.querySelector('.listeRecettes');

function getRecipes() {
    fetch('public/js/recipes.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
            data.recipes.forEach(recipe => {
                displayData(recipe);
            });
        });
}

function displayData(recipe) {
    const recipeModel = recipesFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesList.appendChild(recipeCardDOM);
};

getRecipes();