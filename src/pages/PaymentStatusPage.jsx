import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PaymentStatusPage = () => {
  const { status } = useParams();
  const isSuccess = status === 'success';

  return (
    <div className="container mx-auto py-10 text-center">
      {isSuccess ? (
        <div className="text-green-600">
          <h1 className="text-3xl font-semibold">Payment Successful!</h1>
          <p className="mt-4 text-lg">Thank you for your purchase.</p>
        </div>
      ) : (
        <div className="text-red-600">
          <h1 className="text-3xl font-semibold">Payment Failed</h1>
          <p className="mt-4 text-lg">There was an issue with your payment. Please try again.</p>
        </div>
      )}
      
      <Link to="/products">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default PaymentStatusPage;
