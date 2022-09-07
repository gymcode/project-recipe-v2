import "./main.css"

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
        {/* <div className="flex justify-between">
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
        </div> */}

        <div className="relative h-[70vh]">
          <h1 className="my-8 imprima-font text-2xl capitalize">All your recipes</h1>
          {/* table section  */}
          <table class="table-fixed w-full rounded-xl">
            <thead className="rounded-xl">
              <tr className="h-20 bg-[#ebedf0] imprima-font">
                <th className="text-left">Recipe Name</th>
                <th className="text-left">Recipe Type</th>
                <th className="text-left">Status</th>
                <th className="text-left">Recipe Rating</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-20 border-b imprima-font">
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Continental</td>
                <td>
                  <div className="border border-[#75D166] rounded-lg flex justify-center items-center h-9 w-28">
                    <div className="text-sm">Approved</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#75D166" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 12l5 5l10 -10"></path>
                      <path d="M2 12l5 5m5 -5l5 -5"></path>
                    </svg>
                  </div>
                </td>
                <td>Malcolm Lockyer</td>
                <td className="text-center">1961</td>
              </tr>
              <tr className="h-20 border-b">
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                <td>Malcolm Lockyer</td>
                <td className="text-center">1961</td>
              </tr>
              <tr className="h-20 border-b">
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                <td>Malcolm Lockyer</td>
                <td className="text-center">1961</td>
              </tr>
              <tr className="h-20 border-b">
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                <td>Malcolm Lockyer</td>
                <td className="text-center">1961</td>
              </tr>
              <tr className="h-20 border-b imprima-font">
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Continental</td>
                <td>
                  <div className="border border-[#75D166] rounded-lg flex justify-center items-center h-9 w-28">
                    <div className="text-sm">Approved</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#75D166" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 12l5 5l10 -10"></path>
                      <path d="M2 12l5 5m5 -5l5 -5"></path>
                    </svg>
                  </div>
                </td>
                <td>Malcolm Lockyer</td>
                <td className="text-center">1961</td>
              </tr>
            </tbody>
          </table>
          <div className="absolute bottom-0 left-0 w-full bg-[#ebedf0] h-20 rounded-lg shadow-md flex items-center px-16 justify-between">
            <div className="imprima-font text-gray-600">1-5 of 29</div>
            <div className="flex justify-center items-center">
              <div className="text-gray-600 imprima-font">rows per page:</div>
              <div className="px-3 py-1 text-base flex justify-center items-center border border-gray-400 rounded-lg ml-2">
                <span className="pr-1 text-[#F84605]">5</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className="px-2 py-1 text-base flex justify-center items-center border border-gray-400 rounded-lg ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F84605" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </div>
              <div className="px-2 py-1 text-base flex justify-center items-center border border-gray-400 rounded-lg ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F84605" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyRecipeComponent;
