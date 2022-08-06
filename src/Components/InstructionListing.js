import React from "react";

const InstructionListing = ({ itemArr }) => {
  return (
    <>
      {itemArr.map((item, index) => {
        const bool = index == itemArr.length - 1;
        return (
          <>
            <div className="grid grid-cols-12">
              <div className="relative h-full">
                <div className="h-10 w-10 border border-[#818181] flex items-center justify-center rounded-full text-xs xl:-mt-1 text-[#F84605] ">
                  {index + 1}
                </div>
                {!bool && (
                  <div className=" h-full w-2 mb-4 pt-2">
                    <div className="absolute border-l border-dashed border-[#c9c9c9] pt-6 h-[80%] left-5"></div>
                  </div>
                )}
              </div>
              <p className="pl-6 xl:pl-4 col-span-11 imprima-font text-justify">
                {item.step}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default InstructionListing;
