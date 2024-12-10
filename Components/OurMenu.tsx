import React from 'react';
import Image from 'next/image';

const OurMenu = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">From Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
         

          
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Lunch</h3>
            {/* Add lunch items here */}
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Dinner</h3>
            {/* Add dinner items here */}
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Dessert</h3>
            {/* Add dessert items here */}
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Drink</h3>
            {/* Add drink items here */}
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Snack</h3>
            {/* Add snack items here */}
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Soups</h3>
            {/* Add soup items here */}
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Breakfast</h3>
            </div>
        </div>
         {/* Left Column */}
         <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/img15.png" // Replace with your actual image path
              alt="Salad"
              width={300}
              height={300}
              className="rounded-lg"
            />
         

          {/* Right Columns (Menu Items) */}
          
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Image
                  src="/image10.png" // Replace with your actual image path
                  alt="Lettuce Leaf"
                  width={50}
                  height={50}
                  className="rounded-lg mr-4"
                />
                
                  <h4 className="text-lg flex flex-col font-bold">Lettuce Leaf</h4>
                  <p className="text-white">Lacus nisl, et ac dapibus velit in consequat.</p>
                  <p className="text-lg text-customOrange font-bold">$12.50</p>
                </div>
              

              <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Image
                  src="/image10.png" // Replace with your actual image path
                  alt="Lettuce Leaf"
                  width={50}
                  height={50}
                  className="rounded-lg mr-4"
                />
                
                  <h4 className="text-lg flex flex-col font-bold">Lettuce Leaf</h4>
                  <p className="text-white">Lacus nisl, et ac dapibus velit in consequat.</p>
                  <p className="text-lg text-customOrange font-bold">$12.50</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Image
                  src="/image10.png" // Replace with your actual image path
                  alt="Lettuce Leaf"
                  width={50}
                  height={50}
                  className="rounded-lg mr-4"
                />
                
                  <h4 className="text-lg flex flex-col font-bold">Lettuce Leaf</h4>
                  <p className="text-white">Lacus nisl, et ac dapibus velit in consequat.</p>
                  <p className="text-lg text-customOrange font-bold">$12.50</p>
                </div>
              </div>
               </div>
              {/* Add more breakfast items here */}
            </div>
            
          </div>
          <div>
      </div>
    </div>
  );
};

export default OurMenu;