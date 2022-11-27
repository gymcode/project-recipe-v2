const colors = ['#D3E0FF', '#FFD3D3', "#DCFFD3"]

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

const NutritionalInformation = ({ itemArr }) => {
    return (
        <>
            {
                itemArr.map((item, index) => (
                    <div
                        style={{ backgroundColor: colors.random() }}
                        className="px-4 mx-3 my-2 bg-red-600 rounded-full flex">
                        <div className="border-r-2 border-white px-2">
                            {item.name}
                        </div>
                        <div className="px-2">
                            {item.amount}{item.unit}
                        </div>
                    </div>
                )
                )
            }
        </>
    );
};

export default NutritionalInformation;
