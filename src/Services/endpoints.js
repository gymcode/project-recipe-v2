const key = process.env.REACT_APP_API_KEY

const Endpoints = {
    RANDOM_RECIPES: (size) => `https://api.spoonacular.com/recipes/random?number=${size}&apiKey=${key}`,
    RECIPE_INFO: (id) => `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`,
    SEARCH_RECIPE: (size, category) => `https://api.spoonacular.com/recipes/complexSearch?number=${size}&diet=${category}&addRecipeNutrition=true&apiKey=${key}`,
    CREATE_ACCOUNT: `http://localhost:8080/api/v1/users/register`,
    RESEND_OTP: `http://localhost:8080/api/v1/users/resend`,
    CONFIRM_OTP: `http://localhost:8080/api/v1/users/confirm-otp`
}

export default Endpoints