import { LANDING_PAGE_COMPONENT, RECIPE_INFO_PAGE_COMPONENT, DASHBOARD } from "Pages";

let PageComponents = [
  { name: "LandingPage", path: "/", element: <LANDING_PAGE_COMPONENT /> },
  {
    name: "RandomRecipe",
    path: "/random-recipe",
    element: <RECIPE_INFO_PAGE_COMPONENT />,
  },
  { name: "Dashboard", path:"/dashboard/*", element: <DASHBOARD/>}
];

export default PageComponents;
