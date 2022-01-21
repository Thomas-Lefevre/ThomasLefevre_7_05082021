const recipesList = document.querySelector('.listeRecettes');
const searchBar = document.querySelector('#recherche');
let recipesArray = [];

// function getRecipes() {
//     recipesArray = [];
//     fetch('public/js/recipes.json')
//         .then(res => res.json())
//         .then(data => {
//             data.recipes.forEach(recipe => {
//                 displayData(recipe);
//                 recipe = Object.entries(recipe);
//                 recipesArray.push(recipe);
//             });
//         });
// }
const getRecipes = async () =>
    await fetch("public/js/recipes.json", {
        mode: "no-cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((res) => res.json())
        .catch((err) => console.log("An error occurs when fetching recipes", err));

function test(recipes) {
    recipes.forEach(recipe => {
        displayData(recipe);
    })
}
function displayData(recipe) {
    const recipeModel = recipesFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesList.appendChild(recipeCardDOM);
};

function generateFilters(recipes) {
    let ingredients = [];
    let ustensils = [];
    let apparatus = [];
    recipes.forEach(recipe => {
        ingredients = [
            ...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient.toLowerCase())])].sort();
        ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u.toLowerCase())])].sort();
        apparatus = [...new Set([...apparatus, ...[recipe.appliance.toLowerCase()]])].sort();
    });
    return { ingredients, ustensils, apparatus }
}
const init = async () => {
    const { recipes } = await getRecipes();
    test(recipes);
    generateFilters(recipes);
    filteredRecipes(recipes, searchBar);
    listenOnInputs(recipes);
}

init();