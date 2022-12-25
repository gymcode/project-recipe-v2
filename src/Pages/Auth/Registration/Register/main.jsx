// standard react packages 
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useFormik } from 'formik';

//  in house packages 
import { RegistrationSchema } from 'Helpers';
import { ERROR_TOAST, SUCCESS_TOAST, WARNING_TOAST } from 'Components';
import Endpoints from 'Services/endpoints';


const RegisterComponent = () => {
  const navigation = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      otherNames: "",
      msisdn: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: RegistrationSchema,
    onSubmit: values => handleSubmit(values)
  })


  async function handleSubmit(values) {
      // form submission
      console.log(values)
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            countryCode: "GH",
            isoCode: "233",
          }),
        };
        // been waiting for a while 
        // register to unlock some special features
        const apiResponse = await fetch(
          Endpoints.CREATE_ACCOUNT,
          requestOptions
        );

        console.log(apiResponse)

        const data = await apiResponse.json();
        console.log({
          message: "making a call to the go backend..",
          body: {
            response: data,
            registrationData: values,
          },
        });

        if (data.code != "00") throw new Error(data.error.errMsg)

        // let history = useNavigate()
        navigation("/auth/register/otp-confirm")

``      } catch (error) {
        console.log(error.message)
        ERROR_TOAST(error.message)
      }
  }

  return (
    <motion.div 
      animate={{ y: 0, opacity: 1 }} 
      initial={{ opacity: 0 , y: 400}} 
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0}} >
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
          <form onSubmit={formik.handleSubmit} method="post">
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
                      name="firstName"
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="Kenneth"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    <p className="text-xs text-red-600 font-bold tracking-wide kreon-font">
                      {formik.errors.firstName}
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
                      name="otherNames"
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="Abrahams Lartey"
                      value={formik.values.otherNames}
                      onChange={formik.handleChange}
                    />
                    <p className="text-xs text-red-600 font-bold tracking-wide kreon-font">
                      {formik.errors.otherNames}
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
                      type="text"
                      name="msisdn"
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="+233 26 821 334"
                      value={formik.values.msisdn}
                      onChange={formik.handleChange}
                    />
                    <p className="text-xs text-red-600 font-bold tracking-wide kreon-font">
                      {formik.errors.msisdn}
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
                      name="password"
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="xxxxxxxx"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <p className="text-xs text-red-600 font-bold tracking-wide kreon-font">
                      {formik.errors.password}
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
                      name="confirmPassword"
                      className="outline-0 text-[#808080] bg-gray-200 h-10 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                      placeholder="xxxxxxxx"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                    <p className="text-xs text-red-600 font-bold tracking-wide kreon-font">
                      {formik.errors.confirmPassword}
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.9,
                    borderRadius: "2%",
                  }}
                  type="submit"
                  className="h-10 w-full md:w-1/3 lg:w-1/3 mt-3 bg-[#F84605] font-semibold text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                >
                  {"Create Account"}
                </motion.button>
              </div>
            </>
          </form>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default RegisterComponent;



