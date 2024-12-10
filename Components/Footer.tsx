import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full bg-black flex flex-col items-center py-8">
        <div className="w-full max-w-[1169px] flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left mb-4">
          {/* Text Section */}
          <div className="flex flex-col lg:w-2/3 mb-4 lg:mb-0">
            <div className="text-white font-bold text-3xl mb-2">
              <span className="text-custom-color">St</span>ill You Need Our Support?
            </div>
            <p className="font-normal text-base text-white">
              Don’t wait, make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          {/* Subscribe Section */}
          <div className="flex justify-center items-center w-full lg:w-1/3 mt-4 lg:mt-0 border-b-red-600">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-black px-4 py-2 w-72 "
            />
            <button className="text-white bg-customOrange px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
