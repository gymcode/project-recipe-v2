import React, { useEffect, useState } from "react";
import { NAVIGATION_BAR, MAIN_SIDE_NAV, LOADER } from "Components";
import "./main.css";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import * as ScrollToTopAnimation from "Assets/LottieFiles/lf30_editor_rlzi5ome.json";

// other components imports
const About = React.lazy(() => import("./About"));
const Favorite = React.lazy(() => import("./Favorite"));
const Footer = React.lazy(() => import("./Footer"));
const Gallery = React.lazy(() => import("./Gallery"));

const LandingPageComponent = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollableLimit =
        document.documentElement.scrollHeight - window.innerHeight - 400;
      if (window.scrollY > "800" && window.scrollY < scrollableLimit) {
        console.log();
        setShowSideNav(true);
      } else {
        setShowSideNav(false);
      }
    });
  }, []);

  const defaultScrollToTopAnimation = {
    loop: true,
    autoplay: true,
    animationData: ScrollToTopAnimation,
  };

  return (
    <React.Suspense fallback={<LOADER/>}>
      <body className="lg:relative">
        <div className="landing_page_body" id="home_section">
          <header>
            <NAVIGATION_BAR />
          </header>
          <main className="px-2 sm:px-6 lg:px-20 xl:px-32">
            <div className="mt-10 lg:mt-16 xl:mt-20">
              <motion.h1
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, duration: 100 }}
                className="md:text-[4rem] lg:text-[5vw] text-[3rem] abel-font capitalize text-center md:text-left md:leading-[6rem] lg:text-left lg:leading-[7vw] leading"
              >
                Simple and <span className="text-[#F84605]">tasty</span>
                <br /> recipe
              </motion.h1>
            </div>
            <div className="md:w-[50%] md:mt-6 lg:w-[35%] lg:mt-8 w-full mt-4 imprima-font text-[#959595] text-center md:text-left lg:text-left">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 150,
                  stiffness: 50,
                  delay: 0.2,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                debitis expedita sed incidunt. Exercitationem aut molestias illo,
                modi est in illum minus deleniti officia recusandae neque
                consequuntur nihil, consectetur commodi? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </motion.p>
            </div>
            <div className="mt-12 w-full flex justify-center lg:justify-start md:justify-start">
              <RouterLink to={"/random-recipe"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.9,
                    borderRadius: "2%",
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { type: "spring", duration: 1.5, delay: 0.4 } }}
                  transition={{ type: "spring", duration: 1, }}
                  className="h-16 w-52 bg-[#F84605] abel-font text-white text-lg flex justify-center items-center cursor-pointer"
                >
                  <p>Try Random Recipe</p>
                </motion.div>
              </RouterLink>
            </div>
          </main>
        </div>
        {/* about section  */}
        <div>
          <About />
        </div>
        {/* favorite section  */}
        <div>
          <Favorite />
        </div>
        {/* Gallery Section  */}
        <div>
          <Gallery />
        </div>
        {/* Footer section  */}
        <div>
          <Footer />
        </div>
        {showSideNav ? (
          <>
            <div className="lg:fixed xl:fixed  hidden inset-y-[32%] inset-x-8 lg:flex xl:flex">
              <MAIN_SIDE_NAV />
            </div>
            <div className="lg:fixed xl:fixed lg:block xl:block hidden bottom-0 right-0 md:mx-3 md:my-4 mx-8 my-8">
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-easing="ease-in-out-sine"
                data-aos-duration="1000"
                className="flex justify-center toTop items-center md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-20 xl:w-20 rounded-full shadow-xl"
              >
                <Link to="home_section" smooth>
                  <Lottie
                    options={defaultScrollToTopAnimation}
                    height={100}
                    width={100}
                  />
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </body>
    </React.Suspense>
  );
};

export default LandingPageComponent;
