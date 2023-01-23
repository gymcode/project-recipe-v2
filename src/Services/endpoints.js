const key = process.env.REACT_APP_API_KEY
const edamamAppId = process.env.REACT_APP_EDAMAM_APP_ID
const edamamApiKey = process.env.REACT_APP_EDAMAM_API_KEY

const Endpoints = {
    RANDOM_RECIPES: (size) => `https://api.spoonacular.com/recipes/random?number=${size}&apiKey=${key}`,
    RECIPE_INFO: (id) => `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`,
    SEARCH_RECIPE: (size, category) => `https://api.spoonacular.com/recipes/complexSearch?number=${size}&diet=${category}&addRecipeNutrition=true&apiKey=${key}`,
    CREATE_ACCOUNT: `https://recipe-backend.onrender.com/api/v1/users/register`,
    RESEND_OTP: `https://recipe-backend.onrender.com/api/v1/users/resend`,
    CONFIRM_OTP: `https://recipe-backend.onrender.com/api/v1/users/confirm-otp`,
    SIGN_IN: `https://recipe-backend.onrender.com/api/v1/users/login`,
    SIGN_OUT: `https://recipe-backend.onrender.com/api/v1/users/logout`,
    NUTRITION_ANALYSIS: `https://api.edamam.com/api/nutrition-details?app_id=${edamamAppId}&app_key=${edamamApiKey}`

}

export default Endpoints