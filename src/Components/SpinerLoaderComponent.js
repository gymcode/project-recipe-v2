import Lottie from "react-lottie";
import * as SplashAnimation from "Assets/LottieFiles/Loading-2.json";

const defaultSplashAnimation = {
  loop: true,
  autoplay: true,
  animationData: SplashAnimation,
};

const SpinerLoader = () => {
  return (
    <main className="flex justify-center items-center">
      <Lottie options={defaultSplashAnimation} height={70} width={70} />
      <p className="imprima-font -pl-4 text-sm">Loading...</p>
    </main>
  );
};

export default SpinerLoader;
