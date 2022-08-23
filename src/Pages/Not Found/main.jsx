import "./main.css";

const NotFoundPage = () => {
  return (
    <main className="grid grid-cols-7 not-found">
      <div className="col-span-5 img_section h-[100vh] bg-cover bg-center" />
      <div className="col-span-2 pr-16">
        <div className="flex justify-end py-10">Logo goes here</div>
        <div className="h-[70vh] flex flex-col items-center justify-center">
          <div
            className="bg-center bg-cover min-h-[30vh] min-w-[20vw]"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/undraw_page_not_found_re_e9o6_2MptQnv21.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661284993864")`,
            }}
          />
          <p className="imprima-font text-gray-500 text-center pt-5">Awww don’t get lost soo soon :(. there’s a lot more to see and prepare. just look to your left :).</p>
          <div className="mt-5 flex">
            <div className="h-[3vw] w-40 col-span-3 bg-red-300 flex justify-center items-center">asdsa</div>
            <div className="ml-3 h-[3vw] w-20 bg-yellow-300 flex justify-center items-center">dasda</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
