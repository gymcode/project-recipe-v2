import React from 'react'

const InstructionListing = ({ itemArr }) => {
  const [isLast, setIsLast] = React.useState(false)
    console.log(isLast)
  React.useEffect(()=>{
    const lastItem = itemArr.length -1
    itemArr.forEach((item, index) => {
        console.log(index)
        index == lastItem ? setIsLast(true) : setIsLast(false)
    });
    

  }, [])
  return (
    <>
      {itemArr.map((item, index) => (
        <>
          <div className="grid grid-cols-12 pb-12 ">
            <div className="relative  h-full">
              <div className="h-10 w-10 border border-[#818181] flex items-center justify-center rounded-full text-xs xl:-mt-1 text-[#F84605]">
                {index + 1}
              </div>
              <div className="absolute border-l border-[#c9c9c9] h-[85%] mt-3 left-5" />
            </div>
            <p className="pl-4 col-span-11 imprima-font">
              {item.content}
              <span className="text-[#818181]">(1.5 table spoons)</span>
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default InstructionListing;
