import "./main.css";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const CardDetails = [
  {
    id: 1,
    name: "Chicken and tomato salad",
    img_path:
      "https://ik.imagekit.io/yz8iaxzer/farhad-ibrahimzade-KpOl9jV2aJM-unsplash_N3nlhqobg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658255850707",
    duration: "600",
  },
  {
    id: 2,
    name: "Grilled salmon with vegatables",
    img_path:
      "https://ik.imagekit.io/yz8iaxzer/ca-creative-bpPTlXWTOvg-unsplash_zPwCjixvr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658255848601",
    duration: "700",
  },
  {
    id: 3,
    name: "Burger with tomatoes and lettuce",
    img_path:
      "https://ik.imagekit.io/yz8iaxzer/ben-kim-JjzjBLmANVA-unsplash_3Y6OQqpS9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658255848418",
    duration: "800",
  },
  {
    id: 4,
    name: "Bread with sunny side up egg and sausage",
    img_path:
      "https://ik.imagekit.io/yz8iaxzer/tanaphong-toochinda-FlY6QZzvXM0-unsplash_apVWJT57P.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658255848907",
    duration: "900",
  },
  {
    id: 5,
    name: "Pancake with strawberry and blueberries",
    img_path:
      "https://ik.imagekit.io/yz8iaxzer/sam-moghadam-khamseh-yxZSAjyToP4-unsplash_cn1XLL8Jp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658255847215",
    duration: "1000",
  },
];

const FavoriteComponent = () => {
  return (
    <main
      className="favorite_body px-2 sm:px-6 lg:px-32 py-24 lg:py-28 md:py-28 xl:py-28"
      id="favorite_section"
    >
      <div>
        <h2
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="kreon-font text-2xl lg:text-3xl xl:text-3xl text-white"
        >
          Favorite Meals
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="abel-font text-4xl lg:text-6xl xl:text-6xl mt-6 text-white"
        >
          Enjoy <span className="text-[#F84605]"> preparing</span> the best
          recipes
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
      {/* card section  */}
      <div className="flex justify-center pt-16">
        <Splide
          options={{
            pagination: false,
            width: "82vw",
            fixedWidth: "18rem",
            arrows: false,
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
                <div
                  data-aos="zoom-in-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration={item.duration}
                  data-aos-delay = "500"
                  className="h-[40vh] w-full favorite_card rounded-xl grid grid-rows-4"
                >
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
      <div className="w-full mt-10 lg:mt-20 md:mt-20 xl:mt-20 flex justify-center items-center">
        <div className="abel-font h-16 w-52 bg-[#F84605] text-white text-lg flex justify-center items-center">
          Explore more...
        </div>
      </div>
    </main>
  );
};

export default FavoriteComponent;
