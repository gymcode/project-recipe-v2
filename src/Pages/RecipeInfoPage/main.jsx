import { useState } from "react";
import { useFetch } from "Hooks";
import { RECIPE_INFO_COMPONENT } from "Components";
import Endpoints from "Services/endpoints";

const some = [{ name: "Kenneth" }, { name: "Kelvin" }];
const hey = [
  {
    content:
      "this is me and blah vlah albh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fugit architecto nequeexplicabo nihil molestias dolore dolorem sed temporibus!Provident consectetur voluptatem, quidem odio fugitlaboriosam suscipit odit sit qui? Add garlic and basalmic.Allow to cook for about another 30 seconds or so,",
  },
  { content: "this is me and others" },
  { content: "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed." },
  { content: "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed." },
];

const text = "Triple Citrus Cake might be just the dessert you are searching for. This recipe serves 10 and costs 44 cents per serving. One serving contains <b>257 calories</b>, <b>3g of protein</b>, and <b>12g of fat</b>. This recipe is liked by 6 foodies and cooks. Head to the store and pick up lemon zest, flour, sugar, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>dairy free and vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 27%</b>. This score is not so spectacular. Try <a href=\"https://spoonacular.com/recipes/triple-citrus-bars-587400\">Triple Citrus Bars</a>, <a href=\"https://spoonacular.com/recipes/triple-citrus-cheesecake-276210\">Triple-Citrus Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/triple-citrus-cupcakes-63544\">Triple-citrus Cupcakes</a> for similar recipes."



const RecipeInformationPage = () => {
  const random_recipe_url = Endpoints.RANDOM_RECIPES(1)
  const data = useFetch(random_recipe_url, {loading: true, data:null}, "random", true)
  console.log(data)

  return (
    <>  
      <RECIPE_INFO_COMPONENT
        recipe_title={"Sun-dried spicy tomoto chicken"}
        recipe_duration={"30"}
        recipe_likes={"43453"}
        recipe_healthscore={"78"}
        recipe_image={"https://ik.imagekit.io/yz8iaxzer/images/pexels-pixabay-262978_AM-ChpuM4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658353704767"}
        recipe_summary={{__html: text}}
        recipe_servings={"8"}
        ingredients={some}
        instructions={hey}
      />
    </>
  );
};

export default RecipeInformationPage;
