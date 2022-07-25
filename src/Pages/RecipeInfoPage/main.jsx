import "./main.css";
import ReactStars from "react-rating-stars-component";

const RecipeInformationPage = () => {
  return (
    <main className="recipe-info-body pt-10 xl:pt-16 px-6 lg:px-10 xl:px-32">
      {/* navigation   */}
      <div className="flex justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </div>
        <div className="kreon-font text-lg xl:text-xl">
          <span className="text-[#F84605]">Recipe</span> Information
        </div>
        <div></div>
      </div>
      {/* main body with content  */}
      <body className="mt-10 xl:mt-16">
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-7 grid-row-2 min-h-[28vh] gap-4">
          <div className="col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="abel-font text-5xl font-medium">
                Sun-dried spicy tomoto chicken 
              </h2>
              <div>
                <ReactStars count={5} size={25} activeColor="#F83F05" />
              </div>
            </div>
            <div className="bg-green-400 max-w-[25vw] flex">
              <div className="flex flex-col justify-between">
                <div className="flex">

                </div>
                <div>fs</div>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div
            className="col-span-4 bg-center bg-cover rounded-lg"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/pexels-pixabay-262978_AM-ChpuM4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658353704767")`,
            }}
          ></div>
        </div>
      </body>
    </main>
  );
};

export default RecipeInformationPage;
