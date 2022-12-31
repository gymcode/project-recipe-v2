import { ERROR_TOAST, SUCCESS_TOAST } from 'Components';
import React from 'react'

const IngregientListing = ({itemArr}) => {
  const [ingredient, setIngredient] = React.useState([])
  console.log(ingredient)
  function isSelectedCount (item) {
    if (ingredient.includes(item)) {
     return  ERROR_TOAST(`${item} has already been added. Try something else`) 
    }

    if (ingredient.length > 6) {
      ERROR_TOAST("Cannot add more than 7 items") 
    } else {
      setIngredient([...ingredient, item])
      SUCCESS_TOAST(`${item} has been added for nutritional analysis`)
    }
  }

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
              <span onClick={()=> isSelectedCount(item.original)} className="text-[#818181] cursor-pointer hover:text-[#F84605]">({item.original})</span>
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default React.memo(IngregientListing);
