import React from 'react';
import Image from 'next/image';

// Define a type for the item prop to ensure it's structured properly
type MenuItem = {
  name: string;
  description: string;
  calories: string;
  price: string;
  highlight?: boolean; // Optional highlight for special styling
};

type StarterMenuProps = {
  title: string;
  items: MenuItem[];
  imageUrl: string;
  reverse?: boolean; // Optional prop to reverse the layout
};

const StarterMenu: React.FC<StarterMenuProps> = ({ title, items, imageUrl, reverse }) => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[1320px] h-[628px] bg-white mt-6 overflow-hidden flex">
        {/* Image Section */}
        <div className={`w-[448px] h-[626px] flex-shrink-0 ${reverse ? 'order-2' : ''}`}>
          <Image
            src={imageUrl}
            alt="StarterMenu"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Menu Section */}
        <div className="w-[760px] h-[626px] flex-shrink-0 p-8">
          <h1 className="text-3xl font-bold mb-6 text-left hover:text-customOrange">
            {title}
          </h1>
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index}>
                {/* Menu Item */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2
                      className={`text-xl font-bold ${
                        item.highlight ? 'text-black hover:text-customOrange' : 'hover:text-customOrange'
                      }`}
                    >
                      {item.name}
                    </h2>
                    <p className="text-gray-400">{item.description}</p>
                    <p className="text-gray-500">{item.calories}</p>
                  </div>
                  <div className="text-yellow-500 text-xl">{item.price}</div>
                </div>
                {index < items.length - 1 && <hr className="border-gray-300" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterMenu;
