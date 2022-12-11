import React from 'react'

const IngregientListing = ({itemArr}) => {
  return (
    <>
      {itemArr.map((item, index) => (
        <>
          <div className="grid grid-cols-12 pb-6 items-center">
            <div className="h-10 w-10 border border-[#818181] flex items-center justify-center rounded-full text-xs xl:-mt-1 text-[#F84605]">
              {index + 1}
            </div>
            <p className="pl-6 xl:pl-4 col-span-11 imprima-font">
              {item.name}
              <span className="text-[#818181]"> ({item.original})</span>
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default React.memo(IngregientListing);
