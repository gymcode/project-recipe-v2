import "./main.css";
import "@splidejs/splide/css";
import Logo from "Assets/Icons/Logo.svg";

const FooterComponent = () => {
  return (
    <main className="footer_body grid grid-rows-5" id="footer_section">
      <div className="row-span-3 px-2 sm:px-6 lg:px-32 py-24 lg:py-28 md:py-28 xl:py-28">
        fds
      </div>
      <div className="row-span-2 bg-[#FDEDED] px-2 sm:px-4 lg:px-32 py-14 lg:py-10 md:py-10 xl:py-10 hidden md:grid xl:grid lg:grid grid-rows-6">
        <div className="row-span-4 bg-white grid grid-cols-6">
          <div className="col-span-4 bg-yellow-300 grid grid-row-3">
            <div>
              <img
                className="w-auto"
                src={Logo}
                alt="Workflow"
              />
            </div>
            <div className="row-span-2 imprima-font">
              <h2 className="text-lg">Contact details</h2>
              <div>dfsd</div>
              <div>das</div>
            </div>
          </div>
          <div className="col-span-2 bg-yellow-200 grid grid-row-3">
            <div>fsd</div>
            <div className="row-span-2 imprima-font">
              <h2 className="text-lg">Contact details</h2>
              <div>dfsd</div>
              <div>das</div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="border-t-2 border-[#FAD8D8] w-full" />
        </div>
        <div className="grid grid-cols-6 imprima-font text-[#FFA1A1] text-sm">
          <div className="col-span-4 uppercase">
            COPYRIGHT © 2020 Huate Cuisine. ALL RIGHTS RESERVED. LEGAL POLICIES
          </div>
          <div className="col-span-2 flex ">
            <div className="h-7 w-7 bg-red-300 mr-3 rounded-full" />
            <p className="mt-1">by kenneth lartey abrahams</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FooterComponent;
