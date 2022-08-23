import { useState } from "react";

const MyRecipeComponent = () => {

  return (
    <main>
      {/* header  */}
      <div className="flex justify-between py-3 border-b items-center ">
        <div className="text-sm text-gray-400">Add recipe / </div>
        <div>
          <div className="h-8 w-44 bg-[#F84605] kreon-font text-white text-base flex justify-center items-center cursor-pointer rounded">
            <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <p>Add new recipe</p>
          </div>
        </div>
      </div>
      {/* body content */}
      <div className="mt-8">
        <div className="flex justify-between">
          <div className="w-[25vw] h-[86%] items-end xl:flex lg:flex md:flex hidden">
            <div className="flex w-full border items-center px-3 rounded-md">
              <div className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#777777"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-full h-8 outline-0 text-gray-400 bg-transparent"
                placeholder="search for recipes..."
              />
            </div>
          </div>
          <div className="grid grid-cols-5 w-[18vw] gap-2">
            <div className="col-span-4 rounded border flex items-center justify-center">
              
            </div>
            <div className="border rounded flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyRecipeComponent;
