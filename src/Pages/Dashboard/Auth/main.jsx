import React, { Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {LOADER } from "Components";

const LoginComponent = React.lazy(() => import("./Login"));
const RegisterComponent = React.lazy(() => import("./Register"));

const AuthenticationComponent = () => {
  return (
    <>
      {/* header  */}
      <div className="flex pt-5 border-b items-center ">
        <NavLink
          to={"/dashboard/auth/register"}
          className={({ isActive }) =>
            isActive
              ? "border-b border-red-700"
              : "hover:border-b hover:border-red-700"
          }
        >
          <div className="text-sm text-gray-600 p-2 px-10 cursor-pointer">
            Register
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/auth/login"}
          className={({ isActive }) =>
            isActive
              ? "border-b border-red-700 mx-3"
              : "hover:border-b hover:border-red-700 mx-3"
          }
        >
          <div className="text-sm text-gray-600 p-2 px-12 cursor-pointer">
            Login
          </div>
        </NavLink>
      </div>
      {/* body */}
      <body className="h-[75vh]">
        <Suspense fallback={<LOADER/>}>
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
