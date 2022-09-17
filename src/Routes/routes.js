import {
  LANDING_PAGE_COMPONENT,
  RECIPE_INFO_PAGE_COMPONENT,
  DASHBOARD,
  NOTFOUND,
  SINGLE_RECIPE_INFO
} from "Pages";

let PageComponents = [
  { name: "LandingPage", path: "/", element: <LANDING_PAGE_COMPONENT /> },
  {
    name: "RandomRecipe",
    path: "/random-recipe",
    element: <RECIPE_INFO_PAGE_COMPONENT />,
  },
  { name: "Dashboard", path: "/dashboard/*", element: <DASHBOARD /> },
  { name: "RecipeInfo", path: "/recipe/:id", element: <SINGLE_RECIPE_INFO/> },
  { name: "Not Found", path: "*", element: <NOTFOUND/>}
];

export {PageComponents};
