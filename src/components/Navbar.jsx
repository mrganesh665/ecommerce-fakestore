import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        <Link to="/" className="text-2xl font-bold">
          eShop
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/products" className="hover:text-blue-400">Products</Link>
          <Link to="/cart" className="hover:text-blue-400">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
