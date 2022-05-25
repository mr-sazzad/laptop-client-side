import React from "react";
import banner from "../../assets/image/banner.jpg";

const Banner = () => {
  return (
    <div className="flex justify-around items-center mt-12 h-[50vh]">
      <div className="flex-1">
        <img src={banner} alt="laptopImage" />
      </div>
      <div className="flex-1 lg:leading-10">
        <h1 className="text-3xl font-semibold lg:leading-10">
          Stored your honorable<span className="text-orange-600"> laptop</span>
        </h1>
        <h1 className="text-3xl font-semibold lg:leading-10">Because it's a storing website!</h1>
        <button className="btn ring-2 rounded-3xl px-6 mt-3 ring-green-300 font-bold hover:bg-green-200">Store now</button>
      </div>
    </div>
  );
};

export default Banner;
