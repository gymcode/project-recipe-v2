import "./main.css";
import "@splidejs/splide/css";
import { Link } from "react-scroll";
import Lottie from "react-lottie";
import * as ScrollToTopAnimation from "Assets/LottieFiles/lf30_editor_rlzi5ome.json";
import Logo from "Assets/Icons/Logo.svg";
import { FooterNavLinks, FooterSocialLinks } from "Helpers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FooterComponent = () => {
  const defaultScrollToTopAnimation = {
    loop: true,
    autoplay: true,
    animationData: ScrollToTopAnimation,
  };

  return (
    <main
      className="footer_body
     grid grid-rows-5"
      id="footer_section"
    >
      <div className="row-span-3 px-2 sm:px-6 lg:px-32 py-24 lg:py-28 md:py-28 xl:py-28  flex justify-center items-center">
        <div
          className="lg:h-[33vh] lg:w-[49vw] xl:h-[33vh] xl:w-[49vw] md:h-[33vh] md:w-[70vw] min-h-[35vh] w-11/12 bg-center bg-cover rounded-lg text-center"
          style={{
            backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/DiscoveryBG_degcbANfc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658444334567")`,
          }}
        >
          <div className="mt-8">
            <div className="text-white kreon-font text-2xl">
              Help discover a new level
            </div>
            <div className="text-black abel-font text-4xl lg:text-6xl xl:text-6xl">
              Send me feed back
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-6 rounded-md shadow-sm">
              <textarea
                type="text"
                name="email"
                id="email"
                placeholder="Say something ....."
                className="block h-20 w-[65vw] md:w-[40vw] lg:w-[25vw] xl:w-[25vw] p-2 sm:text-sm border-gray-300 rounded-md outline-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-2 bg-[#FDEDED] px-2 sm:px-4 lg:px-32 py-14 lg:py-10 md:py-10 xl:py-10 hidden md:grid xl:grid lg:grid grid-rows-6">
        <div className="row-span-4 grid grid-cols-6">
          <div className="col-span-4 grid grid-row-3">
            <div>
              <img className="w-auto" src={Logo} alt="Workflow" />
            </div>
            <div className="row-span-2 imprima-font flex space-x-4">
              {FooterNavLinks.map((item) => (
                <Link to={item.href} smooth>
                  <div>
                    <a
                      key={item.name}
                      className={classNames(
                        item.current
                          ? "border-b text-[#F84605]"
                          : "text-[#F84605] hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-md font-medium text-lg imprima-font cursor-pointer"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 grid grid-row-3">
            <div className="flex mt-2">
              {FooterSocialLinks.map((item) => {
                return (
                  <>
                    <div className="flex justify-center items-center h-10 w-10 bg-[#f3551b] rounded-full mr-5">
                      {item.svg}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="row-span-2 imprima-font">
              <h2 className="text-lg mt-10 text-[#F84605] mb-2">
                Contact details
              </h2>
              <div className="flex mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FFA1A1"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="mx-4 text-sm text-[#FFA1A1]">
                  +233 26 821 1334
                </div>
              </div>
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FFA1A1"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="mx-4 text-sm text-[#FFA1A1]">
                  kyleabs20@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="border-t-2 border-[#FAD8D8] w-full"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          />
        </div>
        <div className="grid grid-cols-6 imprima-font text-[#FFA1A1] text-sm lg:py-2 xl:py-0">
          <div className="col-span-4 uppercase">
            COPYRIGHT © 2020 Huate Cuisine. ALL RIGHTS RESERVED.
          </div>
          <div className="col-span-2 flex justify-between">
            <div className="flex justify-center">
              <div
                className="h-7 w-7 mr-3 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/dan-gold-5O1ddenSM4g-unsplash_D_2iyTfp6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658351062924")`,
                }}
              />
              <p className="mt-1">by kenneth lartey abrahams</p>
            </div>
            <div>
              <Link to="home_section" smooth>
                <Lottie
                  options={defaultScrollToTopAnimation}
                  height={40}
                  width={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden xl:hidden md:hidden bg-[#FDEDED] min-h-[50vh] px-2 pt-10">
        <div className="flex flex-col items-center">
          <div>
            <img className="w-auto h-12" src={Logo} alt="Workflow" />
          </div>
          <div className="flex mt-8">
            {FooterSocialLinks.map((item) => {
              return (
                <>
                  <div className="flex justify-center items-center h-8 w-8 bg-[#f3551b] rounded-full mr-5">
                    {item.svg}
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-between items-center">
            <div className="row-span-2 imprima-font mt-8 flex space-x-4">
              {FooterNavLinks.map((item) => (
                <Link to={item.href} smooth>
                  <div>
                    <a
                      key={item.name}
                      className={classNames(
                        item.current
                          ? "border-b text-[#F84605]"
                          : "text-[#F84605] hover:bg-gray-700 hover:text-white",
                        "py-2 rounded-md text-md font-medium text-lg imprima-font cursor-pointer"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between text-sm mt-10 imprima-font text-[#FFA1A1]">
          <div className="flex justify-center">
            <div
              className="h-7 w-7 mr-3 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/images/dan-gold-5O1ddenSM4g-unsplash_D_2iyTfp6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658351062924")`,
              }}
            />
            <p className="mt-1">by kenneth lartey abrahams</p>
          </div>
          <div>
            <Link to="home_section" smooth>
              <Lottie
                options={defaultScrollToTopAnimation}
                height={40}
                width={50}
              />
            </Link>
          </div>
        </div>
        <div className="border-t-2 border-[#FAD8D8] w-full my-2" />
        <div className="uppercase imprima-font text-[#FFA1A1] text-sm text-center">
          COPYRIGHT © 2020 Huate Cuisine. ALL RIGHTS RESERVED.
        </div>
      </div>
    </main>
  );
};

export default FooterComponent;
