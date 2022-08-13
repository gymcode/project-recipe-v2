import "./main.css";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const AboutText = {
  title: "About Us",
};

const AboutUsComponent = () => {
  return (
    <main
      className="about_us_body px-2 sm:px-6 lg:px-20 xl:px-32 py-12 sm:py-24 lg:py-28 md:py-28 xl:py-28"
      id="about_section"
    >
      {/* for larger screens */}
      <div className="hidden lg:grid grid-cols-5 gap-10 min-h-[78vh]">
        <div className="col-span-3 relative max-h-[82vh]">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="lg:absolute left-0 top-0"
          >
            <motion.div
              whileHover={{ rotateY: 10, rotateY: -10, rotateZ: -10 }}
              className="lg:w-[37vw] lg:h-[42vh] shadow-2xl bg-cover bg-center shadow-[#fad1c3]"
            >
              <div
                className="w-full bg-cover bg-center h-full"
                style={{
                  backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/quinton-coetzee-Rbj3xNaweVc-unsplash_1_FBo9MYRa9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658355263151")`,
                }}
              />
            </motion.div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-delay="10"
            className="absolute bottom-0 right-1"
          >
            <motion.div
              whileHover={{ rotateY: -10, rotateY: 10, rotateZ: 10 }}
              className="lg:w-[37vw] lg:h-[42vh] shadow-2xl shadow-[#fdd5c7]"
            >
              <div
                className="w-full bg-cover bg-center h-full"
                style={{
                  backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/pexels-cottonbro-4253312_knmKol9J-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658177121737")`,
                }}
              />
            </motion.div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:py-28">
          <h2 className="kreon-font text-3xl">{AboutText.title}</h2>
          <h3 className="abel-font text-6xl mt-6">
            Why we are the <span className="text-[#F84605]">best </span>
          </h3>
          <div className="imprima-font text-[#959595] text-justify mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repellendus animi corrupti perspiciatis, id ratione exercitationem
            odit nesciunt ipsum minus nihil. Quia expedita ad voluptatem quam
            laboriosam repellat minus esse? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Cum tempora nam officia nisi
            cupiditate illo accusamus quo voluptatem, odio fugiat. Quis
            consequatur eligendi minus fuga soluta sunt illum laborum corrupti.
          </div>
        </div>
      </div>

      {/* for lesser screens */}
      <div className="block lg:hidden">
        <div className="">
          <h2
            data-aos="zoom-in-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="kreon-font text-2xl text-center"
          >
            {AboutText.title}
          </h2>
          <h3
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="abel-font text-4xl mt-2 text-center"
          >
            Why we are the <span className="text-[#F84605]">best </span>
          </h3>
        </div>
        <div className="mt-10">
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-full bg-cover bg-center h-64 md:h-[26rem]"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/pexels-ready-made-3847709_Azn8bjB8C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658177206859")`,
            }}
          />
        </div>
        <div className="pt-12">
          <p className="imprima-font text-[#959595] text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repellendus animi corrupti perspiciatis, id ratione exercitationem
            odit nesciunt ipsum minus nihil. Quia expedita ad voluptatem quam
            laboriosam repellat minus esse? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Cum tempora nam officia nisi
            cupiditate illo accusamus quo voluptatem, odio fugiat. Quis
            consequatur eligendi minus fuga soluta sunt illum laborum corrupti.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUsComponent;
