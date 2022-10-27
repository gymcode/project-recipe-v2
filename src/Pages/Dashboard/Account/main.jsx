import { Suspense, lazy } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import { LOADER } from "Components"

const SubscriptionComponent = lazy(()=> import("./Subscription"))

const AccountComponent = () => {
    return (
        <>
            <div className="flex pt-5 border-b items-center ">
                <NavLink
                    to={"/dashboard/account/subscription"}
                    className={({ isActive }) => // false
                        isActive
                            ? "border-b border-red-700"
                            : "hover:border-b hover:border-red-700"
                    }
                >
                    <div className="text-sm text-gray-600 p-2 px-10 cursor-pointer">
                        Subscription
                    </div>
                </NavLink>
                <NavLink
                    to={"/dashboard/account/personal"}
                    className={({ isActive }) => // false
                        isActive
                            ? "border-b border-red-700 mx-3"
                            : "hover:border-b hover:border-red-700 mx-3"
                    }
                >
                    <div className="text-sm text-gray-600 p-2 px-12 cursor-pointer">
                        Personal Info
                    </div>
                </NavLink>
            </div>
            {/* body section  */}
            <body className="h-[75vh]">
                <Suspense fallback={<LOADER />}>
                    <Routes>
                        <Route path="/subscription" element={<SubscriptionComponent/>}/>
                    </Routes>
                </Suspense>
            </body>
        </>
    )
}

export default AccountComponent