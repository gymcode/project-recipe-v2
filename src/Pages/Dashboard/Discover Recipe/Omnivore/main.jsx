import { useFetch } from "Hooks";
import { LOADER } from "Components";
import { RECIPE_CARD } from "Components";
import Endpoints from "Services";
import { motion } from "framer-motion";

const OmnivoreSection = () => {
  const searchRecipe = `${Endpoints.SEARCH_RECIPE(8, "omnivore")}`;
  const data = useFetch(
    searchRecipe,
    { loading: true, data: null },
    "omnivoreCategory",
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
          {data.data.results.map((data, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 150,
                stiffness: index + 1 * 40,
                delay: index * 0.2,
              }}
            >
              <RECIPE_CARD data={data} />
            </motion.div>
          ))}
        </>
      )}
    </>
  );
};

export default OmnivoreSection;
