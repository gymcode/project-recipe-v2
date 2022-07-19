import React from "react";
import { NAVIGATION_BAR } from "Components";
import "./main.css";
import { motion } from "framer-motion";

// other components imports
const About = React.lazy(() => import("./About"));
const Favorite = React.lazy(()=> import("./Favorite"))

const LandingPageComponent = () => {
  return (
    <>
      <div className="landing_page_body">
        <header>
          <NAVIGATION_BAR />
        </header>
        <main className="px-2 sm:px-6 lg:px-32">
          <div className="mt-10 lg:mt-20">
            <motion.h1
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 130, duration: 10 }}
              className="md:text-[4rem] lg:text-[5.7rem] text-[3rem] abel-font capitalize text-center md:text-left md:leading-[6rem] lg:text-left lg:leading-[7rem] leading"
            >
              Simple and <span className="text-[#F84605]">tasty</span>
              <br /> recipe
            </motion.h1>
          </div>
          <div className="md:w-[50%] md:mt-6 lg:w-[35%] lg:mt-8 w-full mt-4 imprima-font text-[#959595] text-center md:text-left lg:text-left">
            <motion.p
              initial={{ y: 100, opacity: 0.2 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration:10, stiffness: 50 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              debitis expedita sed incidunt. Exercitationem aut molestias illo,
              modi est in illum minus deleniti officia recusandae neque
              consequuntur nihil, consectetur commodi? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </motion.p>
          </div>
          <div className="mt-12 w-full flex justify-center lg:justify-start md:justify-start">
            <motion.div
              initial={{ y: 100, opacity: 0.2 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="h-16 w-52 bg-[#F84605] abel-font text-white text-lg flex justify-center items-center"
            >
              <p>Try Random Recipe</p>
            </motion.div>
          </div>
        </main>
      </div>
      {/* about section  */}
      <div>
        <About />
      </div>
      {/* favorite section  */}
      <div>
        <Favorite/>
      </div>
    </>
  );
};

export default LandingPageComponent;
