import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* About Us Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">About Us</h2>
            <p className="mb-4">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
                &#8635;
              </div>
              <div className="ml-4">
                <p className="font-bold">Opening Hours</p>
                <p>Mon - Sat (8:00 - 6:00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>
          
          {/* Useful Links Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Useful Links</h2>
            <ul>
              <li className="mb-2">About</li>
              <li className="mb-2">News</li>
              <li className="mb-2">Partners</li>
              <li className="mb-2">Team</li>
              <li className="mb-2">Menu</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
          
          {/* Help Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Help?</h2>
            <ul>
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Term & Condition</li>
              <li className="mb-2">Reporting</li>
              <li className="mb-2">Documentation</li>
              <li className="mb-2">Support Policy</li>
              <li className="mb-2">Privacy</li>
            </ul>
          </div>
          
          {/* Recent Post Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Recent Post</h2>
            <div className="flex items-center mb-4">
              <img src="/image1.jpg" alt="Post 1" className="w-16 h-16 mr-4"/>
              <div>
                <p className="font-bold">Is fastfood good for your body?</p>
                <p>February 28, 2022</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/image1.jpg" alt="Post 2" className="w-16 h-16 mr-4"/>
              <div>
                <p className="font-bold">Change your food habit with organic food</p>
                <p>February 28, 2022</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/image1.jpg" alt="Post 3" className="w-16 h-16 mr-4"/>
              <div>
                <p className="font-bold">Do you like fastfood for your life?</p>
                <p>February 28, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-customGray text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <FaTwitter className="text-xl hover:text-blue-500 cursor-pointer" />
            <FaFacebook className="text-xl hover:text-blue-700 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;