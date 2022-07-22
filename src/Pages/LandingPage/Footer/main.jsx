import "./main.css";
import "@splidejs/splide/css";
import { Link } from "react-scroll";
import Lottie from "react-lottie";
import * as ScrollToTopAnimation from "Assets/LottieFiles/lf30_editor_rlzi5ome.json";
import Logo from "Assets/Icons/Logo.svg";

const navigation = [
  { name: "Home", href: "home_section", current: true, delay: 0 },
  { name: "About", href: "about_section", current: false, delay: 0.2 },
  { name: "Favorite", href: "favorite_section", current: false, delay: 0.4 },
  { name: "Gallery", href: "gallery_section", current: false, delay: 0.8 },
  { name: "Talk to Us", href: "review_section", current: false, delay: 0.6 },
];

const Links = [
  {
    id: 1,
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-linkedin "
        width="28"
        height="28"
        viewBox="0 0 24 24"
        stroke="#fff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Github",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-github"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        stroke="#fff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Twitter",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-twitter"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        stroke="#fff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Facebook",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-facebook -ml-1"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        stroke="#fff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    ),
  },
];

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
          className="lg:h-[33vh] lg:w-[49vw] xl:h-[33vh] cl:w-[49vw] md:h-[33vh] md:w-[70vw] bg-center bg-cover rounded-lg"
          style={{
            backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/DiscoveryBG_degcbANfc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658444334567")`,
          }}
        >
          dasd
        </div>
      </div>
      <div className="row-span-2 bg-[#FDEDED] px-2 sm:px-4 lg:px-32 py-14 lg:py-10 md:py-10 xl:py-10 hidden md:grid xl:grid lg:grid grid-rows-6">
        <div className="row-span-4 grid grid-cols-6">
          <div className="col-span-4 grid grid-row-3">
            <div>
              <img className="w-auto" src={Logo} alt="Workflow" />
            </div>
            <div className="row-span-2 imprima-font flex space-x-4">
              {navigation.map((item) => (
                <Link to={item.href} smooth>
                  <div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: item.delay,
                    }}
                  >
                    <a
                      key={item.name}
                      className={classNames(
                        item.current
                          ? "border-b text-[#F84605]"
                          : "text-[#F84605] hover:bg-gray-700 hover:text-white",
                        "px-5 py-2 rounded-md text-md font-medium text-lg imprima-font cursor-pointer"
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
              {Links.map((item) => {
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
          <div className="border-t-2 border-[#FAD8D8] w-full" />
        </div>
        <div className="grid grid-cols-6 imprima-font text-[#FFA1A1] text-sm">
          <div className="col-span-4 uppercase">
            COPYRIGHT © 2020 Huate Cuisine. ALL RIGHTS RESERVED. LEGAL POLICIES
          </div>
          <div className="col-span-2 flex justify-between">
            <div className="flex justify-center">
              <div className="h-7 w-7 bg-red-300 mr-3 rounded-full" />
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
    </main>
  );
};

export default FooterComponent;
