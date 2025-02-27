import React from "react";

const ProductCard = ({ title, description, image, isImageLeft }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg p-6 gap-4">
      {isImageLeft && <img src={image} alt={title} className="w-1/2 rounded-lg" />}
      <div className="flex-1 text-left">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full transition-all duration-300 hover:bg-green-500 hover:border-green-500">
            <span className="text-black transition-all duration-300 hover:text-white">→</span>
          </div>
        </div>
      </div>
      {!isImageLeft && <img src={image} alt={title} className="w-1/2 rounded-lg" />}
    </div>
  );
};

export default ProductCard;
