import { useFetch } from "Hooks";
import { LOADER } from "Components";
import { RECIPE_CARD } from "Components";
import Endpoints from "Services";

const VeganSection = () => {
  const searchRecipe = `${Endpoints.SEARCH_RECIPE(8, "vegan")}`;
  const data = useFetch(
    searchRecipe,
    { loading: true, data: null },
    "veganCategory",
    true
  );

  return (
    <>
      {data.loading ? (
        <>
          <LOADER />
        </>
      ) : (
        <>
          {data.data.results.map((data) => (
            <RECIPE_CARD data={data} />
          ))}
        </>
      )}
    </>
  );
};

export default VeganSection;
