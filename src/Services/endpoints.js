const key = process.env.REACT_APP_API_KEY

const Endpoints = {
    RANDOM_RECIPES: (size) => `https://api.spoonacular.com/recipes/random?number=${size}&apiKey=${key}`,
    RECIPE_INFO: (id) => `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`,
    SEARCH_RECIPE: (size, category) => `https://api.spoonacular.com/recipes/complexSearch?number=${size}&diet=${category}&addRecipeNutrition=true&apiKey=${key}`,
    CREATE_ACCOUNT: `${process.env.LOCAL_BASE_URL}/users/register`
}

export default Endpoints