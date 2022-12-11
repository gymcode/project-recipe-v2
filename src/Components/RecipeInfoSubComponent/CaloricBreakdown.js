import React from 'react'

const CaloricBreakdownComponent = ({proteinPercentage, fatPercentage, carbPercentage}) => {
  return (
    <div className="grid grid-cols-3 gap-4 h-20 mb-5 mt-2">
      <div className="bg-[#DCFFD3] rounded p-2 xl:pl-4">
        <p className="imprima-font">Protein</p>
        <p className="main-font text-3xl text-green-600">{proteinPercentage}%</p>
      </div>
      <div className="bg-[#FFD3D3] rounded p-2 xl:pl-4">
        <p className="imprima-font">Fat</p>
        <p className="main-font text-3xl text-red-600">{fatPercentage}%</p>
      </div>
      <div className="bg-[#D3E0FF] rounded p-2 xl:pl-4">
        <p className="imprima-font">Carbohydrate</p>
        <p className="main-font text-3xl text-blue-600">{carbPercentage}%</p>
      </div>
    </div>
  );
};

export default React.memo(CaloricBreakdownComponent);
