import React from "react"
import { NAVIGATION_BAR } from "Components";
import "./main.css";

// other components imports
const About = React.lazy(()=> import("./About"))

const LandingPageComponent = () => {
  return (
    <>
      <div className="landing_page_body">
        <header>
          <NAVIGATION_BAR />
        </header>
        <body className="px-2 sm:px-6 lg:px-32">
          <div className="mt-10 lg:mt-20">
            <h1 className="md:text-[4rem] lg:text-[5.7rem] text-[3rem] abel-font capitalize text-center md:text-left md:leading-[6rem] lg:text-left lg:leading-[7rem] leading">
              Simple and <span className="text-[#F84605]">tasty</span><br /> recipe
            </h1>
          </div>
          <div className="md:w-[45%] md:mt-6 lg:w-[35%] lg:mt-8 w-full mt-4 imprima-font text-[#959595] text-center md:text-left lg:text-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              debitis expedita sed incidunt. Exercitationem aut molestias illo,
              modi est in illum minus deleniti officia recusandae neque
              consequuntur nihil, consectetur commodi? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="mt-12 w-full flex justify-center lg:justify-start md:justify-start">
            <div className="h-16 w-52 bg-[#F84605] abel-font text-white text-xl flex justify-center items-center">
              <p>Random Recipe</p>
            </div>
          </div>
        </body>
      </div>
      {/* about section  */}
      <div>
        <About/>
      </div>
    </>
  );
};

export default LandingPageComponent;
