import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../loader.json";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        className="w-40 h-40"
      />
    </div>
  );
};

export default Preloader;
