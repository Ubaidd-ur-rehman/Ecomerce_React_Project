import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductBanner from "./ProductBanner";
import { Navigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { useDispatch } from "react-redux";
const Speaker = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      axios
        .get("http://localhost:5000/Product?Category=Speakers")
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
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
  return (
    <div className="p-8 cursor-pointer">
      <ProductBanner
        title="Speaker Collection"
        description="Browse our Speaker Collection for powerful sound and modern design."
        ImageUrl="/assets/Product/Speaker/SpeakerBanner.png"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              onClick={() => {
                handleNavigate(product.id);
              }}
              key={product.id}
              className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="bg-gray-100 h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-sm uppercase text-gray-500 font-medium">
                  {product.category}
                </h2>
                <h1 className="text-xl font-semibold text-gray-900 mt-2">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-sm mt-3">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <p className="text-lg font-bold text-gray-800 mt-4">
                  ${product.Price} <span>USD</span>
                </p>
                <div onClick={() => handleAddToCart(product)}>
                  <button className="mt-6 w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                    Check It Out
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default Speaker;
