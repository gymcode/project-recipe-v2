import "./main.css";
import "@splidejs/splide/css";
import { motion } from "framer-motion";

const GalleryComponent = () => {
  return (
    <main
      className="gallery_body px-2 sm:px-6 lg:px-20 xl:px-32 py-24"
      id="gallery_section"
    >
      <div>
        <h2 className="kreon-font text-2xl lg:text-3xl xl:text-3xl">
          Cuisine Gallery
        </h2>
        <h3 className="abel-font text-4xl lg:text-6xl xl:text-6xl mt-6">
          Appreciate some <span className="text-[#F84605]"> amazing</span>{" "}
          photos
        </h3>
      </div>
      <div className="min-h-[66vh] mt-10 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:grid-rows-none lg:grid-rows-none xl:grid-rows-none grid-cols-none grid-rows-3 gap-4">
        <div className="grid md:grid-rows-5 lg:grid-rows-5 xl:grid-rows-5 grid-rows-none grid-cols-2 md:grid-cols-none lg:grid-cols-none xl:grid-cols-none gap-4">
          <motion.div
            whileHover={{ scale: 1.04, borderRadius: "1%" }}
            className="row-span-2 md:row-span-3 xl:row-span-3 lg:row-span-3 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/casey-lee-awj7sRviVXo-unsplash_3WGyBU5dS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658352689064")`,
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center img_text">
              <div className="h-12 w-12 rounded-full border text-[#ff4400] border-white flex items-center justify-center">
                5
              </div>
              <div className="py-3 imprima-font text-center font-bold text-gray-100">
                It doesn't look like the recipe book meal, but a random close-up
                photo of a nice meal won't hurt.
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, borderRadius: "1%" }}
            className="row-span-2 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/dan-gold-5O1ddenSM4g-unsplash_D_2iyTfp6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658351062924")`,
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center img_text">
              <div className="h-12 w-12 rounded-full border text-[#ff4400] border-white flex items-center justify-center">
                1
              </div>
              <div className="py-3 imprima-font font-bold text-gray-100">
                Let's find something to cook
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          whileHover={{ scale: 1.04, borderRadius: "1%" }}
          className="bg-center bg-cover bg-fixed md:bg-local xl:bg-local lg:bg:local"
          style={{
            backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/mae-mu-rgRbqFweGF0-unsplash_dmzXsTHYk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658352689253")`,
          }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center img_text">
            <div className="h-12 w-12 rounded-full border text-[#ff4400] border-gray-200 flex items-center justify-center">
              2
            </div>
            <div className="py-3 imprima-font font-bold text-gray-100 text-md">
              beginning the preparation
            </div>
          </div>
        </motion.div>
        <div className="grid md:grid-rows-5 lg:grid-rows-5 xl:grid-rows-5 grid-rows-none grid-cols-2 md:grid-cols-none lg:grid-cols-none xl:grid-cols-none gap-4">
          <motion.div
            whileHover={{ scale: 1.04, borderRadius: "1%" }}
            className="row-span-2 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/pexels-pixabay-262978_AM-ChpuM4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658353704767")`,
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center img_text">
              <div className="h-12 w-12 rounded-full border text-[#ff4400] border-white flex items-center justify-center">
                4
              </div>
              <div className="py-3 imprima-font font-bold text-gray-100 text-center">
                your fictitious Chef expertly presenting your meal to you
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, borderRadius: "1%" }}
            className="row-span-2 md:row-span-3 xl:row-span-3 lg:row-span-3 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/pexels-cottonbro-3338497__0KMHiiFB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658354063329")`,
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center img_text">
              <div className="h-12 w-12 rounded-full border text-[#ff4400] border-white flex items-center justify-center">
                3
              </div>
              <div className="py-3 imprima-font font-bold text-gray-100">
                garnishing the meal with high-quality spices
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default GalleryComponent;
