import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api'; // Assuming this function fetches data based on ID
import { useCart } from '../context/CartContext';


 
const ProductDetailPage = () => {
  const { addToCart } = useCart();

  const { id } = useParams(); // Get the product ID from the URL

console.log(id); // This should output the ID from the URL like "1", "2", etc.

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const productData = await fetchProductById(id); // Fetch the product data
      setProduct(productData);
    };

    getProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>; // Loading state while fetching the product

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center">
        <img src={product.image} alt={product.title} className="w-80 h-80 object-cover rounded-lg mb-6 md:mb-0" />
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">{product.title}</h2>
          <p className="text-xl font-bold text-blue-600 mt-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <button   onClick={() =>{ addToCart(product); toast.success("Product added Successfully");}}   className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
