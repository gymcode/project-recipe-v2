import { useState } from "react";
import { RECIPE_CARD } from "Components";
import { motion } from "framer-motion";
import Endpoints from "Services/endpoints";
import { useFetch } from "Hooks";
import { LOADER } from "Components";

const RandomRecipeComponent = () => {
  const random_recipe_url = Endpoints.RANDOM_RECIPES(10);
  const data = useFetch(
    random_recipe_url,
    { loading: true, data: null },
    "randomRecipes",
    true
  );

  console.log(data);

  return (
    <main className="px-1 pb-10">
      {/* header  */}
      <div className="flex px-5 md:px-0 xl:px-0 lg:px-0 justify-between py-3 border-b items-center ">
        <div className="text-sm text-gray-400">random recipes / </div>
        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.9,
              borderRadius: "2%",
            }}
            className="h-8 w-44 bg-[#F84605] kreon-font text-white text-base flex justify-center items-center cursor-pointer rounded"
          >
            <div className="pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrows-shuffle"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 4l3 3l-3 3"></path>
                <path d="M18 20l3 -3l-3 -3"></path>
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"></path>
                <path d="M21 7h-5a4.978 4.978 0 0 0 -2.998 .998m-4.002 8.003a4.984 4.984 0 0 1 -3 .999h-3"></path>
              </svg>
            </div>
            <p>Randomize</p>
          </motion.div>
        </div>
      </div>
      {/* body  */}
      {data.loading ? (
        <>
          <LOADER />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 px-5 xl:px-0 lg:px-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-12 mt-10">
            {data.data.recipes.map((data, index) => (
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
          </div>
        </>
      )}
    </main>
  );
};

export default RandomRecipeComponent;
