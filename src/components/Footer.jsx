import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 flex flex-col content-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ml-20">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">eShop</h3>
          <p className="text-gray-400">
            Your one-stop destination for all your shopping needs. Discover a wide range of products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-400 hover:text-white">Products</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul>
            <li>
              <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
            </li>
            <li>
              <Link to="/returns" className="text-gray-400 hover:text-white">Returns</Link>
            </li>
            <li>
              <Link to="/shipping" className="text-gray-400 hover:text-white">Shipping</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} eShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
