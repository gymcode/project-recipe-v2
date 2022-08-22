import {
  LANDING_PAGE_COMPONENT,
  RECIPE_INFO_PAGE_COMPONENT,
  DASHBOARD,
  ACCOUNT_COMPONENT,
  MY_RECIPE_COMPONENT,
  MAIN_DASHBOARD_COMPONENT,
  RANDOM_RECIPE_COMPONENT, 
  DISCOVER_RECIPE_COMPONENT, 
  NOTFOUND
} from "Pages";

let PageComponents = [
  { name: "LandingPage", path: "/", element: <LANDING_PAGE_COMPONENT /> },
  {
    name: "RandomRecipe",
    path: "/random-recipe",
    element: <RECIPE_INFO_PAGE_COMPONENT />,
  },
  { name: "Dashboard", path: "/dashboard/*", element: <DASHBOARD /> },
  { name: "Not Found", path: "*", element: <NOTFOUND/>}
];

let DashboardNavComponent = [
   { name: "MainDashboard", path: "/", element: <MAIN_DASHBOARD_COMPONENT/>},
   { name: "DiscoverRecipe", path: "/discover", element: <DISCOVER_RECIPE_COMPONENT/> },
   { name: "RandomRecipe", path: "random", element: <RANDOM_RECIPE_COMPONENT/>},
   { name: "MyRecipe", path: "my-recipe", element: <MY_RECIPE_COMPONENT/>},
   { name: "Account", path: "account", element: <ACCOUNT_COMPONENT/>}

];

export {PageComponents, DashboardNavComponent};
