const get_meal =  document.getElementById('get_meal');
const meal_cont = document.getElementById('meal');

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

    
    
}