import "./main.css";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const AboutText = {
  title: "About Us",
  mid_section: "Why we are the best",
};

const AboutUsComponent = () => {
  return (
    <div
      className="about_us_body px-2 sm:px-6 lg:px-32 py-28"
      id="about_section"
    >
      {/* for larger screens */}
      <div className="hidden lg:grid md:grid grid-cols-5 gap-10 h-full">
        <div className="col-span-3 relative">
          <div data-aos="fade-down-right" className="absolute left-0 top-0">
            <motion.div
              whileHover={{ rotateY: 10, rotateY: -10, rotateZ: -10 }}
              className="lg:w-[44rem] md:w-[30rem] lg:h-[28rem] md:h-[18rem] shadow-2xl bg-cover bg-center shadow-[#fad1c3]"
            >
              <div
                className="w-full bg-cover bg-center h-full"
                style={{
                  backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/pexels-ready-made-3847709_Azn8bjB8C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658177206859")`,
                }}
              />
            </motion.div>
          </div>
          <div data-aos="fade-up-left" className="absolute bottom-0 right-1">
            <motion.div
              whileHover={{ rotateY: -10, rotateY: 10, rotateZ: 10 }}
              className="lg:w-[44rem] md:w-[30rem] lg:h-[28rem] md:h-[18rem] shadow-2xl shadow-[#fdd5c7]"
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
        <div className="col-span-2 py-24">
          <h2 data-aos="zoom-in-down" className="kreon-font text-3xl">{AboutText.title}</h2>
          <h3 data-aos="zoom-in-up" className="abel-font text-6xl mt-6">{AboutText.mid_section}</h3>
        </div>
      </div>

      {/* for lesser screens */}
      <div className="block lg:hidden md:hidden">
        <div className="">
          <h2 className="kreon-font text-2xl text-center">{AboutText.title}</h2>
          <h3 className="abel-font text-4xl mt-2 text-center">
            {AboutText.mid_section}
          </h3>
        </div>
        <div className="mt-10">
          <div
            className="w-full bg-cover bg-center h-60"
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
    </div>
  );
};

export default AboutUsComponent;
