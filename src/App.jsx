import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import PaymentStatusPage from './pages/PaymentStatusPage';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';  // Import Toaster


const App = () => {
 
  return (
     <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden">
          <header className="bg-white shadow-md">
            <Navbar />
          </header>

          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment-status/:status" element={<PaymentStatusPage />} />
            </Routes>
          </main>
          <Toaster /> 

          <footer className="bg-gray-800 text-white">
            <Footer />
          </footer>
        </div>
      
      </Router>
      </CartProvider>
  );
};

export default App;
