import { useEffect, useState } from "react";
import "./App.css";
import RouteComponent from "./Routes";
import { Routes, Route } from "react-router-dom";
import Lottie from "react-lottie";
import * as SplashAnimation from "Assets/LottieFiles/lf30_editor_ln7jeiru.json"
import AOS from "aos"
import Tilt from "vanilla-tilt"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
    Tilt.init();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const defaultSplashAnimation = {
    loop: true,
    autoplay: true,
    animationData: SplashAnimation,
  };

  return (
    <>
      {loading ? (
        <div className="h-[100vh] w-full flex flex-col justify-center items-center">
          <Lottie options={defaultSplashAnimation}  height={200} width={200} />
          <p className="imprima-font">Hmmm!! i'm quite hungry</p>
        </div>
      ) : (
        <>
          <Routes>
            {RouteComponent.map((data) => (
              <Route path={data.path} element={data.element} />
            ))}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
