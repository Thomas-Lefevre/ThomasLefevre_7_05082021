function filteredRecipes(recipes, searchBar) {
    searchBar.addEventListener("keyup", (e) => {
        if (e.target.value.length >= 3) {
            const result = [];
            recipesList.innerHTML = "";
            const research = e.target.value.toLowerCase();
            for (i = 0; i < recipes.length; i++) {
                const { name, ingredients, description } = recipes[i];
                const includesInName = name.toLowerCase().includes(research);
                const includesInDescription = description.toLowerCase().includes(research);
                let includesInIngredients = false;
                for (x = 0; x < ingredients.length; x++) {
                    if (ingredients[x].ingredient.toLowerCase().includes(research)) {
                        includesInIngredients = true;
                    }
                }
                if (includesInName || includesInDescription || includesInIngredients){
                    result.push(recipes[i]);
                    displayData(recipes[i]);
                }
            }
            if(result.length===0){
                recipesList.innerHTML="Il n'y a rien";
            }
        }
        if(e.target.value.length<3){
            recipesList.innerHTML="";
            getRecipes();
        }
    })
}