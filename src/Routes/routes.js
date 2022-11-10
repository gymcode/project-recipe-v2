import {
  LANDING_PAGE_COMPONENT,
  RECIPE_INFO_PAGE_COMPONENT,
  DASHBOARD,
  NOTFOUND,
  SINGLE_RECIPE_INFO
} from "Pages";

import {LOGIN_PAGE, REGISTER_PAGE, CONFIRM_PAGE, RESET_PAGE} from "Pages/Auth"

let PageComponents = [
  { name: "LandingPage", path: "/", element: <LANDING_PAGE_COMPONENT /> },
  {
    name: "RandomRecipe",
    path: "/random-recipe",
    element: <RECIPE_INFO_PAGE_COMPONENT />,
  },
  { name: "Dashboard", path: "/dashboard/*", element: <DASHBOARD /> },
  { name: "RecipeInfo", path: "/recipe/:id", element: <SINGLE_RECIPE_INFO/> },
  { name: "Not Found", path: "*", element: <NOTFOUND/>},
  { name: "LoginPage", path: "/auth/login", element: <LOGIN_PAGE/>},
  { name: "RegisterPage", path: "/auth/register/*", element: <REGISTER_PAGE/> },,
  { name: "ForgotPasswordPage", path: "/auth/reset", element: <RESET_PAGE/> }
];

export {PageComponents};
