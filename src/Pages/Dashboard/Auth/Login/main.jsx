import { motion } from "framer-motion";
import "./main.css"
import SVG from "Assets/Images/undraw_enter_uhqk.svg"

const LoginComponent = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-full bg-gray-50 rounded shadow-md">
        <div className="flex items-center flex-col justify-center login-bg">
          <div className="w-1/2">
            <h1 className="text-4xl abel-font">Hi, Welcome Back!</h1>
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
                type="submit"
                className="h-10 w-full mt-3 bg-[#F84605] text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
              >
                Log in
              </motion.button>
            </div>
            <div className="text-sm imprima-font text-gray-400 flex justify-start mt-3">
              Not registerd yet?
              <div className="text-red-600 pl-2">
                Create an account
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img src={SVG} width={450} height={300} classname="bg-cover rounded bg-center h-10" alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
