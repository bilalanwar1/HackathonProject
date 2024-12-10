import React from 'react';
import Image from 'next/image';

const ChoosSection = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <Image
                src="/image10.png" // Replace with your actual image path
                alt="Image 1"
                width={300}
                height={200}
                className="rounded-lg mb-4 sm:mb-0"
              />
              <Image
                src="/img8.jpg" // Replace with your actual image path
                alt="Image 2"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 sm:ml-8">
              <Image
                src="/img3.jpg" // Replace with your actual image path
                alt="Image 3"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <Image
                src="/image11.png" // Replace with your actual image path
                alt="Image 4"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-4xl font-bold text-white mb-4"><span className="text-customOrange">Ex</span>traordinary Taste<br />And Experienced</h1>
            <p className="text-lg text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Ums, ellt Huque uma vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mis viis Lacus nii, et ac dapibus sit eu velit in consequat</p>
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <i className="fas fa-hamburger text-3xl text-customOrange"></i>
                <p className="text-lg text-white">Fast Food</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-cookie-bite text-3xl text-customOrange"></i>
                <p className="text-lg text-white">Lunch</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-wine-glass-alt text-3xl text-customOrange"></i>
                <p className="text-lg text-white">Dinner</p>
              </div>
            </div>
            <div className="bg-customOrange text-white py-4 px-8 rounded-lg mt-8">
              <p className="text-lg">30+ Years of Experienced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosSection;