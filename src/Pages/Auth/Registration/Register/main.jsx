import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
  const [registrationData, setRegistrationData] = useState({
    firstname: "",
    othernames: "",
    msisdn: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmPassword, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formErrors)
    console.log(isSubmitted)
    setFormErrors(formValidation(registrationData, confirmPassword));

    console.log(formErrors)
    if (Object.keys(formErrors).length != 0) return

    setIsLoading(true);
    setIsSubmitted(true);

    // form submission
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credential: "include",
      body: JSON.stringify({
        ...registrationData,
        country: "Ghana",
        isoCode: "GH",
      }),
    };

    // been waiting for a while 
    // register to unlock some special features
    const apiResponse = await fetch(
      "http://127.0.0.1:8000/api/v1/register",
      requestOptions
    );
    const data = await apiResponse.json();
    console.log({
      message: "making a call to the go backend..",
      body: {
        response: data,
        registrationData: registrationData,
      },
    });

    // // success 
    // let history = useNavigate()
    // history("/otp-confirm")

    setIsLoading(false);
  }

  function formValidation(values, confirm_password) {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First name is required.";
    }
    if (!values.othernames) {
      errors.othernames = "Other names are required.";
    }
    if (!values.msisdn) {
      errors.msisdn = "Phone number is required.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
    if (values.password != confirm_password) {
      errors.passwordMatch = "Passwords must match.";
    }
    return errors;
  }

  return (
    <>
      <div className="flex justify-between items-center cursor-pointer pt-8">
        <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }} onClick={() => navigation(-1)} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#F84605"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </motion.div>
      </div>
      <div className='h-[75vh] flex items-center'>
        <div className="my-10 w-full h-1/2">
          <form onSubmit={handleSubmit} method="post">
            <>
              <div className='border-b'>
                <h1 className="text-5xl main-font">Sign up</h1>
                <p className="imprima-font text-[#808080] py-1">
                  Create an account to explore more features
                </p>
              </div>

              <div className="py-4 md:py-12 lg:py-12">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="imprima-font text-[#808080]"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name=""
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="Kenneth"
                      onChange={(e) => {
                        setRegistrationData({
                          ...registrationData,
                          firstname: e.target.value,
                        });
                      }}
                    />
                    <p className="text-xs text-red-600 kreon-font">
                      {formErrors.firstname}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="imprima-font text-[#808080]"
                    >
                      Other names
                    </label>
                    <input
                      type="text"
                      name=""
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="Abrahams Lartey"
                      onChange={(e) => {
                        setRegistrationData({
                          ...registrationData,
                          othernames: e.target.value,
                        });
                      }}
                    />
                    <p className="text-xs text-red-600 kreon-font">
                      {formErrors.othernames}
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-3/4 lg:w-3/4 my-3'>
                  <div className="flex flex-col">
                    <label
                      htmlFor="msisdn"
                      className="imprima-font text-[#808080]"
                    >
                      Phone number
                    </label>
                    <input
                      type="number"
                      name=""
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="+233 26 821 334"
                      onChange={(e) => {
                        setRegistrationData({
                          ...registrationData,
                          msisdn: e.target.value,
                        });
                      }}
                    />
                    <p className="text-xs text-red-600 kreon-font">
                      {formErrors.msisdn}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="imprima-font text-[#808080]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name=""
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="xxxxxxxx"
                      onChange={(e) => {
                        setRegistrationData({
                          ...registrationData,
                          password: e.target.value,
                        });
                      }}
                    />
                    <p className="text-xs text-red-600 kreon-font">
                      {formErrors.password}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="confirm-password"
                      className="imprima-font text-[#808080]"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name=""
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="xxxxxxxx"
                      onChange={(e) => {
                        setPasswordConfirmation(e.target.value);
                      }}
                    />
                    <p className="text-xs text-red-600 kreon-font">
                      {formErrors.passwordMatch}
                    </p>
                  </div>
                </div>
                <div className="text-sm imprima-font text-gray-400 flex justify-start mt-3">
                  Already having an account?
                  <Link to={"/auth/login"}>
                    <div className="text-red-600 pl-2">
                      Sign in
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" border-t">
                <motion.button
                  disabled={isLoading ? true : false}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.9,
                    borderRadius: "2%",
                  }}
                  type="submit"
                  className="h-10 w-full md:w-1/3 lg:w-1/3 mt-3 bg-[#F84605] font-semibold text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                >
                  {isLoading ? "Loading..." : "Create Account"}
                </motion.button>
              </div>
            </>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;



