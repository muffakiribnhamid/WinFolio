import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="bg-gray-100 border border-gray-300 shadow-md rounded-md p-4 w-80 mx-auto mt-10">
      <div className="bg-blue-600 text-white rounded-t-md px-3 py-1 flex justify-between items-center">
        <p className="text-sm">Socials</p>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">Here are some of my socials:</p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center space-x-2">
            <FaGithub className="text-gray-800 text-lg" />
            <a
              href="https://github.com/muffakiribnhamid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaInstagram className="text-pink-600 text-lg" />
            <a
              href="https://instagram.com/muffakir_hamid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Instagram
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaTwitter className="text-blue-500 text-lg" />
            <a
              href="https://x.com/HamidMuffakir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;