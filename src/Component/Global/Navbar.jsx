import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">MyBrand</a>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
          </li>
        </ul>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
