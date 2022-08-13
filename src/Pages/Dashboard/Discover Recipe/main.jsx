import React from "react"
import "./main.css";

const recipeCategory = [
  {
    id: 1,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 2,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 3,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
  {
    id: 4,
    title: "Mashed potatoes breakfast hash",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
  },
];

const DiscoveryDashboardComponent = () => {
  const [tab, setTab] = React.useState("Discover Recipe")
  return (
    <main>
      <div className="grid grid-cols-12 gap-7 min-h-[24vh] mt-4">
        <div className="card col-span-10 hidden xl:block lg:block md:block rounded-lg"/>
        <div className="col-span-2 bg-[#f8e6e6] rounded-lg flex flex-col p-5 justify-between">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F84605"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>
          <div className="tracking-widest text-[#4A4A4A]">
            You have 3 new recipes in your bookmark
          </div>
          <div className="imprima-font text-sm underline text-[#F84605]">
            See Bookmarks
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="imprima-font text-lg">Categories</p>
        <div className="flex">
          <div className="rounded-lg h-24 w-52 bg-[#F84605] mt-2 mr-12 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-meat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path>
              <ellipse
                transform="rotate(45 8.025 16.475)"
                cx="8.025"
                cy="16.475"
                rx="7"
                ry="3"
              ></ellipse>
              <path d="M7.5 16l1 1"></path>
              <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>
            </svg>
            <p className="text-white imprima-font py-3">Omnivore Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-fish"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571"></path>
              <path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504"></path>
              <path d="M18 11v.01"></path>
              <path d="M11.5 10.5c-.667 1 -.667 2 0 3"></path>
            </svg>
            <p className="imprima-font py-3">Pescatarian Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-apple"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="14" r="7"></circle>
              <path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2"></path>
              <path d="M10 10.5c1.333 .667 2.667 .667 4 0"></path>
            </svg>
            <p className="imprima-font py-3">Fruitarian Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-meat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path>
              <ellipse
                transform="rotate(45 8.025 16.475)"
                cx="8.025"
                cy="16.475"
                rx="7"
                ry="3"
              ></ellipse>
              <path d="M7.5 16l1 1"></path>
              <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>
            </svg>
            <p className="imprima-font py-3">Paleo Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-carrot"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 .005 -6.344a4.483 4.483 0 0 0 -6.342 -.005c-2.86 2.861 -6.347 12.689 -6.347 12.689z"></path>
              <path d="M9 13l-1.5 -1.5"></path>
              <path d="M16 14l-2 -2"></path>
              <path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z"></path>
              <path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z"></path>
            </svg>
            <p className="imprima-font py-3">Vegetarian Category</p>
          </div>
          <div className="category_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-leaf"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#777777"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 21c.5 -4.5 2.5 -8 7 -10"></path>
              <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"></path>
            </svg>
            <p className="imprima-font py-3">Vegan Category</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <p className="imprima-font capitalize text-lg">
            Suggested recipes for you
          </p>
          <p className="imprima-font capitalize text-[#777777]">
            Because you selected the{" "}
            <span className="text-[#F84605]">Omnivore Category</span>...
          </p>
        </div>
        <div className="grid grid-cols-4 gap-12 mt-10">
          {recipeCategory.map((data) => (
            <div className="h-[40vh] hover:shadow-lg rounded-lg hover:shadow-[#ffdfd3]">
              <div
                className="h-40 w-full rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/ca-creative-bpPTlXWTOvg-unsplash_zPwCjixvr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658255848601")`,
                }}
              />
              <div className="flex flex-col justify-between">
                <div className="p-5 h-44">
                  <h2 className="capitalize imprima-font mt-3 text-xl">
                    {data.title}
                  </h2>
                  <p className="py-3 text-[#777777] imprima-font">
                    {data.content}
                  </p>
                </div>
                <div className="border-t px-5 pt-2 flex items-center justify-between    ">
                  <div className="flex items-center">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke-Width="1.5"
                    >
                      <path
                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="#979797"
                      ></path>
                      <path
                        d="M16 11H13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z"
                        fill="#F84605"
                      ></path>
                    </svg>
                    <div className="ml-2 text-sm text-[#979797]">45 mins</div>
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 rounded-full border border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#979797"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DiscoveryDashboardComponent;
