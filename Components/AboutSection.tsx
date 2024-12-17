import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="flex flex-wrap p-8 bg-black text-white">
      {/* Left Side Content */}
      <div className="w-full md:w-[562px] h-full p-4 flex flex-col justify-between">
        <h2 className="text-customOrange italic">About us</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-customOrange">
          We Create the best foody product
        </h1>
        <p className="mt-4 text-base leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start">
            <span className="text-customOrange mr-2">✔</span> Lacus nisi, et ac
            dapibus sit eu velit in consequat.
          </li>
          <li className="flex items-start">
            <span className="text-customOrange mr-2">✔</span> Quisque diam
            pellentesque bibendum non dui volutpat fringilla
          </li>
          <li className="flex items-start">
            <span className="text-customOrange mr-2">✔</span> Lorem ipsum dolor
            sit amet, consectetur adipiscing elit
          </li>
        </ul>
        <Link href="#">
          <span className="inline-block mt-4 px-6 py-3 bg-customOrange text-black rounded hover:bg-customOrange transition">
            Read More
          </span>
        </Link>
      </div>

      {/* Right Side Images */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
        <Image src="/img6.jpg" alt="Food 1" width={660} height={330} className="w-full h-auto mb-4" />
        <div className="flex  space-y-4">
          <Image src="/img7.jpg" alt="Food 2" width={660} height={330} className="w-full h-auto mb-2" />
          <Image src="/img8.jpg" alt="Food 3" width={660} height={330} className="w-full h-auto mb-2" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
