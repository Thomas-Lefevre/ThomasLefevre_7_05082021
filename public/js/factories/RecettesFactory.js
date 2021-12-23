function recipesFactory(data) {

    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

    function getRecipeCardDOM() {
        let article = document.createElement('article');
        article.classList.add("recette")
        let recipeCard = `
        <div class="recette__image"></div>
        <div class="recette__header">
            <h2 class="recette__header__titre">${name}</h2>
            <p class="gras recette__header__temps"><i class="far fa-clock"></i> ${time}min</p>
        </div>
        <div class="recette__body">
            <ul class="recette__body__ingredients">`
        ingredients.forEach(ingredient => {
            recipeCard += `<li><span class="gras">${ingredient.ingredient}`
            if (ingredient.quantity) {
                recipeCard += `:</span> ${ingredient.quantity}`
            }
            if (ingredient.unit) {
                recipeCard += ` ${ingredient.unit}</li>`
            }
        })
        recipeCard += `
        </ul>
        <p class="recette__body__description">${description}</p>
        </div>
        `;
        article.innerHTML = recipeCard;
        return (article);
    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipeCardDOM }
}