const get_meal =  document.getElementById('get_meal');
const meal_cont = document.getElementById('meal');

get_meal.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => { createMeal(res.meals[0]); });
});

const createMeal = (meal) => {
    const ingredients = [];

}