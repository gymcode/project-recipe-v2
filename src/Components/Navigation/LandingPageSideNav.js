import "../main.css";
import { Link } from "react-scroll";
import {LandingPageSideNavLinks} from "Helpers"

const DashboardSideNav = () => {
  return (
    <div>
      <ol>
        {LandingPageSideNavLinks.map((item) => (
          <Link to={item.href} smooth>
            <li
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration={item.duration}
              data-aos-delay={item.delay}
              className="h-10 w-10 link_bg cursor-pointer rounded-full hover:bg-[#5e5e5e] hover:transition hover:duration-700 hover:ease-in-out flex items-center justify-center my-7"
            >
              {item.svg}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default DashboardSideNav;
