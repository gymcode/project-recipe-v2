import "./main.css";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardDetails = [
  {
    id: 1,
    name: "Chicken and tomato salad",
    img_path:
      "https://i.postimg.cc/QdqVQJ19/farhad-ibrahimzade-Kp-Ol9j-V2a-JM-unsplash-N3nlhqobg.jpg",
    duration: "600",
  },
  {
    id: 2,
    name: "Grilled salmon with vegatables",
    img_path:
      "https://i.postimg.cc/pLPKMTBj/ca-creative-bp-PTl-XWTOvg-unsplash-z-Pw-Cjixvr.jpg",
    duration: "700",
  },
  {
    id: 3,
    name: "Burger with tomatoes and lettuce",
    img_path:
      "https://i.postimg.cc/j2kB09pw/ben-kim-Jjzj-BLm-ANVA-unsplash-3-Y6-OQqp-S9.jpg",
    duration: "800",
  },
  {
    id: 4,
    name: "Bread with sunny side up egg and sausage",
    img_path:
      "https://i.postimg.cc/K85wm1hh/tanaphong-toochinda-Fl-Y6-QZzv-XM0-unsplash-ap-VWJT57-P.jpg",
    duration: "900",
  },
  {
    id: 5,
    name: "Pancake with strawberry and blueberries",
    img_path:
      "https://i.postimg.cc/0jq06C7W/sam-moghadam-khamseh-yx-ZSAjy-To-P4-unsplash-cn1-XLL8-Jp.jpg",
    duration: "1000",
  },
];

const FavoriteComponent = () => {
  return (
    <main
      className="favorite_body px-2 sm:px-6 lg:px-20 xl:px-32 py-24 lg:py-28 md:py-28 xl:py-28"
      id="favorite_section"
    >
      <div>
        <h2 className="kreon-font text-2xl lg:text-3xl xl:text-3xl text-white">
          Favorite Meals
        </h2>
        <h3 className="abel-font text-4xl lg:text-6xl xl:text-6xl mt-6 text-white">
          Enjoy <span className="text-[#F84605]"> preparing</span> the best
          recipes
        </h3>
        <div className="imprima-font text-white mt-5">
          Always take care of your health starting from the food menu that you
          consume everyday
        </div>
      </div>
      {/* card section  */}
      <div className="flex justify-center pt-16">
        <Splide
          options={{
            pagination: false,
            width: "82vw",
            fixedWidth: "18rem",
            arrows: true,
            gap: "2rem",
            breakpoints: {
              1020: {
                width: "90vw",
                fixedWidth: "15rem",
                pagination: true,
              },
            },
          }}
        >
          {CardDetails.map((item) => (
            <>
              <SplideSlide>
                <div className="h-[40vh] w-full favorite_card rounded-xl grid grid-rows-4">
                  <div className="row-span-3 flex justify-center items-center">
                    <div
                      className="h-[24vh] w-[24vh] bg-cover bg-center rounded-full shadow-xl"
                      style={{
                        backgroundImage: `url(${item.img_path})`,
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-start text-center text-white text-2xl imprima-font">
                    {item.name}
                  </div>
                </div>
              </SplideSlide>
            </>
          ))}
        </Splide>
      </div>
      <Link to={"/dashboard"}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.9,
            borderRadius: "2%",
          }}
          className="w-full mt-10 lg:mt-20 md:mt-20 xl:mt-20 flex justify-center items-center"
        >
          <div className="abel-font h-16 w-52 bg-[#F84605] text-white text-lg flex justify-center items-center">
            Explore more...
          </div>
        </motion.div>
      </Link>
    </main>
  );
};

export default FavoriteComponent;
