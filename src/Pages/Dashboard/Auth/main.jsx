const AuthenticationComponent = () => {
  return (
    <>
      {/* header  */}
      <div className="flex pt-5 border-b items-center ">
        <div className="text-sm text-gray-400 hover:border-b hover:border-red-700 p-2 px-10">
          Register
        </div>
        <div className="text-sm text-gray-400 ml-6 p-2 px-12 hover:border-b hover:border-red-700">
          Login
        </div>
      </div>
    </>
  );
};

export default AuthenticationComponent;
