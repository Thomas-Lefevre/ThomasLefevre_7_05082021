const ingredientsForm = document.querySelector('.rechercheIngredient');
const ustensilsForm = document.querySelector('.rechercheUstensiles');
const apparatusForm = document.querySelector('.rechercheAppareil');

const ingredientsList = document.querySelector('.rechercheIngredientAside');
const ustensilsList = document.querySelector('.rechercheUstensilesAside');
const apparatusList = document.querySelector('.rechercheAppareilAside')

const ingredientsResult = document.querySelector('.rechercheIngredientAside__liste');
const ustensilsResult = document.querySelector('.rechercheUstensilesAside__liste');
const apparatusResult = document.querySelector('.rechercheAppareilAside__liste')

const chevronApparatus = document.querySelector('.flecheAppareil');
const chevronIngredients = document.querySelector('.flecheIngredient');
const chevronUstensils = document.querySelector('.flecheUstensiles')

const ingredientsInput = document.querySelector('#ingredient');
const ustensilsInput = document.querySelector('#ustensiles');
const apparatusInput = document.querySelector('#appareil');

function listenOnInputs(recipe) {
    const { ingredients, ustensils, apparatus } = generateFilters(recipe);
    ustensils.forEach((ustensil) => {
        ustensilsList.innerHTML += `<li class="apparatus__item">${ustensil}</li>`;
    })
    apparatus.forEach((apparatus) => {
        apparatusList.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
    })
    ingredients.forEach((ingredient) => {
        ingredientsList.innerHTML += `<li class="apparatus__item">${ingredient}</li>`;
    })

    ustensilsForm.addEventListener("click", () => {
        if (ustensilsList.classList.contains("rechercheUstensilesAside--inactive")) {
            chevronApparatus.classList.replace("fa-angle-up", "fa-angle-down");
            apparatusList.classList.replace("rechercheAppareilAside--active", "rechercheAppareilAside--inactive");
            apparatusResult.innerHTML = "";
            chevronIngredients.classList.replace("fa-angle-up", "fa-angle-down");
            ingredientsList.classList.replace("rechercheIngredientAside--active", "rechercheIngredientAside--inactive");
            ingredientsResult.innerHTML = "";
            chevronUstensils.classList.replace("fa-angle-down", "fa-angle-up");
            ustensilsList.classList.replace("rechercheUstensilesAside--inactive", "rechercheUstensilesAside--active");
        } else {
            chevronUstensils.classList.replace("fa-angle-up", "fa-angle-down");
            ustensilsList.classList.replace("rechercheUstensilesAside--active", "rechercheUstensilesAside--inactive");
            ustensilsResult.innerHTML = "";
        }

    });

    ustensilsInput.addEventListener("keyup", (e) => {
        let results = [];
        if (e.target.value.length >= 1) {
            ustensilsList.innerHTML = "";
            const ustensilsResearch = e.target.value.toLowerCase();
            results = ustensils.filter((ustensil) => {
                return ustensil.toLowerCase().includes(ustensilsResearch);
            });
        } else {
            results = ustensils;
        }
        results.forEach((ustensil) => {
            ustensilsList.innerHTML += `<li class="apparatus__item">${ustensil}</li>`;
        });
    });

    apparatusForm.addEventListener("click", () => {
        if (apparatusList.classList.contains("rechercheAppareilAside--inactive")) {
            chevronApparatus.classList.replace("fa-angle-down", "fa-angle-up");
            apparatusList.classList.replace("rechercheAppareilAside--inactive", "rechercheAppareilAside--active");
            apparatusResult.innerHTML = "";
            chevronIngredients.classList.replace("fa-angle-up", "fa-angle-down");
            ingredientsList.classList.replace("rechercheIngredientAside--active", "rechercheIngredientAside--inactive");
            ingredientsResult.innerHTML = "";
            chevronUstensils.classList.replace("fa-angle-up", "fa-angle-down");
            ustensilsList.classList.replace("rechercheUstensilesAside--active", "rechercheUstensilesAside--inactive");
        } else {
            chevronApparatus.classList.replace("fa-angle-up", "fa-angle-down");
            apparatusList.classList.replace("rechercheAppareilAside--active", "rechercheAppareilAside--inactive");
            apparatusResult.innerHTML = "";
        }

    });

    ingredientsForm.addEventListener("click", () => {
        if (ingredientsList.classList.contains("rechercheIngredientAside--inactive")) {
            chevronApparatus.classList.replace("fa-angle-up", "fa-angle-down");
            apparatusList.classList.replace("rechercheAppareilAside--active", "rechercheAppareilAside--inactive");
            apparatusResult.innerHTML = "";
            chevronIngredients.classList.replace("fa-angle-down", "fa-angle-up");
            ingredientsList.classList.replace("rechercheIngredientAside--inactive", "rechercheIngredientAside--active");
            ingredientsResult.innerHTML = "";
            chevronUstensils.classList.replace("fa-angle-up", "fa-angle-down");
            ustensilsList.classList.replace("rechercheUstensilesAside--active", "rechercheUstensilesAside--inactive");
        } else {
            chevronIngredients.classList.replace("fa-angle-up", "fa-angle-down");
            ingredientsList.classList.replace("rechercheIngredientAside--active", "rechercheIngredientAside--inactive");
            ingredientsResult.innerHTML = "";
        }

    });
}