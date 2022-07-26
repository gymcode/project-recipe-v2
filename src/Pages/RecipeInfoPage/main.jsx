import "./main.css";
import ReactStars from "react-rating-stars-component";
import { INGREDIENT_LISTING, INSTRUCTION_LISTING } from "Components";

const some = [{ name: "Kenneth" }, { name: "Kelvin" }];

const hey = [
  {
    content:
      "this is me and blah vlah albh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fugit architecto nequeexplicabo nihil molestias dolore dolorem sed temporibus!Provident consectetur voluptatem, quidem odio fugitlaboriosam suscipit odit sit qui?",
  },
  { content: "this is me and others" },
];

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
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-7 grid-row-2 lg:h-[28vh] xl:h-[28vh] md:h-[28vh] h-[50vh] gap-4">
          <div className="col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="abel-font text-5xl font-medium">
                Sun-dried spicy tomoto chicken
              </h2>
              <div>
                <ReactStars count={5} size={25} activeColor="#F83F05" />
              </div>
            </div>
            <div className="hidden xl:block">dsad</div>
            <div className="w-[70vw] md:max-w-[35vw] lg:max-w-[25vw] xl:max-w-[18vw] flex justify-between">
              <div className="flex flex-col justify-between">
                <div className="flex items-center imprima-font">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                      fill="black"
                    ></path>
                    <path
                      d="M16 11H13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z"
                      fill="#F84605"
                    ></path>
                  </svg>
                  <div className="px-3 text-[#818181]">30 mins</div>
                </div>
                <div className="flex items-center imprima-font py-5">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2C12.7348 2 12.4804 2.10536 12.2929 2.29289C12.1054 2.48043 12 2.73478 12 3V11C12 11.2652 12.1054 11.5196 12.2929 11.7071C12.4804 11.8946 12.7348 12 13 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 8.61305 21.0518 6.32387 19.364 4.63604C17.6761 2.94821 15.3869 2 13 2ZM14 10V4.07C15.4962 4.28561 16.8824 4.97978 17.9513 6.04868C19.0202 7.11759 19.7144 8.50379 19.93 10H14Z"
                      fill="#F84605"
                    ></path>
                    <path
                      d="M20.8201 14.06C20.696 14.0156 20.5644 13.9963 20.4328 14.0029C20.3012 14.0096 20.1722 14.0422 20.0533 14.0989C19.9343 14.1556 19.8278 14.2352 19.7397 14.3332C19.6516 14.4312 19.5838 14.5457 19.5401 14.67C19.0894 15.9439 18.3234 17.0829 17.3136 17.9808C16.3037 18.8786 15.0829 19.506 13.7649 19.8045C12.447 20.1029 11.075 20.0626 9.77684 19.6874C8.47869 19.3123 7.29673 18.6144 6.34123 17.6589C5.38573 16.7034 4.68783 15.5214 4.31264 14.2232C3.93745 12.9251 3.8972 11.5531 4.19564 10.2352C4.49408 8.91724 5.12148 7.6964 6.01932 6.68652C6.91716 5.67665 8.05617 4.91065 9.33009 4.46C9.58072 4.37248 9.78632 4.18898 9.90165 3.94987C10.017 3.71076 10.0326 3.43563 9.94509 3.185C9.85757 2.93437 9.67407 2.72877 9.43496 2.61344C9.19585 2.4981 8.92072 2.48248 8.67009 2.57C7.07713 3.13278 5.65272 4.08996 4.5298 5.35222C3.40689 6.61448 2.62207 8.14065 2.24861 9.78831C1.87515 11.436 1.92521 13.1514 2.39413 14.7744C2.86305 16.3975 3.73553 17.8753 4.93015 19.0699C6.12477 20.2646 7.60258 21.137 9.22565 21.606C10.8487 22.0749 12.5641 22.1249 14.2118 21.7515C15.8594 21.378 17.3856 20.5932 18.6479 19.4703C19.9101 18.3474 20.8673 16.923 21.4301 15.33C21.5166 15.0807 21.501 14.8072 21.3867 14.5693C21.2725 14.3314 21.0688 14.1484 20.8201 14.06Z"
                      fill="black"
                    ></path>
                  </svg>
                  <div className="px-3 text-[#818181]">8 people</div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center imprima-font">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <div className="px-3 text-[#818181]">
                    <span className="text-[#F84605]">2383</span> Likes
                  </div>
                </div>
                <div className="flex items-center imprima-font py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-activity"
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
                  </svg>
                  <div className="px-3 text-[#818181]">
                    <span className="text-[#F84605]">78%</span> healthscore
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-4 bg-center bg-cover rounded-lg h-[20vh] xl:h-full lg:h-full md:h-full"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/pexels-pixabay-262978_AM-ChpuM4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658353704767")`,
            }}
          ></div>
        </div>
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 grid-row-2 gap-4 mt-12">
          {/* ingredient, instructions and caloric breakdown section */}
          <div className="col-span-4 lg:col-span-3 xl:col-span-3 flex flex-col ">
            <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 grid-row-2 ">
              <div className="kreon-font text-lg">Ingredients: </div>
              <div className="col-span-5">
                {/* // listing component */}
                <INGREDIENT_LISTING itemArr={some} />
              </div>
            </div>
            <div className="grid xl:grid-cols-6 lg:grid-cols-6grid-row-2">
              <div className="kreon-font text-lg">Instructions: </div>
              <div className="col-span-5">
                {/* // listing component */}
                <INSTRUCTION_LISTING itemArr={hey} />
              </div>
            </div>
          </div>
          {/* summary section  */}
          <div className="col-span-4 bg-center bg-cover rounded-lg min-h-[20vh] p-8 w-full bg-[#FEF3F3]">
            <div className="flex items-center pb-5">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="kreon-font px-2 text-xl">Recipe Summary</p>
            </div>
            <i className="text-justify imprima-font text-[#818181]">
              Buttery Pull Apart Monkey Bread takes about about 45 minutes from
              beginning to end. One serving contains 392 calories, 6g of
              protein, and 21g of fat. This recipe serves 16. For 34 cents per
              serving, this recipe covers 9% of your daily requirements of
              vitamins and minerals. 9 people have made this recipe and would
              make it again. Head to the store and pick up butter, flour, sugar,
              and a few other things to make it today. It is a good option if
              you're following a lacto ovo vegetarian diet. It is brought to you
              by Foodista. With a spoonacular score of 28%, this dish is rather
              bad. Try Mini Apple Pull Apart Monkey Bread, Banana’s Foster Pull
              Apart Monkey Bread, and Pull Apart Apple Fritter Monkey Bread for
              similar recipes.
            </i>
          </div>
        </div>
      </body>
    </main>
  );
};

export default RecipeInformationPage;
