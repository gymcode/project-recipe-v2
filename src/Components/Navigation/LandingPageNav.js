import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

import Logo from "Assets/Icons/Logo.svg";
import { Link } from "react-scroll";

import {LandingPageNavLinks} from "Helpers/NavLinks"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <motion.div className="max-w-[95rem] px-2 sm:px-6 lg:px-20 xl:px-32 lg:py-5">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                  }}
                  className="flex-shrink-0 flex items-center"
                >
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </motion.div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 md:ml-48 lg:ml-72 mt-3">
                    {LandingPageNavLinks.map((item) => (
                      <Link to={item.href} smooth>
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            delay: item.delay,
                          }}
                        >
                          <a
                            key={item.name}
                            className={classNames(
                              item.current
                                ? "border-b text-black"
                                : "text-black hover:bg-gray-700 hover:text-white rounded-md",
                              "px-5 py-2 text-md font-medium imprima-font cursor-pointer"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.0,
                  }}
                  className="rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="green"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.1,
                  }}
                  className="pl-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={"red"}
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </motion.div>
              </div> */}
            </div>
          </motion.div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-5 space-y-1">
              {LandingPageNavLinks.map((item) => (
                <Link to={item.href} smooth>
                  <div
                    key={item.name}
                    className={classNames(
                      item.current
                        ? "border-b text-black"
                        : "text-black hover:bg-gray-700 hover:text-white rounded-md",
                      "block px-3 py-2 text-base font-medium imprima-font"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
