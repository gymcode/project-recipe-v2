import React, { useState } from "react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import { DASHBOARD_SIDE_NAV, LOADER, MODAL } from "Components";
import { useModal } from "Hooks";
import { motion } from "framer-motion";

//lazy components
const MainDashboardComponent = React.lazy(() => import("./MainDashboard"));
const DiscoveryDashboardComponent = React.lazy(() =>
  import("./Discover Recipe")
);
const RandomRecipeComponent = React.lazy(() => import("./Random Recipe"));
const MyRecipeComponent = React.lazy(() => import("./My Recipe"));
const AccountComponent = React.lazy(() => import("./Account"));

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");
  const { toggle, visible } = useModal();

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-gray-100 ">
        <DASHBOARD_SIDE_NAV
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setTitle={setTitle}
          toggle={toggle}
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
              <div className="mx-auto px-5 md:px:12 lg:px-12 xl:px-12 relative">
                <div className="">
                  <React.Suspense fallback={<LOADER />}>
                    <Routes>
                      <Route path="/" element={<MainDashboardComponent />} />
                      <Route
                        path="/discover"
                        element={<DiscoveryDashboardComponent />}
                      />
                      <Route
                        path="/random"
                        element={<RandomRecipeComponent />}
                      />
                      <Route path="/account" element={<AccountComponent />} />
                      <Route
                        path="/my-recipe"
                        element={<MyRecipeComponent />}
                      />
                    </Routes>
                  </React.Suspense>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <MODAL
        visible={visible}
        toggle={toggle}
        header={"Ingredients"}
        height={"60vh"}
        width={"60vw"}
      >
        <div className="grid lg:grid-cols-2 h-full">
          <div
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/pexels-pixabay-461198_AjY66Nj3H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661024109016")`,
            }}
            className="bg-cover rounded bg-center h-full"
          />
          <div className="p-5 px-10">
            <div className="flex justify-end cursor-pointer" onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="my-10">
              <form action="" method="post">
                <>
                  <h1 className="text-3xl abel-font">Sign Up</h1>
                  <p className="imprima-font text-[#808080] py-1">
                    Create an account to explore more features
                  </p>
                  <div className="py-7">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="imprima-font text-[#808080]"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name=""
                          className="outline-0 bg-[#f8460517] h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                          placeholder="Kenneth"
                          id=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="firstName"
                          className="imprima-font text-[#808080]"
                        >
                          Other names
                        </label>
                        <input
                          type="text"
                          name=""
                          className="outline-0 bg-[#f8460517] h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                          placeholder="Abrahams Lartey"
                          id=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-5/6 py-3">
                      <label
                        htmlFor="msisdn"
                        className="imprima-font text-[#808080]"
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        name=""
                        className="outline-0 bg-[#f8460517] h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                        placeholder="+233 26 821 334"
                        id=""
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="password"
                          className="imprima-font text-[#808080]"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name=""
                          className="outline-0 bg-[#f8460517] h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                          placeholder="xxxxxxxx"
                          id=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="imprima-font text-[#808080]"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name=""
                          className="outline-0 bg-[#f8460517] h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                          placeholder="xxxxxxxx"
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{
                        scale: 0.9,
                        borderRadius: "2%",
                      }}
                      type="submit"
                      className="h-10 w-3/4 mt-3 bg-[#F84605] text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                    >
                      Sign up
                    </motion.button>
                  </div>
                </>
              </form>
            </div>
          </div>
        </div>
      </MODAL>
    </>
  );
};

export default Dashboard;
