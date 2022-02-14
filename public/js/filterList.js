const researchTagList = document.querySelector('.rechercheTag');

const selectedFiltersIngredient = [];
const selectedFiltersApparatus = [];
const selectedFiltersUstensils = [];
const selectedFiltersUnduplicated = [[], [], []];

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

ustensilsForm.addEventListener("click", () => {
    if (ustensilsList.classList.contains("rechercheUstensilesAside--inactive")) {
        ustensilsForm.style.width = "50%";
        apparatusForm.style.width = "20%";
        ingredientsForm.style.width = "20%";
        researchTagList.style.width = "100%";
        chevronApparatus.classList.replace("fa-angle-up", "fa-angle-down");
        apparatusList.classList.replace("rechercheAppareilAside--active", "rechercheAppareilAside--inactive");
        chevronIngredients.classList.replace("fa-angle-up", "fa-angle-down");
        ingredientsList.classList.replace("rechercheIngredientAside--active", "rechercheIngredientAside--inactive");
        chevronUstensils.classList.replace("fa-angle-down", "fa-angle-up");
        ustensilsList.classList.replace("rechercheUstensilesAside--inactive", "rechercheUstensilesAside--active");
    } else {
        ustensilsForm.style.width = "30%";
        apparatusForm.style.width = "30%";
        ingredientsForm.style.width = "30%";
        researchTagList.style.width = "50%";
        chevronUstensils.classList.replace("fa-angle-up", "fa-angle-down");
        ustensilsList.classList.replace("rechercheUstensilesAside--active", "rechercheUstensilesAside--inactive");
    }
});

apparatusForm.addEventListener("click", () => {
    if (apparatusList.classList.contains("rechercheAppareilAside--inactive")) {
        apparatusForm.style.width = "50%";
        ingredientsForm.style.width = "20%";
        ustensilsForm.style.width = "20%";
        researchTagList.style.width = "100%";
        chevronApparatus.classList.replace("fa-angle-down", "fa-angle-up");
        apparatusList.classList.replace("rechercheAppareilAside--inactive", "rechercheAppareilAside--active");
        chevronIngredients.classList.replace("fa-angle-up", "fa-angle-down");
        ingredientsList.classList.replace("rechercheIngredientAside--active", "rechercheIngredientAside--inactive");
        chevronUstensils.classList.replace("fa-angle-up", "fa-angle-down");
        ustensilsList.classList.replace("rechercheUstensilesAside--active", "rechercheUstensilesAside--inactive");
    } else {
        apparatusForm.style.width = "30%";
        ingredientsForm.style.width = "30%";
        ustensilsForm.style.width = "30%";
        researchTagList.style.width = "50%";
        chevronApparatus.classList.replace("fa-angle-up", "fa-angle-down");
        apparatusList.classList.replace("rechercheAppareilAside--active", "rechercheAppareilAside--inactive");
    }
});

ingredientsForm.addEventListener("click", () => {
    if (ingredientsList.classList.contains("rechercheIngredientAside--inactive")) {
        ingredientsForm.style.width = "50%";
        apparatusForm.style.width = "20%";
        ustensilsForm.style.width = "20%";
        researchTagList.style.width = "100%";
        chevronApparatus.classList.replace("fa-angle-up", "fa-angle-down");
        apparatusList.classList.replace("rechercheAppareilAside--active", "rechercheAppareilAside--inactive");
        chevronIngredients.classList.replace("fa-angle-down", "fa-angle-up");
        ingredientsList.classList.replace("rechercheIngredientAside--inactive", "rechercheIngredientAside--active");
        chevronUstensils.classList.replace("fa-angle-up", "fa-angle-down");
        ustensilsList.classList.replace("rechercheUstensilesAside--active", "rechercheUstensilesAside--inactive");
    } else {
        ingredientsForm.style.width = "30%";
        apparatusForm.style.width = "30%";
        ustensilsForm.style.width = "30%"
        researchTagList.style.width = "50%";
        chevronIngredients.classList.replace("fa-angle-up", "fa-angle-down");
        ingredientsList.classList.replace("rechercheIngredientAside--active", "rechercheIngredientAside--inactive");
    }
});

function listenOnInputs(recipe) {
    const { ingredients, ustensils, apparatus } = generateFilters(recipe);
    ustensilsList.innerHTML = "";
    apparatusList.innerHTML = "";
    ingredientsList.innerHTML = "";

    ustensils.forEach((ustensil) => {
        ustensilsList.innerHTML += `<li class="rechercheUstensilesAside__item">${ustensil}</li>`;
    })
    apparatus.forEach((apparatus) => {
        apparatusList.innerHTML += `<li class="rechercheAppareilAside__item">${apparatus}</li>`;
    })
    ingredients.forEach((ingredient) => {
        ingredientsList.innerHTML += `<li class="rechercheIngredientAside__item">${ingredient}</li>`;
    })

    listenOnIngredientsInput();
    listenOnUstensilsInput();
    listenOnApparatusInput();


    ustensilsInput.addEventListener("keyup", (e) => {
        let results = [];
        ustensilsList.innerHTML = "";
        const ustensilsResearch = e.target.value.toLowerCase();
        results = ustensils.filter((ustensil) => {
            return ustensil.toLowerCase().includes(ustensilsResearch);
        });
        results.forEach((ustensil) => {
            ustensilsList.innerHTML += `<li class="rechercheUstensilesAside__item">${ustensil}</li>`;
        });
        listenOnUstensilsInput();
    });

    function listenOnUstensilsInput() {
        const ustensilsItems = document.querySelectorAll('.rechercheUstensilesAside__item');
        ustensilsItems.forEach(item => {
            item.addEventListener("click", () => {
                selectedFiltersUstensils.push(item.textContent);
                createFiltersBar(recipe);
            })
        })
    }


    apparatusInput.addEventListener("keyup", (e) => {
        let results = [];
        apparatusList.innerHTML = "";
        const apparatusResearch = e.target.value.toLowerCase();
        results = apparatus.filter((apparatus) => {
            return apparatus.toLowerCase().includes(apparatusResearch);
        });
        results.forEach((apparatus) => {
            apparatusList.innerHTML += `<li class="rechercheAppareilAside__item">${apparatus}</li>`;
        });
        listenOnApparatusInput();
    });

    function listenOnApparatusInput() {
        const apparatusItems = document.querySelectorAll('.rechercheAppareilAside__item');
        apparatusItems.forEach(item => {
            item.addEventListener("click", () => {
                selectedFiltersApparatus.push(item.textContent);
                createFiltersBar(recipe);
            })
        })
    }



    ingredientsInput.addEventListener("keyup", (e) => {
        let results = [];
        ingredientsList.innerHTML = "";
        const ingredientsResearch = e.target.value.toLowerCase();
        results = ingredients.filter((ingredient) => {
            return ingredient.toLowerCase().includes(ingredientsResearch);
        });
        results.forEach((ingredient) => {
            ingredientsList.innerHTML += `<li class="rechercheIngredientAside__item">${ingredient}</li>`;
        });
        listenOnIngredientsInput();
    });

    function listenOnIngredientsInput() {
        const ingredientsItems = document.querySelectorAll('.rechercheIngredientAside__item');
        ingredientsItems.forEach(item => {
            item.addEventListener("click", () => {
                selectedFiltersIngredient.push(item.textContent);
                createFiltersBar(recipe);
            })
        })
    }
}