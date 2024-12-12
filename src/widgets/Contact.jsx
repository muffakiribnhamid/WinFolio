import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 border border-gray-300 shadow-md rounded-md p-4 w-80 mx-auto mt-10">
      <div className="bg-blue-600 text-white rounded-t-md px-3 py-1 flex justify-between items-center">
        <p className="text-sm">Contact Me</p>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">Get in touch:</p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-800 text-lg" />
            <a
              href="mailto:muffakir63@gmail.com"
              className="text-blue-600 hover:underline"
            >
              muffakir63@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaPhone className="text-gray-800 text-lg" />
            <a
              href="tel:+916006849629"
              className="text-blue-600 hover:underline"
            >
              +91 6006849629
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-500 text-lg" />
            <span className="text-gray-800">Jammu and Kashmir, India</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
