import React from 'react';
import { Link } from 'react-router-dom';

const cartItems = [
  { id: 1, title: "Product 1", price: 29.99, quantity: 2 },
  { id: 2, title: "Product 2", price: 49.99, quantity: 1 },
];

const CheckoutPage = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>
      
      <div className="grid gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <span className="text-blue-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Link to="/payment-status/success">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
