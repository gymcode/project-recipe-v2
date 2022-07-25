import { LANDING_PAGE_COMPONENT, RECIPE_INFO_PAGE_COMPONENT } from "Pages";

let PageComponents = [
  { name: "LandingPage", path: "/", element: <LANDING_PAGE_COMPONENT /> },
  {
    name: "RandomRecipe",
    path: "/random-recipe",
    element: <RECIPE_INFO_PAGE_COMPONENT />,
  },
];

export default PageComponents;
