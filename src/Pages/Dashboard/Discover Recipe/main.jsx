import React, { Suspense, useState, useEffect } from "react";
import "./main.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { CategoryNavLinks } from "Helpers";
import { LOADER } from "Components";

const OmnivoreSection = React.lazy(() => import("./Omnivore"));

const DiscoveryDashboardComponent = ({ showSideNav, setTitle }) => {
  const [categoryName, setCategoryName] = useState("Omnivore Category");
  // scrolling section 

  return (
    <main className="mx-5 md:mx-0 lg:mx-0 xl:mx-0 ">
      {showSideNav ? (
        <>
          {/* header  */}
          <div className="flex justify-between py-3 items-center sticky top-36 z-10 bg-gray-100 h-20 transition transform ease-in-out duration-700">
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
                    <div className="text-sm p-2 px-10 cursor-pointer flex justify-center items-center">
                      <div className="mr-2">{navItem.svg}</div>
                      <p className="imprima-font py-3 ">{navItem.name}</p>
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
            <NavLink 
              onClick={() => setTitle("Bookmarks")}
              to={"/dashboard/bookmarks"}>
              <div className="imprima-font text-sm underline text-[#F84605]">
                See Bookmarks
              </div>
            </NavLink>
          </div>
        </div>
        <div className="mt-8">
          <p className="imprima-font text-lg">Categories</p>
          <div className="flex">
            {CategoryNavLinks.map((navItem) => (
              <>
                <NavLink
                  to={navItem.href}
                  onClick={() => setCategoryName(navItem.name)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white rounded-lg h-24 w-52 border border-gray-200 mt-2 mr-12 p-4 bg-[#F84605]"
                      : "text-[#777777] hover:text-white rounded-lg h-24 w-52 border border-gray-200 mt-2 mr-12 p-4 hover:border-none hover:bg-[#F84605] cursor-pointer hover:text-white;"
                  }
                >
                  <div className="">
                    {navItem.svg}
                    <p className="imprima-font py-3">{navItem.name}</p>
                  </div>
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
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DiscoveryDashboardComponent;
