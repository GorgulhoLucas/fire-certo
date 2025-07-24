import React from "react";

const BannerText = () => {
  return (
    <div>
        <div className="absolute bottom-0 left-0 right-0 md:w-2/3 w-full p-4 text-left text-white z-10 bg-black bg-opacity-70 rounded-tr-3xl">
        <div className="p-4 rounded-tr-lg flex items-center">
            <div className="w-12 h-0.5 bg-red-500 mr-2"></div>
            <p className="text-xs md:text-sm text-red-500 mb-1 inline-block">SOBRE NÓS</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk">
            Baterias <span className="text-red-600 font-bold px-1" style={{ textShadow: "1px 1px 2px #ffffff" }}>FIRE</span>
        </h1>
        <p className="mt-2 text-3xl md:text-6xl font-bold font-space-grotesk">A energia que você precisa</p>
        </div>

    </div>
  );
};

export default BannerText;
