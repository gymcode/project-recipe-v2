import React from "react";
import "./main.css";
import { RECIPE_CARD } from "Components";

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
];

const DiscoveryDashboardComponent = () => {
  return (
    <main className="mx-5 md:mx-0 lg:mx-0 xl:mx-0 py-4 ">
      <div className="grid grid-cols-12 gap-7 min-h-[24vh] mt-4">
        <div className="card col-span-10 hidden xl:block rounded-lg" />
        <div className="col-span-2 w-[90vw] xl:w-full lg:w-full md:w-full bg-[#f8e6e6] rounded-lg flex flex-col p-5 justify-between">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F84605"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>
          <div className="tracking-widest text-xl md:text-base text-[#4A4A4A]">
            You have <span className="text-[#F84605]">no</span> new recipes in
            your bookmark
          </div>
          <div className="imprima-font text-sm underline text-[#F84605]">
            See Bookmarks
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="imprima-font text-lg">Categories</p>
        <div className="flex">
          <div className="rounded-lg h-24 w-52 bg-[#F84605] mt-2 mr-12 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-meat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path>
              <ellipse
                transform="rotate(45 8.025 16.475)"
                cx="8.025"
                cy="16.475"
                rx="7"
                ry="3"
              ></ellipse>
              <path d="M7.5 16l1 1"></path>
              <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>
            </svg>
            <p className="text-white imprima-font py-3">Omnivore Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-fish"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571"></path>
              <path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504"></path>
              <path d="M18 11v.01"></path>
              <path d="M11.5 10.5c-.667 1 -.667 2 0 3"></path>
            </svg>
            <p className="imprima-font py-3">Pescatarian Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-apple"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="14" r="7"></circle>
              <path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2"></path>
              <path d="M10 10.5c1.333 .667 2.667 .667 4 0"></path>
            </svg>
            <p className="imprima-font py-3">Fruitarian Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-meat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path>
              <ellipse
                transform="rotate(45 8.025 16.475)"
                cx="8.025"
                cy="16.475"
                rx="7"
                ry="3"
              ></ellipse>
              <path d="M7.5 16l1 1"></path>
              <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>
            </svg>
            <p className="imprima-font py-3">Paleo Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-carrot"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 .005 -6.344a4.483 4.483 0 0 0 -6.342 -.005c-2.86 2.861 -6.347 12.689 -6.347 12.689z"></path>
              <path d="M9 13l-1.5 -1.5"></path>
              <path d="M16 14l-2 -2"></path>
              <path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z"></path>
              <path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z"></path>
            </svg>
            <p className="imprima-font py-3">Vegetarian Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-leaf"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 21c.5 -4.5 2.5 -8 7 -10"></path>
              <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"></path>
            </svg>
            <p className="imprima-font py-3">Vegan Category</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <p className="imprima-font capitalize text-lg">
            Suggested recipes for you
          </p>
          <p className="imprima-font capitalize text-[#777777]">
            Because you selected the{" "}
            <span className="text-[#F84605]">Omnivore Category</span>...
          </p>
        </div>
        <div className="grid grid-cols-4 gap-12 mt-10">
          {recipeCategory.map((data) => (
            <RECIPE_CARD data={data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DiscoveryDashboardComponent;
