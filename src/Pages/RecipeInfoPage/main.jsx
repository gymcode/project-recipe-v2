import { useState } from "react";
import { useFetch } from "Hooks";
import { RECIPE_INFO_COMPONENT } from "Components";
import Endpoints from "Services/endpoints";

const RecipeInformationPage = () => {
  const random_recipe_url = Endpoints.RANDOM_RECIPES(1);
  const data = useFetch(
    random_recipe_url,
    { loading: true, data: null },
    "random",
    true
  );

  return (
    <>
      {data.loading ? (
        <>loading</>
      ) : (
        <>
          <RECIPE_INFO_COMPONENT
            recipe_title={data.data.recipes[0].title}
            recipe_duration={data.data.recipes[0].readyInMinutes}
            recipe_likes={data.data.recipes[0].aggregateLikes}
            recipe_healthscore={data.data.recipes[0].healthScore}
            recipe_image={data.data.recipes[0].image}
            recipe_summary={{ __html: data.data.recipes[0].summary }}
            recipe_servings={data.data.recipes[0].servings}
            ingredients={data.data.recipes[0].extendedIngredients}
            instructions={data.data.recipes[0].analyzedInstructions[0].steps}
          />
        </>
      )}
    </>
  );
};

export default RecipeInformationPage;
