// src/pages/CartPage.js

import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CartPage = () => {
  const { cartItems, removeFromCart, calculateTotal } = useCart();
  const navigate = useNavigate();

  // Function to handle checkout redirection
  const handleProceedToCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </div>
            <button 
              onClick={() => {removeFromCart(item.id); toast.error("Product removed Successfully"); }} 
            
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="text-right font-bold text-xl mt-6">
          Total: ${calculateTotal()}
        </div>

        {/* Proceed to Checkout Button */}
        <div className="mt-8 text-right">
          <button 
            onClick={handleProceedToCheckout} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
