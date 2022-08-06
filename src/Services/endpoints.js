const key = process.env.REACT_APP_API_KEY
console.log(`key ${key}`)

const Endpoints = {
    RANDOM_RECIPES: (size) => `https://api.spoonacular.com/recipes/random?number=${size}&apiKey=${key}`
}

export default Endpoints