import "./main.css";
import Logo from "Assets/Icons/Logo.svg";

const NotFoundPage = () => {
  return (
    <main className="grid grid-cols-7 not-found">
      <div className="col-span-5 img_section h-[100vh] bg-cover bg-center" />
      <div className="col-span-2 pr-16">
        <div className="flex justify-end py-10">
          <img
            className="block h-10 w-auto"
            src={Logo}
            alt="Workflow"
          />
        </div>
        <div className="h-[80vh] flex flex-col items-center justify-center">
          <div
            className="bg-center bg-cover min-h-[30vh] min-w-[20vw]"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/undraw_page_not_found_re_e9o6_2MptQnv21.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661284993864")`,
            }}
          />
          <p className="text-center pt-2 imprima-font text-2xl">Page not found</p>
          <p className="imprima-font text-gray-500 text-center pt-5">
            Awww don't get lost soo soon :(. there's a lot more to see and
            prepare. just look to your left :).
          </p>
          <div className="mt-20 flex">
            <div className="h-[3vw] w-44 col-span-3 bg-[#F84605] text-white flex justify-center items-center abel-font font-bold rounded">
              Let's go back home
            </div>
            <div className="ml-3 h-[3vw] w-20 border border-[#F84605] flex justify-center items-center rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-wand"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#F84605"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 21 21 6 18 3 3 18 6 21"></polyline>
                <line x1="15" y1="6" x2="18" y2="9"></line>
                <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
