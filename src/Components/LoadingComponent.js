import Lottie from "react-lottie";
import * as SplashAnimation from "Assets/LottieFiles/lf30_editor_ln7jeiru.json";

const defaultSplashAnimation = {
  loop: true,
  autoplay: true,
  animationData: SplashAnimation,
};

const Loader = () => {
  return (
    <main className="min-h-[100vh] w-full flex flex-col justify-center items-center">
      <Lottie options={defaultSplashAnimation} height={200} width={200} />
      <p className="imprima-font">We getting there....</p>
    </main>
  );
};

export default Loader;
