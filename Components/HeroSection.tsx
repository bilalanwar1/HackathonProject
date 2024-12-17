import React from 'react';
import { Great_Vibes } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

// Import the font with the desired settings
const greatVibesFont = Great_Vibes({
  weight: '400', // You can specify the weight if needed
  subsets: ['latin'], // Specify the subset if needed
});

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between p-8 bg-black">
        {/* Left Side Content */}
        <div className="pt-8 pl-2 text-white bg-black w-full md:w-[50%]">
          {/* Apply the custom font directly using greatVibesFont.className */}
          <p className={`${greatVibesFont.className} text-customOrange text-[24px] md:text-[32px]`}>
            It&apos;s Quick & Amusing!
          </p>
          <h1 className="font-bold text-3xl md:text-5xl">
            <span className="text-customOrange">Th</span>e Art of speed
            <br />
            food Quality
          </h1>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Varius sed pharetra dictum neque massa congue
          </p>
          <button className="bg-customOrange p-2 mt-2 mb-2 rounded-2xl text-sm md:text-base">
            Sign up
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end">
          <Link href="/items-of-food" passHref>
            <Image
              src="/Image.png"
              alt="items-of-food"
              width={418}
              height={48}
              className="mb-4"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
