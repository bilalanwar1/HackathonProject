import React from 'react';
import Image from 'next/image';

const StatsSection = () => {
  return (
    <div className="bg-black text-white py-12 pt-4 mb-4">
      <div className="container mx-auto flex justify-around items-center space-x-4">
        <div className="flex flex-col items-center">
          <Image src="/Group.png" alt="Page" width={40} height={40} className="mb-4" />
          <p className="text-4xl font-bold">420</p>
          <p className="text-lg">Professional Chefs</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Page-1.png" alt="Page" width={40} height={40} className="mb-4" />
          <p className="text-4xl font-bold">320</p>
          <p className="text-lg">Items Of Food</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Vector.png" alt="vector" width={40} height={40} className="mb-4" />
          <p className="text-4xl font-bold">30+</p>
          <p className="text-lg">Years Of Experienced</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Group-1.png" alt="Page" width={40} height={40} className="mb-4" />
          <p className="text-4xl font-bold">220</p>
<<<<<<< HEAD
          <p className="text-lg">Happy Customers </p>
=======
          <p className="text-lg">Happy Customers</p>
>>>>>>> e128186c34899842aa7d9e3b1cd96cda469f7517
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
