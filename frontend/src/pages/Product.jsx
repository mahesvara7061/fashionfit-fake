import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Product = () => {
  const { productId } = useParams(); // Access productId from route parameters
  const { products } = useContext(ShopContext); // Access products from context
  const [productData, setProductData] = useState(null); // State for product data

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/api/product/search?keyword=${productId}&search_fields=ProductId`);
      if (res.data.success && res.data.products.length > 0) {
        setProductData(res.data.products[0]);
      } else {
        setProductData(null);
      }
    } catch (error) {
      console.error("There was an error fetching the product!", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const res = await axios.post('http://127.0.0.1:5000/api/cart/add', {
        userId: userId,
        productId: productId,
        quantity: 1,
      });

      if (res.status === 201) {
        toast.success("Product added to cart successfully!");
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Failed to add product to cart.");
    }
  };

  if (!productData) {
    return (
      <p className="text-center text-gray-500">
        Loading product details or product not found.
      </p>
    );
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100">
      {/* Product Detail */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Image Section */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <img
            src={productData.ImageURL}
            alt={productData.ProductTitle || 'Product Image'}
            className="w-full sm:w-[80%] h-auto object-cover border border-gray-300"
          />
          <button
            onClick={() => {
              const htmlFilePath = 'http://127.0.0.1:8080/project/fashionfit-fake/frontend/src/assets/try-on.html'; // Path to the HTML file served on port 8080
              const productImageUrl = encodeURIComponent(productData.ImageURL);
              window.location.href = `${htmlFilePath}?productImage=${productImageUrl}`;
            }}
            className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-600"
          >
            Try On Now!
          </button>
        </div>

        {/* Product Info Section */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.ProductTitle}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src="/assets/star_icon.png"
                alt="Star"
                className="w-5"
              />
            ))}
            <img
              src="/assets/star_dull_icon.png"
              alt="Dull Star"
              className="w-5"
            />
          </div>

          <p className="mt-5 text-3xl font-medium">
            {productData.PriceVND} {productData.currency?.symbol || '₫'}
          </p>

          <p className="mt-5 text-gray-500">{productData.Description_Paragraph}</p>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-10 py-2 rounded-md mt-8"
          >
            Add to Cart
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery Available</p>
            <p>14 Days Return Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
