// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="h-64 flex justify-center items-center bg-gray-50 p-4">
          <img 
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between h-44">
        <div className="mb-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-gray-800 font-semibold text-lg truncate">{product.title}</h3>
          </Link>
          <p className="text-gray-500 text-sm capitalize mt-1">{product.category}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-xl">${product.price.toFixed(2)}</span>
          <button 
            onClick={() =>{ addToCart(product); toast.success("Product added Successfully");}} 
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
