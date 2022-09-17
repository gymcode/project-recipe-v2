const key = process.env.REACT_APP_API_KEY

const Endpoints = {
    RANDOM_RECIPES: (size) => `https://api.spoonacular.com/recipes/random?number=${size}&apiKey=${key}`,
    RECIPE_INFO: (id) => `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`
}

export default Endpoints