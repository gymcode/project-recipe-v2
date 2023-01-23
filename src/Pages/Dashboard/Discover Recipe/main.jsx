import React, { Suspense, useState, useEffect } from "react";
import "./main.css";
import { Routes, Route, NavLink } from "react-router-dom";

import { CategoryNavLinks } from "Helpers";
import { LOADER } from "Components";

const OmnivoreSection = React.lazy(() => import("./Omnivore"));
const PaleoSection = React.lazy(() => import("./Paleo"));
const PescaterianSection = React.lazy(() => import("./Pescaterian"));
const VegetarianSection = React.lazy(() => import("./Vegetarian"));
const VeganSection = React.lazy(() => import("./Vegetarian"));
const FruitarianCategory = React.lazy(() => import("./Fruitarian"));

const DiscoveryDashboardComponent = ({ showSideNav, setTitle }) => {
  const [categoryName, setCategoryName] = useState("Omnivore Category");
  // scrolling section

  return (
    <main className="">
      {showSideNav ? (
        <>
          {/* header  */}
          <div className="hidden lg:flex justify-between py-3 items-center sticky top-36 z-10 bg-gray-100 h-20 transition transform ease-in-out duration-700">
            {/* header  */}
            <div className="flex items-center">
              {CategoryNavLinks.map((navItem) => (
                <>
                  <NavLink
                    to={navItem.href}
                    onClick={() => setCategoryName(navItem.name)}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b border-red-700 mr-6 text-red-700"
                        : "hover:border-b hover:border-red-700 mr-6 text-gray-700"
                    }
                  >
                    <div className="text-sm p-2 md:px-0 lg:px-10 cursor-pointer flex justify-center items-center">
                      <div className="mr-2">{navItem.svg}</div>
                      <p className="imprima-font py-3">{navItem.name}</p>
                    </div>
                  </NavLink>
                </>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden justify-center py-3 items-center sticky top-32 md:top-36 z-10 bg-gray-100 h-20 transition transform ease-in-out duration-700">
            {/* header  */}
            <div className="flex items-center">
              {CategoryNavLinks.map((navItem) => (
                <>
                  <NavLink
                    to={navItem.href}
                    onClick={() => setCategoryName(navItem.name)}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b border-red-700 pb-1 text-red-700 px-3"
                        : "hover:border-b hover:border-red-700 pb-1 px-3 text-gray-700"
                    }
                  >
                    <div className="text-sm cursor-pointer flex justify-center items-center">
                      <div className="mr-2">{navItem.svg}</div>
                    </div>
                  </NavLink>
                </>
              ))}
            </div>
          </div>
        </>
      ) : null}
      <div className="py-4">
        <div className="grid grid-cols-12 gap-7 min-h-[24vh] mt-4">
          <div className="card col-span-10 hidden lg:block xl:block rounded-lg" />
          <div className="col-span-2 w-[88vw] xl:w-full lg:w-full md:w-[59vw] bg-[#f8e6e6] rounded-lg flex flex-col p-5 justify-between">
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
            <NavLink
              onClick={() => setTitle("Bookmarks")}
              to={"/dashboard/bookmarks"}
            >
              <div className="imprima-font text-sm underline text-[#F84605]">
                See Bookmarks
              </div>
            </NavLink>
          </div>
        </div>
        <div className="mt-8">
          <p className="imprima-font text-lg">Categories</p>
          {/* laptops screen only  */}
          <div className="lg:flex md:flex hidden">
            {CategoryNavLinks.map((navItem) => (
              <>
                <NavLink
                  to={navItem.href}
                  onClick={() => setCategoryName(navItem.name)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white rounded-lg h-24 lg:h-24 md:h-16 w-52 border border-gray-200 mt-2 md:mr-1 lg:mr-4 xl:mr-12 p-4 bg-[#F84605]"
                      : "text-[#777777] hover:text-white rounded-lg md:h-16 h-24 lg:h-24 w-52 border border-gray-200 mt-2 md:mr-1 lg:mr-4 xl:mr-12 p-4 hover:border-none hover:bg-[#F84605] cursor-pointer hover:text-white;"
                  }
                >
                  <div className="">
                    {navItem.svg}
                    <p className="imprima-font py-3 md:hidden lg:block">
                      {navItem.name}
                    </p>
                  </div>
                </NavLink>
              </>
            ))}
          </div>
          <div className="lg:hidden md:hidden flex justify-center">
            {CategoryNavLinks.map((navItem) => (
              <>
                <NavLink
                  to={navItem.href}
                  onClick={() => setCategoryName(navItem.name)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white rounded-lg h-14 border border-gray-200 mr-2 mt-2 p-3 bg-[#F84605]"
                      : "text-[#777777] hover:text-white rounded-lg h-14 mr-2 border border-gray-200 mt-2 p-3 hover:border-none hover:bg-[#F84605] cursor-pointer hover:text-white;"
                  }
                >
                  <div className="">{navItem.svg}</div>
                </NavLink>
              </>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div>
            <p className="imprima-font capitalize text-lg">
              Suggested recipes for you
            </p>
            <p className="imprima-font capitalize text-[#777777]">
              Because you selected the{" "}
              <span className="text-[#F84605]">{categoryName}</span>...
            </p>
          </div>
          <div className="grid grid-cols-1 px-5 xl:px-0 lg:px-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-12 mt-10">
            <Suspense fallback={<LOADER />}>
              <Routes>
                <Route path="/omnivore" element={<OmnivoreSection />} />
                <Route path="/fruitarian" element={<FruitarianCategory />} />
                <Route path="/paleo" element={<PaleoSection />} />
                <Route path="/pescaterian" element={<PescaterianSection />} />
                <Route path="/vegan" element={<VeganSection />} />
                <Route path="/vegetarian" element={<VegetarianSection />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DiscoveryDashboardComponent;
