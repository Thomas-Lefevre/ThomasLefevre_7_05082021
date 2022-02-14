const tagList = document.querySelector('.listeTag');

function createFiltersBar(recipe) {

    tagList.innerHTML = "";
    selectedFiltersIngredient.forEach(filter => {
        tagList.innerHTML += `<li class="Tag listeTag__ingredient">${filter} <i class="far fa-times-circle"></i></li>`
    });

    selectedFiltersApparatus.forEach(filter => {
        tagList.innerHTML += `<li class="Tag listeTag__appareil">${filter} <i class="far fa-times-circle"></i></li>`
    });

    selectedFiltersUstensils.forEach(filter => {
        tagList.innerHTML += `<li class="Tag listeTag__ustensiles">${filter} <i class="far fa-times-circle"></i></li>`
    });
    researchOnFilters(recipe);
};

function researchOnFilters(recipes) {
    const filterTags = document.querySelectorAll(".Tag");
    const ArrayFilterTags = Array.from(filterTags);

    const result = recipes.filter((recipe) => {
        return (
            recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedFiltersIngredient))
            && recipe.appliance.toLowerCase().includes(selectedFiltersApparatus)
            && recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(selectedFiltersUstensils))
        );
    });
    if (result.length === 0) {
        recipesList.innerHTML = "";
        recipesList.innerHTML = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
        listenOnFilterTag(ArrayFilterTags, recipes);
    } else {
        recipesList.innerHTML = "";
        displayRecipes(result);
        listenOnFilterTag(ArrayFilterTags, recipes)
    }
};

function listenOnFilterTag(filters, recipe) {
    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            removeFilter(filter, filters, recipe);
        });
    });
};

function removeFilter(selectedFilter, arrayOfFilters, recipe) {
    const index = arrayOfFilters.indexOf(selectedFilter);
    arrayOfFilters.slice(index, 0);
    selectedFilter.remove();
    if (selectedFilter.classList.contains("listeTag__ingredient")) {
        selectedFiltersIngredient.splice(0, selectedFiltersIngredient.length)
    } else if (selectedFilter.classList.contains("listeTag__appareil")) {
        selectedFiltersApparatus.splice(0, selectedFiltersApparatus.length)
    } else if (selectedFilter.classList.contains("listeTag__ustensiles")) {
        selectedFiltersUstensils.splice(0, selectedFiltersUstensils.length)
    }
    if (!arrayOfFilters.length) {
        recipesList.innerHTML = "";
        displayRecipes(recipe);
    } else {
        researchOnFilters(recipe, arrayOfFilters);
    }
}