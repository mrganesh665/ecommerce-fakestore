import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchFeaturedProducts } from '../services/api';

const Homepage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchFeaturedProducts();
      setFeaturedProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div>
      <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/excited-girl-open-up-shopping-bags-gasping-amazed-checking-out-gifts-her-with-happy-face-sta_1258-119591.jpg?t=st=1730923611~exp=1730927211~hmac=609a8b9dd01daabd5ac1c962a529c7a6a217cd7d78299642c5e74a4f2d635a8a&w=1380')" }}>
        <div className="text-center text-white drop-shadow-md">
          <h1 className="text-4xl font-bold">Welcome to eShop</h1>
          <p className="mt-2 text-lg">Find the best products at unbeatable prices</p>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
