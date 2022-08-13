import React, { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Logo from "Assets/Icons/Logo.svg";
import { BellIcon, MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import "./main.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

//lazy components
const DiscoveryDashboardComponent = React.lazy(() =>
  import("./Discover Recipe")
);

const navigation = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard/pescaterian",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    current: true,
  },
  {
    id: 2,
    name: "Discover Recipes",
    href: "/dashboard/discover",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    current: false,
  },
  {
    id: 3,
    name: "My Recipes",
    href: "/dashboard/my-recipes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    current: false,
  },
  {
    id: 4,
    name: "Visited Users",
    href: "/dashboard/users",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-users"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
      </svg>
    ),
    current: false,
  },
];

const userNav = [
  {
    name: "Account",
    href: "/dashboard/user-account",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      </svg>
    ),
    current: false,
  },
  {
    name: "Bookmarks",
    href: "/dashboard/bookmarks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    ),
    current: false,
  },
];

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
  const [active, setActive] = useState({
    id: 1,
    name: "Dashboard",
  });

  console.log(active);

  function toogleNavLinks(item) {
    setActive({ id: item.id, name: item.name });
  }
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 ">
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
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
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-800 text-white"
                          : "text-indigo-100 hover:bg-indigo-600",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <div className="mr-3">{item.icon}</div>
                      {item.name}
                    </a>
                  ))}
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
              <div className="mx-9 h-10 w-3/4 mt-6 bg-[#F84605] text-white flex justify-center items-center rounded shadow-lg kreon-font">
                Let's set you up
              </div>
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-7 space-y-1">
                <div className="imprima-font">
                  <h2 className="imprima-font capitalize text-sm text-gray-500 pb-2 px-3 mt-4 font-sans font-extralight">
                    Menu
                  </h2>
                  {navigation.map((item) => {
                    return (
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
                    );
                  })}
                </div>
                <div className="imprima-font">
                  <h2 className="imprima-font capitalize text-sm text-gray-500 pb-2 px-3 mt-8 font-sans font-extralight">
                    Your Account
                  </h2>
                  {userNav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " ring-0  text-gray-500"
                          : "text-gray-500 hover:text-[#F84605]",
                        "group flex items-center px-4 py-2 h-12 my-1 text-sm font-medium rounded-md"
                      )}
                    >
                      <div className="mr-3">{item.icon}</div>
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
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
          <div></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
