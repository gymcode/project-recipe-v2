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
    </main>
  );
};

export default MyRecipeComponent;
