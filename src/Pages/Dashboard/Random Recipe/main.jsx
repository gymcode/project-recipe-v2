import { useState } from "react";
import { RECIPE_CARD } from "Components";
import InfiniteScroll from 'react-infinite-scroll-component';

const recipeCategory = [
  {
    id: 1,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 2,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod",
  },
  {
    id: 3,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 4,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 1,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 2,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod",
  },
  {
    id: 3,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 4,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  }
];

const RandomRecipeComponent = () => {
  recipeCategory.length = 8
  const [more, hasMore] = useState(true)
  const [items, setItems] = useState(recipeCategory)

  // console.log(recipeCategory.concat(...recipeCategory))

  function dataFetchFromArray() {
    if (items.length >= 48) {
      hasMore(false)
      return
    }
    setTimeout(() => {
      
    }, 3000)
  }

  return (
    <main className="px-1">
      {/* header  */}
      <div className="flex px-5 md:px-0 xl:px-0 lg:px-0 justify-between py-3 border-b items-center ">
        <div className="text-sm text-gray-400">random recipes / </div>
        <div>
          <div className="h-8 w-44 bg-[#F84605] kreon-font text-white text-base flex justify-center items-center cursor-pointer rounded">
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
          </div>
        </div>
      </div>
      {/* body  */}
      <InfiniteScroll
        dataLength={items.length}
        next={dataFetchFromArray}
        hasMore={more}
        loader={"loading...."}
        endMessage={"you have reached the end"}>
        <div className="grid grid-cols-1 px-5 xl:px-0 lg:px-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-12 mt-10">
          {items.map((data) => (
            <RECIPE_CARD data={data} />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
};

export default RandomRecipeComponent;
