import "./main.css";
import "@splidejs/splide/css";
import Tilt from "react-vanilla-tilt";

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
      <div className="h-[82%] mt-10 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:grid-rows-none lg:grid-rows-none xl:grid-rows-none grid-cols-none grid-rows-3 gap-4">
        <div className="grid md:grid-rows-5 lg:grid-rows-5 xl:grid-rows-5 grid-rows-none grid-cols-2 md:grid-cols-none lg:grid-cols-none xl:grid-cols-none gap-4">
          <div
            className="row-span-2 md:row-span-3 xl:row-span-3 lg:row-span-3 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/casey-lee-awj7sRviVXo-unsplash_3WGyBU5dS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658352689064")`,
            }}
          ></div>
          <div
            className="row-span-2 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/dan-gold-5O1ddenSM4g-unsplash_D_2iyTfp6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658351062924")`,
            }}
          >
            das
          </div>
        </div>
        <div
          className="bg-center bg-cover bg-fixed md:bg-local xl:bg-local lg:bg:local"
          style={{
            backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/mae-mu-rgRbqFweGF0-unsplash_dmzXsTHYk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658352689253")`,
          }}
        >
          dsfs
        </div>
        <div className="grid md:grid-rows-5 lg:grid-rows-5 xl:grid-rows-5 grid-rows-none grid-cols-2 md:grid-cols-none lg:grid-cols-none xl:grid-cols-none gap-4">
          <div
            className="row-span-2 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/pexels-pixabay-262978_AM-ChpuM4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658353704767")`,
            }}
          >
            dasd
          </div>
          <div
            className="row-span-2 md:row-span-3 xl:row-span-3 lg:row-span-3 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/pexels-cottonbro-3338497__0KMHiiFB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658354063329")`,
            }}
          >
            das
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryComponent;
