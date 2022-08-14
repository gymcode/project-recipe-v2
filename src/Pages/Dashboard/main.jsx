import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuAlt2Icon } from "@heroicons/react/outline";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import { DASHBOARD_SIDE_NAV } from "Components";

//lazy components
const DiscoveryDashboardComponent = React.lazy(() =>
  import("./Discover Recipe")
);

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow xl:hidden overflow-hidden">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="">
            <div className="p-3 flex justify-between h-36 bg-white fixed w-[100vw] px-12 pt-9 z-10 dash_header">
              <div className="w-[79vw] flex justify-between">
                <div>
                  <p className="imprima-font text-gray-500">Hello there,</p>
                  <div className="abel-font text-5xl mt-4">{title}</div>
                </div>
                <div className="w-[25vw] h-[86%] items-end flex">
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
            <div className="mx-auto sm:px-6 md:px-12 relative top-36">
              <div className="py-4">
                <React.Suspense fallback={"hello"}>
                  <Routes>
                    <Route
                      path="/discover"
                      element={<DiscoveryDashboardComponent />}
                    />
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
