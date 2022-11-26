import { useFetch } from "Hooks";
import { useParams } from "react-router-dom"; 
import { RECIPE_INFO_COMPONENT, LOADER } from "Components";
import Endpoints from "Services/endpoints";

const RecipeInformationPage = () => {
  const param = useParams()
  const recipe_info = Endpoints.RECIPE_INFO(param.id);
  const data = useFetch(
    recipe_info,
    { loading: true, data: null },
    "",
    false
  );

  return (
    <>
      {data.loading ? (
        <>
          <LOADER />
        </>
      ) : (
        <>
          <RECIPE_INFO_COMPONENT
            recipe_title={data.data.title}
            recipe_duration={data.data.readyInMinutes}
            recipe_likes={data.data.aggregateLikes}
            recipe_healthscore={data.data.healthScore}
            recipe_image={data.data.image}
            recipe_summary={{ __html: data.data.summary }}
            recipe_servings={data.data.servings}
            ingredients={data.data.extendedIngredients}
            instructions={data.data.analyzedInstructions[0].steps}
            nutrition={data.data.nutrition}
            recipe_cheap_status={data.data.cheap}
            recipe_vegan_status={data.data.vegan}
            recipe_vegetarian_status={data.data.vegetarian}
          />
        </>
      )}
    </>
  );
};

export default RecipeInformationPage;
