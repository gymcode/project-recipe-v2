import "./main.css";

const DiscoveryDashboardComponent = () => {
  return (
    <main>
      <div className="grid grid-cols-12 gap-7 min-h-[24vh]">
        <div className="card col-span-10 hidden xl:block lg:block md:block rounded-lg" />
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
      <div className="mt-5">
        <p className="imprima-font text-lg">Categories</p>
        <div className="flex">
          <div className="rounded-lg h-24 w-52 bg-black mt-2 mr-12" />
          <div className="rounded-lg h-24 w-52 bg-black mt-2 mr-12" />
          <div className="rounded-lg h-24 w-52 bg-black mt-2 mr-12" />
          <div className="rounded-lg h-24 w-52 bg-black mt-2 mr-12" />
          <div className="rounded-lg h-24 w-52 bg-black mt-2 mr-12" />
          <div className="rounded-lg h-24 w-52 bg-black mt-2" />
        </div>
      </div>
      <div className="mt-5">
        <div>
          <p className="imprima-font capitalize text-lg">Suggested recipes for you</p>
          <p className="imprima-font capitalize text-[#777777]">Because you selected the <span className="text-[#F84605]">Omnivore Category</span>...</p>
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default DiscoveryDashboardComponent;
