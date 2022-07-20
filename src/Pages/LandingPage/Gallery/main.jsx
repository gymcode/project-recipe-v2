import "./main.css";
import "@splidejs/splide/css";

const GalleryComponent = () => {
  return (
    <main
      className="gallery_body px-2 sm:px-6 lg:px-32 py-24 lg:py-28 md:py-28 xl:py-28"
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
        <div
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
          className="imprima-font text-white mt-5"
        >
          Always take care of your health starting from the food menu that you
          consume everyday
        </div>
      </div>
      <div className="">

      </div>
    </main>
  );
};

export default GalleryComponent;
