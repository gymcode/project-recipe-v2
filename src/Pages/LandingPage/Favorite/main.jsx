import "./main.css";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const CardDetails = [
  {
    id: 1,
    duration: "1000"
  },
  {
    id: 2,
    duration: "900"
  },
  {
    id: 3,
    duration: "800"
  },
  {
    id: 4,
    duration: "700"
  },
  {
    id: 5,
    duration: "600"
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
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="kreon-font text-2xl lg:text-3xl xl:text-3xl text-white"
        >
          Favorite Meals
        </h2>
        <h3
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="abel-font text-4xl lg:text-6xl xl:text-6xl mt-6 text-white"
        >
          Enjoy <span className="text-[#F84605]"> preparing</span> the best
          recipes
        </h3>
        <p className="imprima-font text-white mt-5">
          Always take care of your health starting from the food menu that you
          consume everyday
        </p>
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
                  className="h-[40vh] w-full favorite_card rounded-xl"
                >
                  <div>dasdas</div>
                  <div>dsadasd</div>
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
