import { useFetch } from "Hooks";
import { LOADER } from "Components";
import { RECIPE_CARD } from "Components";
import Endpoints from "Services";

const PescaterianSection = () => {
  const searchRecipe = `${Endpoints.SEARCH_RECIPE(8, "pescaterian")}`;
  const data = useFetch(
    searchRecipe,
    { loading: true, data: null },
    "pescaterianCategory",
    true
  );

  console.log("this is me", data)

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

export default PescaterianSection;
