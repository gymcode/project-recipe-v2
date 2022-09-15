import { useEffect } from "react";
import { motion } from "framer-motion";
import "./main.css"
import SVG from "Assets/Images/undraw_enter_uhqk.svg"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const LoginComponent = () => {

  function handleLogin(e){
    e.preventDefault()

    // based on the code from the backend render
    toast.success("Logged in successfully")
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 h-full bg-gray-50 rounded shadow-md login-bg">
        <div className="flex items-center flex-col justify-center max-h-[75vh]">
          <div className="w-3/4 md:w-1/2 lg:w-1/2">
            <h1 className="text-4xl abel-font">Hi, Welcome Back!</h1>
            <p className="imprima-font text-[#808080] py-1">
              Create an account to explore more features
              <ToastContainer 
              />
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
                    className="outline-0 text-[#808080] bg-gray-200 h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
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
                    className="outline-0 text-[#808080] bg-gray-200 h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                    placeholder="xxxxxxx"
                  />
                  <p className="text-xs text-red-600 kreon-font">
                    {/* {formErrors.firstname} */}
                  </p>
                </div>
              </div>
              <div className="text-sm imprima-font text-gray-400 flex justify-end">
                Forgot password?
              </div>
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
              <Link to={"/dashboard/auth/register"}>
                <div className="text-red-600 pl-2">
                  Create an account
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex xl:flex hidden justify-start items-center max-h-[75vh]">
          <img src={SVG} className="bg-cover rounded bg-center h-1/2 xl:h-2/3" alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
