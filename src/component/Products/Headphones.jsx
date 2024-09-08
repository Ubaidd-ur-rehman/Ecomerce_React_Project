import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch from Redux
import { addToCart } from "../../Redux/CartAction"; // Import addToCart action
import ProductBanner from "./ProductBanner";
import { Bars } from "react-loader-spinner";

const Headphones = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      axios
        .get("http://localhost:5000/Product?Category=Headphones")
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 1000);
  }, []);

  // Corrected Loader Component Display
  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <Bars
          visible={true}
          height="80"
          width="80"
          ariaLabel="spinner-loading"
          wrapperClass="spinner-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      </div>
    );
  }

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
  };

  const handleNavigate = (ProductId) => {
    navigate(`/SingleProduct/${ProductId}`);
  };

  // Add to Cart handler
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <ProductBanner
        title="Headphones Collection"
        description="Discover the latest and best headphones to enjoy immersive sound quality with unbeatable comfort."
        ImageUrl="/assets/Product/Headphones/whiteHeadphon1.png"
      />

      {/* Products Grid */}
      <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-8">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleNavigate(product.id)}
          >
            {/* Image Wrapper */}
            <div className="relative bg-gray-100  overflow-hidden rounded-t-3xl">
              <img
                src={product.image || "default-image.png"} // Add a fallback image
                alt={product.title}
                className="w-full h-48  sm:h-56 md:h-64 lg:h-72 object-center" // Adjusted class for better image display
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xs uppercase text-gray-500 font-medium tracking-wide">
                  {product.Category || "Unknown Category"}
                </h2>
                <div className="text-lg font-semibold text-gray-800">
                  ${product.Price ? product.Price.toFixed(2) : "0.00"}
                </div>
              </div>
              <h1 className="text-lg font-bold text-gray-900 mt-2">
                {product.title || "Untitled"}
              </h1>
              <p className="text-gray-600 text-sm mt-2">
                {product.description && product.description.length > 80
                  ? `${product.description.substring(0, 80)}...`
                  : product.description || "No description available"}
              </p>
              <button
                onClick={() => handleAddToCart(product)} // Adding onClick to dispatch action
                className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white py-2 px-4 rounded-lg mt-4 hover:opacity-90 transition-transform transform hover:translate-y-1 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMoreProducts}
            className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 w-40 h-12 rounded-xl text-white hover:opacity-90 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Headphones;
