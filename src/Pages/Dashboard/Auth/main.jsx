import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const LoginComponent = React.lazy(() => import("./Login"));
const RegisterComponent = React.lazy(() => import("./Register"));

const AuthenticationComponent = () => {
  return (
    <>
      {/* header  */}
      <div className="flex pt-5 border-b items-center ">
        <Link to={"/dashboard/auth/register"}>
          <div className="text-sm text-gray-400 hover:border-b hover:border-red-700 p-2 px-10 cursor-pointer">
            Register
          </div>
        </Link>
        <Link to={"/dashboard/auth/login"}>
          <div className="text-sm text-gray-400 ml-6 p-2 px-12 hover:border-b hover:border-red-700 cursor-pointer">
            Login
          </div>
        </Link>
      </div>
      {/* body */}
      <body className="h-[75vh]">
        <Suspense fallback={"fdfsdf"}>
          <Routes>
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </Suspense>
      </body>
    </>
  );
};

export default AuthenticationComponent;
