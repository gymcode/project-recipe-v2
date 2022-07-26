
const IngregientListing = ({itemArr}) => {
  return (
    <>
      {itemArr.map((item, index) => (
        <>
          <div className="grid grid-cols-12 pb-6 items-center">
            <div className="h-10 w-10 border border-[#818181] flex items-center justify-center rounded-full text-xs xl:-mt-1 text-[#F84605]">
              {index}
            </div>
            <p className="pl-4 col-span-11 imprima-font">
              {item.name}
              <span className="text-[#818181]">(1.5 table spoons)</span>
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default IngregientListing;
