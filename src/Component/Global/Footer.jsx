import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">MyBrand</h2>
          <p className="text-gray-400">© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-300">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
