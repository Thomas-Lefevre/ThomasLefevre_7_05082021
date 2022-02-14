function filteredRecipes(recipes, searchBar) {
    searchBar.addEventListener("keyup", (e) => {

        if (e.target.value.length >= 3) {
            recipesList.innerHTML = "";
            const research = e.target.value.toLowerCase();
            const result = recipes.filter((recipe) => {
                return (
                    recipe.name.toLowerCase().includes(research) || recipe.description.toLowerCase().includes(research) || recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(research))
                );
            });
            if (result.length === 0) {
                recipesList.innerHTML = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
            } else {
                displayRecipes(result);
            }
            listenOnInputs(result);
        }

        if (e.target.value.length < 3) {
            recipesList.innerHTML = "";
            displayRecipes(recipes);
            listenOnInputs(recipes);
        }
    })
}