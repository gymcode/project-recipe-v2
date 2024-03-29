import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "Assets/Icons/Logo.svg";
import { XIcon } from "@heroicons/react/outline";
import "../main.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// internal imports
import { DashboardAccountNavLinks, DashboardSideNavLinks } from "Helpers";
import Endpoints from "Services";
import { AuthContext } from "Context";
import { isEmpty } from "Helpers";
import Swal from "sweetalert2";
import { ERROR_TOAST } from "Components";

const DashboardSideNav = ({ setSidebarOpen, sidebarOpen, setTitle }) => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Awww, leaving soo soon?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unfortunately!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("run me ");
        try {
          const requestOptions = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
          };

          const apiResponse = await fetch(Endpoints.SIGN_OUT, requestOptions);

          const data = await apiResponse.json();
          console.log({
            message: "making a call to the go backend..",
            body: {
              response: data,
            },
          });

          if (data.code !== "00") throw new Error(data.error.errMsg);

          if (data.code === "00") {
            setAuth({});
            // window.location.reload(true)
          }
        } catch (error) {
          console.log(error.message);
          ERROR_TOAST(error.message);
        }
      }
    });
  };
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-300 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="h-6 w-6 text-[#F84605]"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="border-b pb-8">
                <Link to={"/"}>
                  <div className="flex items-center flex-shrink-0 px-4 pt-6">
                    <img
                      className="h-[2.8rem] pl-4 w-auto"
                      src={Logo}
                      alt="Workflow"
                    />
                  </div>
                </Link>
                <div className="px-9 imprima-font mt-2">
                  <p className="tracking-wider text-gray-500">
                    Healthy meal, healthy life...
                  </p>
                </div>

                {isEmpty(auth) ? (
                  <Link to={"/auth/login"}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{
                        scale: 0.9,
                        borderRadius: "2%",
                      }}
                      onClick={() => {
                        setSidebarOpen(false);
                        setTitle("Authentication");
                      }}
                      className="mx-9 h-10 w-3/4 mt-6 bg-[#F84605] font-semibold text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                    >
                      Let's set you up
                    </motion.div>
                  </Link>
                ) : (
                  <div
                    onClick={() => handleLogout()}
                    className="mx-9 h-10 w-3/4 mt-6 font-semibold text-gray-600 flex border-l-2 border-[#F84605] justify-center items-center rounded shadow-md kreon-font cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>

                    <div className="ml-5">Logout</div>
                  </div>
                )}
              </div>
              <div className="mt-5 flex-1 flex flex-col">
                <nav className="flex-1 px-7 space-y-1">
                  <div className="imprima-font">
                    <h2 className="imprima-font capitalize text-sm text-gray-500 pb-2 px-3 mt-4 font-sans font-extralight">
                      Menu
                    </h2>

                    {DashboardSideNavLinks.map((item) => {
                      return (
                        <NavLink
                          to={item.href}
                          key={item.name}
                          onClick={() => {
                            setTitle(item.name);
                            setSidebarOpen(false);
                          }}
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                              : "text-gray-500 hover:text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                          }
                        >
                          <div className="mr-3">{item.icon}</div>
                          {item.name}
                        </NavLink>
                      );
                    })}
                  </div>
                  <div className="imprima-font">
                    <h2 className="imprima-font capitalize text-sm text-gray-500 pb-2 px-3 mt-8 font-sans font-extralight">
                      Your Account
                    </h2>
                    {DashboardAccountNavLinks.map((item) => (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        onClick={() => setTitle(item.name)}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                            : "text-gray-500 hover:text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                        }
                      >
                        <div className="mr-3">{item.icon}</div>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden side-nav-container md:flex md:flex-shrink-0 shadow-lg">
        <div className="flex flex-col min-w-[16vw] ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-1 pb-4 overflow-y-auto">
            <div className="border-b pb-8">
              <Link to={"/"}>
                <div className="flex items-center flex-shrink-0 px-4 pt-6">
                  <img
                    className="h-[2.8rem] pl-4 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
              </Link>
              <div className="px-9 imprima-font mt-2">
                <p className="tracking-wider text-gray-500">
                  Healthy meal, healthy life...
                </p>
              </div>

              {isEmpty(auth) ? (
                <Link to={"/auth/login"}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 1.0,
                      borderRadius: "2%",
                    }}
                    onClick={() => {
                      setSidebarOpen(false);
                      setTitle("Authentication");
                    }}
                    className="mx-9 h-10 w-3/4 mt-6 bg-[#F84605] font-semibold text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                  >
                    Let's set you up
                  </motion.div>
                </Link>
              ) : (
                <div
                  onClick={() => handleLogout()}
                  className="mx-9 h-10 w-3/4 mt-6 font-semibold text-gray-600 flex border-l-2 border-[#F84605] justify-center items-center rounded hover:shadow-[#ffdfd3] shadow-md kreon-font cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>

                  <div className="ml-5">Logout</div>
                </div>
              )}
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-7 space-y-1">
                <div className="imprima-font">
                  <h2 className="imprima-font capitalize text-sm text-gray-500 pb-2 px-3 mt-4 font-sans font-extralight">
                    Menu
                  </h2>
                  {DashboardSideNavLinks.map((item) => {
                    return (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        onClick={() => {
                          localStorage.setItem("dash_title", item.name);
                          setTitle(item.name);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                            : "text-gray-500 hover:text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                        }
                      >
                        <div className="mr-3">{item.icon}</div>
                        {item.name}
                      </NavLink>
                    );
                  })}
                </div>
                <div className="imprima-font">
                  <h2 className="imprima-font capitalize text-sm text-gray-500 pb-2 px-3 mt-8 font-sans font-extralight">
                    Your Account
                  </h2>
                  {DashboardAccountNavLinks.map((item) => (
                    <NavLink
                      to={item.href}
                      key={item.name}
                      onClick={() => setTitle(item.name)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                          : "text-gray-500 hover:text-[#F84605] group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                      }
                    >
                      <div className="mr-3">{item.icon}</div>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSideNav;
