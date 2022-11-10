import { useState } from "react";
import { motion } from "framer-motion";
import "./main.css"
import Logo from "Assets/Icons/Logo.svg";
import { Link } from "react-router-dom";
import { SUCCESS_TOAST } from "Components"
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Lottie from "react-lottie";
import * as SplashAnimation from "Assets/LottieFiles/101421-icon-arrow-left.json";

const leftArrowSplashAnimation = {
  loop: true,
  autoplay: true,
  animationData: SplashAnimation,
};


const LoginComponent = () => {
  const [showNavigation, setShowNavigation] = useState(false)
  console.log(showNavigation)
  const navigation = useNavigate()
  function handleLogin(e) {
    e.preventDefault()


    SUCCESS_TOAST('Logged in successfully')

  }

  return (
    <>
      <div className="grid lg:grid-cols-2 h-[100vh] bg-gray-50 rounded login-bg">
        <div className="max-h-[100vh]">
          <Link to={"/"}>
            <div className="flex justify-between items-center cursor-pointer pt-8 px-20">
              <img className="w-auto h-10" src={Logo} alt="Workflow" />
            </div>
          </Link>
          <div className="w-full h-[90vh] flex items-center justify-center xl:justify-start pl-0 xl:pl-20">
            <div
              className="w-40 h-[40vh] xl:flex xl:justify-center xl:items-center hidden xl:block"
              onMouseEnter={() => setShowNavigation(true)}
              onMouseLeave={() => setShowNavigation(false)}>
              {
                showNavigation ? (
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", ease: "easeInOut", stiffness: 50, duration: 100 }}
                    onClick={() => navigation(-1)}
                  >
                    <Lottie options={leftArrowSplashAnimation} height={80} width={80} />
                  </motion.div>
                ) : (<></>)
              }
            </div>
            <div className="w-3/4 md:w-2/3 lg:w-2/3 xl:w-1/2">
              <h1 className="text-5xl abel-font">Hi, Welcome Back!</h1>
              <p className="imprima-font text-[#808080] py-1">
                Create an account to explore more features
              </p>
              <div className="my-8">
                <div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Email"
                      className="imprima-font text-[#808080]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name=""
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="Kenneth"
                    />
                    <p className="text-xs text-red-600 kreon-font">
                      {/* {formErrors.firstname} */}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Password"
                      className="imprima-font text-[#808080]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name=""
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="xxxxxxx"
                    />
                    <p className="text-xs text-red-600 kreon-font">
                      {/* {formErrors.firstname} */}
                    </p>
                  </div>
                </div>
                <Link to={"/auth/reset"}>
                  <div className="text-sm imprima-font text-gray-400 flex justify-end">
                    Forgot password?
                  </div>
                </Link>
              </div>
              <div className="">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.9,
                    borderRadius: "2%",
                  }}
                  onClick={handleLogin}
                  className="h-10 w-full mt-3 bg-[#F84605] text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                >
                  Log in
                </motion.button>
              </div>
              <div className="text-sm imprima-font text-gray-400 flex justify-start mt-3">
                Not registerd yet?
                <Link to={"/auth/register"}>
                  <div className="text-red-600 pl-2">
                    Create an account
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:flex xl:flex items-center justify-center shadow-xl flex-col hidden'>
          <div
            className="bg-center bg-cover h-full w-full"
            style={{
              backgroundImage: `url("https://i.postimg.cc/MX2GqQRR/pexels-valeria-boltneva-1199958.jpg")`,
            }}
          >
            <div className="bg-red-300 h-[100vh]" style={{background: "rgba(217, 217, 217, 0.01)"}}>
              
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginComponent;
