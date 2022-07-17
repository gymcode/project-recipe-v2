import { NAVIGATION_BAR } from "Components";
import "./main.css";

const LandingPageComponent = () => {
  return (
    <div className="landing_page_body">
      <header>
        <NAVIGATION_BAR />
      </header>
      <body className="px-2 sm:px-6 lg:px-32">
        <div className="mt-20">
          <h1 className="text-[5.7rem] xs:text[2rem] sm:text[2rem] abel-font capitalize leading-[7rem]">
            Simple and tasty <br /> recipe
          </h1>
        </div>
        <div className="w-[35%] mt-8 xs:w-[50%] xs:mt-4 imprima-font text-[#959595]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            debitis expedita sed incidunt. Exercitationem aut molestias illo,
            modi est in illum minus deleniti officia recusandae neque
            consequuntur nihil, consectetur commodi? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quod ullam harum facere explicabo
            voluptatessidontknow, eligendi dolorum nam aut impedit sequi! Cupiditate
            tempora maiores ab in dolor, facilis atque voluptas aperiam.
          </p>
        </div>
      </body>
    </div>
  );
};

export default LandingPageComponent;
