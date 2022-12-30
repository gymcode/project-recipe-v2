import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion";
import SVG from "Assets/Images/undraw_feeling_blue_-4-b7q.svg";
import Endpoints from "Services/endpoints";

const NutrientCheckComponent = () => {
  const [showResults, setShowResults] = useState(false);
  const [ingredientList, setIngredientList] = useState("")


  const handleAnalyse = async()=>{
    const ingredientArr = ingredientList.split(",") 
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingr: ingredientArr,
      }),
    };

    const apiResponse = await fetch(Endpoints.NUTRITION_ANALYSIS, requestOptions);
    console.log(apiResponse);

    const data = await apiResponse.json();
    console.log({
      message: "making a call to the go backend..",
      body: {
        response: data,
        registrationData: ingredientArr,
      },
    });
    setShowResults(true)
  }
  return (
    <main>
      <>
        {/* header  */}
        <div className="flex justify-between py-3 border-b items-center ">
          <div className="text-sm text-gray-400">
            Nutrient Analysis <span className="text-[#F84605]">/</span>{" "}
          </div>
          <div className="text-sm text-gray-400" onClick={()=>setShowResults(false)}>
            Reset
          </div>
        </div>
        {/* body content */}
        <div className="mt-8">
          {showResults ? (
            <div className="relative h-[73vh]">
              {/* table section  */}
              <div className="hidden lg:grid md:grid grid-cols-3 gap-10">
                <div className="col-span-2">
                  <table class="table-fixed w-full rounded-xl">
                    <thead className="rounded-xl">
                      <tr className="h-20 bg-[#ebedf0dc] imprima-font">
                        <th className="text-left">Qty</th>
                        <th className="text-left">Unit</th>
                        <th className="text-left">Food</th>
                        <th className="text-left">Calories</th>
                        <th className="text-center">Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-20 border-b imprima-font hover:bg-[#ebedf0dc]">
                        <td className="text-gray-800">1</td>
                        <td className="text-gray-800">ounce</td>
                        <td className="text-gray-800">Chickpeas</td>
                        <td className="text-gray-800">
                          <div className="bg-[#D1FED6] rounded-lg flex justify-center items-center h-9 w-28">
                            <div className="text-sm text-[#00800E] font-bold">
                              443 kcal
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-gray-800 flex h-[8.3vh] justify-center items-center">
                          <div className="bg-[#FFE7DE] rounded-lg flex justify-center items-center h-9 w-28">
                            <div className="text-sm text-[#F84605] font-bold">
                              200g
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-span-1 h-[83vh]">
                  <div className="bg-[#ebedf0dc] h-44 py-2 px-5">
                    <p className="justify-center text-2xl main-font font-bold flex">
                      Nutritional Facts
                    </p>
                    <div className="pt-2">
                      <div className="flex imprima-font">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                            />
                          </svg>
                        </div>
                        <p className="pl-3">Amount per serving</p>
                      </div>
                      <div className="pt-4">
                        <div className="flex justify-between">
                          <p className="text-2xl main-font text-gray-700 ">
                            Total Calories
                          </p>
                          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                            1177 kcal
                          </div>
                        </div>
                        <div className="flex pt-1 justify-between">
                          <p className="text-2xl main-font text-gray-700">
                            Total Weight
                          </p>
                          <div className="h-6 w-20 bg-[#FFE7DE] imprima-font text-[#F84605] font-bold flex justify-center items-center text-center text-sm rounded-md">
                            200 g
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300  mt-4 rounded px-5 py-4">
                    <div className="">
                      <div className="flex justify-between border-b pb-3">
                        <p className="imprima-font text-lg text-gray-600 font-bold">
                          Total Fat
                          <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                            32g
                          </sup>
                        </p>
                        <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                          43%
                        </div>
                      </div>
                      <div className="">
                        <div className="flex justify-end py-2">
                          <div className="flex justify-between border-b w-96">
                            <p className="imprima-font text-lg text-gray-600 ">
                              Saturated Fat
                              <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                                32g
                              </sup>
                            </p>
                            <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                              43%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <p className="imprima-font text-lg text-gray-600 font-bold">
                        Cholestrol
                        <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                          32g
                        </sup>
                      </p>
                      <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                        43%
                      </div>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <p className="imprima-font text-lg text-gray-600 font-bold">
                        Sodium
                        <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                          32g
                        </sup>
                      </p>
                      <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                        43%
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="flex justify-between border-b pb-3">
                        <p className="imprima-font text-lg text-gray-600 font-bold">
                          Total Carbohydrate
                          <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                            32g
                          </sup>
                        </p>
                        <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                          43%
                        </div>
                      </div>
                      <div className="">
                        <div className="flex justify-end py-2">
                          <div className="flex justify-between border-b w-96">
                            <p className="imprima-font text-lg text-gray-600">
                              Dietary Fiber
                              <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                                32g
                              </sup>
                            </p>
                            <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                              43%
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end py-2">
                          <div className="flex justify-between border-b w-96">
                            <p className="imprima-font text-lg text-gray-600">
                              Total Sugars
                              <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                                32g
                              </sup>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <p className="imprima-font text-lg text-gray-600 font-bold">
                        Protein
                        <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                          32g
                        </sup>
                      </p>
                      <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                        43%
                      </div>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <p className="imprima-font text-lg text-gray-600 font-bold">
                        Vitamin D
                        <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                          32g
                        </sup>
                      </p>
                      <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                        43%
                      </div>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <p className="imprima-font text-lg text-gray-600 font-bold">
                        Calcium
                        <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                          32g
                        </sup>
                      </p>
                      <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                        43%
                      </div>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <p className="imprima-font text-lg text-gray-600 font-bold">
                        Iron
                        <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                          32g
                        </sup>
                      </p>
                      <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                        43%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:hidden lg:hidden h-[50vh]">
                <img
                  src={SVG}
                  className="bg-cover rounded bg-center h-1/3"
                  alt=""
                />
                <div className="imprima-font mx-4  text-center text-gray-600 mt-10">
                  Could you pleeeaaaasssee use the desktop view for all of your
                  recipes?
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-[70vh] flex-col">
              <p className="w-1/2 text-center imprima-font mb-4">
                Enter an ingredient list list for what you are cooking, like "1
                cup rice, 10 oz chickpeas", etc. Enter each ingredient on a new
                line.
              </p>
              <textarea onChange={(e)=> setIngredientList(e.target.value)} cols="70" rows="10"></textarea>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.9,
                  borderRadius: "2%",
                }}
                onClick={()=>handleAnalyse()}
                className="mx-9 h-10 w-1/4 mt-6 bg-[#F84605] font-semibold text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
              >
                Analyse 
              </motion.div>
            </div>
          )}
        </div>
      </>
    </main>
  );
};

export default NutrientCheckComponent;
