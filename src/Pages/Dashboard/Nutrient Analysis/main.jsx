import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion";
import SVG from "Assets/Images/undraw_feeling_blue_-4-b7q.svg";
import ANIME_SVG from "Assets/Images/undraw_enter_uhqk.svg";
import Endpoints from "Services/endpoints";
import { NutrientFacts } from "Components";
import { SPINER_LOADER } from "Components";
import { ERROR_TOAST } from "Components";
import { useLocation } from "react-router-dom";

const NutrientCheckComponent = () => {
  const [showResults, setShowResults] = useState(false);
  const [ingredientList, setIngredientList] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { state } = useLocation()
  const ingredient = state == undefined ? "" : state.toString()

  const handleAnalyse = async () => {
    setLoading(true);
    try {
      setIngredientList(ingredient)
      const ingredientArr = ingredientList.split(",");

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingr: ingredientArr,
        }),
      };

      const apiResponse = await fetch(
        Endpoints.NUTRITION_ANALYSIS,
        requestOptions
      );

      const results = await apiResponse.json();
      setLoading(false);
      console.log({
        message: "making a call to the go backend..",
        body: {
          response: data,
          registrationData: ingredientArr,
        },
      });
      setData(results);
      setShowResults(true);
    } catch (error) {
      setShowResults((false))
      ERROR_TOAST(error.message);
    }
  };

  return (
    <main>
      <>
        {/* header  */}
        <div className="flex justify-between py-3 border-b items-center ">
          <div className="text-sm text-gray-400">
            Nutrient Analysis <span className="text-[#F84605]">/</span>{" "}
          </div>
          <div
            className="h-8 w-44 bg-[#F84605] kreon-font text-white font-bold text-base flex justify-center items-center cursor-pointer rounded"
            onClick={() => setShowResults(false) }
          >
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
                      {data.ingredients.map((item) => (
                        <>
                          {item.parsed.map((value) => (
                            <>
                              <tr className="h-20 border-b imprima-font hover:bg-[#ebedf0dc]">
                                <td className="text-gray-800">
                                  {value.quantity}
                                </td>
                                <td className="text-gray-800">
                                  {value.measure}
                                </td>
                                <td className="text-gray-800">{value.food}</td>
                                <td className="text-gray-800">
                                  <div className="bg-[#D1FED6] rounded-lg flex justify-center items-center h-9 w-28">
                                    <div className="text-sm text-[#00800E] font-bold">
                                      {Math.floor(
                                        value.nutrients.ENERC_KCAL.quantity
                                      )}{" "}
                                      kcal
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center text-gray-800 flex h-[8.3vh] justify-center items-center">
                                  <div className="bg-[#FFE7DE] rounded-lg flex justify-center items-center h-9 w-28">
                                    <div className="text-sm text-[#F84605] font-bold">
                                      {Math.floor(value.weight)}g
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </>
                          ))}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-span-1 h-[83vh]">
                  <NutrientFacts data={data} />
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
            <div className="grid grid-cols-2 justify-center items-center h-[70vh] flex-col">
              <div className="pl-12">
                <img src={ANIME_SVG} alt="" className="h-[55vh]" />
              </div>
              <div className="w-[40rem]">
                <div className="pb-10 text-2xl main-font flex items-center justify-center text-center flex-col font-bold">
                  Let us help you analyse your ingredients so you know what's up
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mood-wink"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#F84605"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M15 10h.01"></path>
                    <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                    <path d="M8.5 8.5l1.5 1.5l-1.5 1.5"></path>
                  </svg>
                </div>
                <p className="text-center imprima-font mb-4">
                  Enter an ingredient list list for what you are cooking, like{" "}
                  <strong>"1 cup rice, 10 oz chickpeas"</strong>, etc. Enter
                  each ingredient on a new line.
                </p>
                <textarea
                  onChange={(e) => setIngredientList(e.target.value)}
                  cols="85"
                  rows="6"
                  className="p-3 outline-none imprima-font"
                  placeholder="text here ..."
                  required
                >
                </textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.9,
                    borderRadius: "2%",
                  }}
                  disabled={loading ? true : false}
                  onClick={() => handleAnalyse()}
                  className="h-10 w-1/2 mt-6 bg-[#F84605] font-semibold text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                >
                  {loading ? <SPINER_LOADER /> : "Analyse..."}
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </>
    </main>
  );
};

export default NutrientCheckComponent;
