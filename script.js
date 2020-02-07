const get_meal =  document.getElementById('get_meal');
const recipe_cont = document.getElementById('recipe');

get_meal.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => { createMeal(res.meals[0]); });
});

const createMeal = (meal) => {
    const ingredients = [];

    for(let i=1; i<=20; i++) {
        if (meal['strIngredient'+i]) {
            ingredients.push({measure: meal['strMeasure'+i], ingredient: meal['strIngredient'+i]});
        }
        else { break; }
    }

    const new_recipe = `
        <br>
        <div id="title">${meal.strMeal}</div>
        <div id="image">
            <img src="${meal.strMealThumb}">
        </div>
        <div id="ingredients">
            Ingredients:
            <ul>
                ${ingredients.map(ingredient =>`<li>${ingredient.measure} `+ ' ' +` ${ingredient.ingredient}`).join('')}
            </ul>
        </div>
        <br>
        <div id="instructions">
            Instructions:
            <p>
                ${meal.strInstructions}
            </p>
        </div>
        <div id="video">
            <iframe width="420" height="315"
            src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
            </iframe>
        </div>
    `;

    recipe_cont.innerHTML = new_recipe;
    
}