const tagList = document.querySelector('.listeTag')
function createFiltersBar(selectedFiltersUnduplicated, recipe) {
    tagList.innerHTML = "";
    selectedFiltersUnduplicated.forEach(filter => {
        tagList.innerHTML += `<li class="listeTag__tag">${filter} <i class="far fa-times-circle"></i></li>`
    })
    researchOnFilters(recipe, selectedFiltersUnduplicated);
};

function researchOnFilters(recipes) {
    const filterTags = document.querySelectorAll(".listeTag__tag");
    const filters = Array.from(filterTags);
    const result = recipes.filter(recipe => {
        return filters.every(item => {
            const formatedItem = item.textContent.toLowerCase();
            return (
                recipe.ingredients.some(i => {
                    return i.ingredient.toLowerCase().includes(formatedItem);
                }) ||
                recipe.appliance.toLowerCase().includes(formatedItem) ||
                recipe.ustensils.some(ustensil => {
                    return ustensil.toLowerCase() === formatedItem;
                })
            );
        });
    });
    if (result.length) {
        recipesList.innerHTML = "";
        test(result);
        listenOnFilterTag(filters, recipes);
    } else if (!result.length) {
        listenOnFilterTag(filters, recipes);
        recipesList.innerHTML = "";
        recipesList.innerHTML = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
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
    selectedFilters.splice(0, selectedFilters.length)
    if (!arrayOfFilters.length) {
        recipesList.innerHTML = "";
        test(recipe);
    } else {
        researchOnFilters(recipe, arrayOfFilters);
    }
}