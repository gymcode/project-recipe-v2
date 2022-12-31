import React from 'react'

const NutrientFacts = ({data}) => {
  return (
    <>
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
                {data.calories} kcal
              </div>
            </div>
            <div className="flex pt-1 justify-between">
              <p className="text-2xl main-font text-gray-700">Total Weight</p>
              <div className="h-6 w-20 bg-[#FFE7DE] imprima-font text-[#F84605] font-bold flex justify-center items-center text-center text-sm rounded-md">
                {Math.ceil(data.totalWeight)} g
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
                {Math.ceil(data.totalDaily.FAT.quantity)}g
              </sup>
            </p>
            <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
              {Math.ceil(data.totalNutrients.FAT.quantity)}%
            </div>
          </div>
          <div className="">
            <div className="flex justify-end py-2">
              <div className="flex justify-between border-b w-96">
                <p className="imprima-font text-lg text-gray-600 ">
                  Saturated Fat
                  <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                    {Math.ceil(data.totalDaily.FASAT.quantity)}g
                  </sup>
                </p>
                <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                  {Math.ceil(data.totalNutrients.FASAT.quantity)}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-b py-3">
          <p className="imprima-font text-lg text-gray-600 font-bold">
            Cholestrol
            <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
              {Math.ceil(data.totalDaily.CHOLE.quantity)}g
            </sup>
          </p>
          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
            {Math.ceil(data.totalNutrients.CHOLE.quantity)}%
          </div>
        </div>
        <div className="flex justify-between border-b py-3">
          <p className="imprima-font text-lg text-gray-600 font-bold">
            Sodium
            <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
              {Math.ceil(data.totalDaily.NA.quantity)}g
            </sup>
          </p>
          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
            {Math.ceil(data.totalNutrients.NA.quantity)}%
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between border-b pb-3">
            <p className="imprima-font text-lg text-gray-600 font-bold">
              Total Carbohydrate
              <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                {Math.ceil(data.totalDaily.CHOCDF.quantity)}g
              </sup>
            </p>
            <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
              {Math.ceil(data.totalNutrients.CHOCDF.quantity)}%
            </div>
          </div>
          <div className="">
            <div className="flex justify-end py-2">
              <div className="flex justify-between border-b w-96">
                <p className="imprima-font text-lg text-gray-600">
                  Dietary Fiber
                  <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
                    {Math.ceil(data.totalDaily.FIBTG.quantity)}g
                  </sup>
                </p>
                <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
                  {Math.ceil(data.totalNutrients.FIBTG.quantity)}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="imprima-font text-lg text-gray-600 font-bold">
            Protein
            <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
              {Math.ceil(data.totalDaily.PROCNT.quantity)}g
            </sup>
          </p>
          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
            {Math.ceil(data.totalNutrients.PROCNT.quantity)}%
          </div>
        </div>
        <div className="flex justify-between border-b py-3">
          <p className="imprima-font text-lg text-gray-600 font-bold">
            Vitamin D
            <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
              {Math.ceil(data.totalDaily.VITD.quantity)}g
            </sup>
          </p>
          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
            {Math.ceil(data.totalNutrients.VITD.quantity)}%
          </div>
        </div>
        <div className="flex justify-between border-b py-3">
          <p className="imprima-font text-lg text-gray-600 font-bold">
            Calcium
            <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
              {Math.ceil(data.totalDaily.CA.quantity)}g
            </sup>
          </p>
          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
            {Math.ceil(data.totalNutrients.CA.quantity)}%
          </div>
        </div>
        <div className="flex justify-between border-b py-3">
          <p className="imprima-font text-lg text-gray-600 font-bold">
            Iron
            <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
              {Math.ceil(data.totalDaily.FE.quantity)}g
            </sup>
          </p>
          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
            {Math.ceil(data.totalNutrients.FE.quantity)}%
          </div>
        </div>
        <div className="flex justify-between border-b py-3">
          <p className="imprima-font text-lg text-gray-600 font-bold">
            Potassium
            <sup className="px-3 bg-[#FFE7DE] font-bold rounded text-[#F84605]">
              {Math.ceil(data.totalDaily.K.quantity)}g
            </sup>
          </p>
          <div className="h-6 w-20 bg-[#D1FED6] imprima-font font-bold text-[#00800E] flex justify-center items-center text-sm rounded-md">
            {Math.ceil(data.totalNutrients.K.quantity)}%
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(NutrientFacts)