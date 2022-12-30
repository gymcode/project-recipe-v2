const key = process.env.REACT_APP_API_KEY

const Endpoints = {
    RANDOM_RECIPES: (size) => `https://api.spoonacular.com/recipes/random?number=${size}&apiKey=${key}`,
    RECIPE_INFO: (id) => `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`,
    SEARCH_RECIPE: (size, category) => `https://api.spoonacular.com/recipes/complexSearch?number=${size}&diet=${category}&addRecipeNutrition=true&apiKey=${key}`,
    CREATE_ACCOUNT: `https://project-recipe-backend-production.up.railway.app/api/v1/users/register`,
    RESEND_OTP: `https://project-recipe-backend-production.up.railway.app/api/v1/users/resend`,
    CONFIRM_OTP: `https://project-recipe-backend-production.up.railway.app/api/v1/users/confirm-otp`,
    SIGN_IN: `https://project-recipe-backend-production.up.railway.app/api/v1/users/login`,
    SIGN_OUT: `https://project-recipe-backend-production.up.railway.app/api/v1/users/logout`,
    NUTRITION_ANALYSIS: ` https://api.edamam.com/api/nutrition-details?app_id=5699d90a&app_key=38291f3c74888725fde1bb034c0c8195"`

}

export default Endpoints