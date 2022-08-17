import React, { useState } from "react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import { DASHBOARD_SIDE_NAV, LOADER } from "Components";

//lazy components
const DiscoveryDashboardComponent = React.lazy(() =>
  import("./Discover Recipe")
);
const RandomRecipeComponent = React.lazy(() => import("./Random Recipe"));
const MyRecipeComponent = React.lazy(() => import("./My Recipe"));
const AccountComponent = React.lazy(() => import("./Account"));

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 ">
      <DASHBOARD_SIDE_NAV
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setTitle={setTitle}
      />
      <div className="flex flex-col w-0 flex-1">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden lg:hidden xl:hidden overflow-hidden">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="w-full xl:w-[25vw] lg:w-[25vw] h-[86%] items-end flex">
              <div className="flex w-full border items-center px-3 rounded-md">
                <div className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#777777"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full h-8 outline-0 text-gray-400 bg-transparent"
                  placeholder="search for recipes..."
                />
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="">
            <div className="p-3 flex justify-between h-32 md:h-36 xl:h-36 lg:h-36 bg-white sticky top-0 px-5 md:px:12 lg:px-12 xl:px-12 pt-6 md:pt-9 lg:pt-9 xl:pt-9 z-10 dash_header">
              <div className="w-[79vw] flex justify-between">
                <div>
                  <p className="imprima-font text-gray-500">Hello there,</p>
                  <div className="abel-font text-4xl xl:text-5xl lg:text-5xl mt-4">
                    {title}
                  </div>
                </div>
                <div className="w-[25vw] h-[86%] items-end xl:flex lg:flex md:flex hidden">
                  <div className="flex w-full border items-center px-3 rounded-md">
                    <div className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#777777"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-full h-8 outline-0 text-gray-400 bg-transparent"
                      placeholder="search for recipes..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto sm:px-6 md:px-12 relative">
              <div className="py-4">
                <React.Suspense fallback={<LOADER />}>
                  <Routes>
                    <Route
                      path="/discover"
                      element={<DiscoveryDashboardComponent />}
                    />
                    <Route path="/random" element={<RandomRecipeComponent />} />
                    <Route path="/account" element={<AccountComponent />} />
                    <Route path="/my-recipe" element={<MyRecipeComponent />} />
                  </Routes>
                </React.Suspense>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
