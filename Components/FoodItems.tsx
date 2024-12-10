import React from "react";
import Image from "next/image";
import { Great_Vibes } from 'next/font/google';


// Import the font with the desired settings
const greatVibesFont = Great_Vibes({
    weight: '400', // You can specify the weight if needed
    subsets: ['latin'], // Specify the subset if needed
  });

const FoodItems = () => {
  return (
    <div className="bg-black">
        <p className="{`${greatVibesFont.className} text-customOrange text-center pt-8 text-[24px] md:text-[32px]`}"> Food Category</p>
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        <span className="text-customOrange">Ch</span>oose Food Item
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className=" rounded-lg p-4 relative">
          <Image
            src="/image9.png" // Replace with your actual image path
            alt="Fast Food Dish"
            width={306}
            height={329}
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="text-sm text-white gap-2 bg-white font-bold">Save 30%</p>
            <h3 className="text-base text-customOrange bg-white font-bold">
              Fast Food Dish
            </h3>
          </div>
        </div>
        {/* Add 3 more items with similar structure, using different image paths */}
        <div className=" rounded-lg p-4">
          <Image
            src="/image10.png" // Replace with your actual image path
            alt="Pizza"
            width={306}
            height={329}
            className="w-full h-auto"
          />
        </div>
        <div className=" rounded-lg p-4">
          <Image
            src="/image11.png" // Replace with your actual image path
            alt="Burger"
            width={306}
            height={329}
            className="w-full h-auto"
          />
        </div>
        <div className=" rounded-lg p-4">
          <Image
            src="/image12.png" // Replace with your actual image path
            alt="Pasta"
            width={306}
            height={329}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
