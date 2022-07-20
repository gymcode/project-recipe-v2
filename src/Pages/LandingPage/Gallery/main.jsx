import "./main.css";
import "@splidejs/splide/css";
import Tilt from "react-vanilla-tilt"

const GalleryComponent = () => {
  return (
    <main
      className="gallery_body px-2 sm:px-6 lg:px-32 py-24"
      id="gallery_section"
    >
      <div>
        <h2
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="kreon-font text-2xl lg:text-3xl xl:text-3xl"
        >
          Cuisine Gallery
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="abel-font text-4xl lg:text-6xl xl:text-6xl mt-6"
        >
          Appreciate some <span className="text-[#F84605]"> amazing</span>{" "}
          photos
        </h3>
      </div>
      <div className="h-[82%] mt-10 hidden md:grid lg:grid xl:grid grid-cols-3 gap-4">
        <div className="grid grid-rows-5 gap-4">
          <div className="row-span-3 bg-yellow-300 relative">
            <div></div>
          </div>
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className="row-span-2 bg-violet-400">das</div>
        </div>
        <div className="bg-green-500">dsfs</div>
        <div className="grid grid-rows-5 gap-4">
          <div className="row-span-2 bg-blue-400">dasd</div>
          <div className="row-span-3 bg-gray-400">das</div>
        </div>
      </div>
    </main>
  );
};

export default GalleryComponent;
