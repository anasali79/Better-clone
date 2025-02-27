import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import img1 from "../assets/Home1.webp";
import img2 from "../assets/Home2.webp";
import img3 from "../assets/Home3.webp";
import img4 from "../assets/Home4.webp";
import calc1 from "../assets/C1.webp";
import calc2 from "../assets/C2.webp";
import calc3 from "../assets/C3.webp";
import calc4 from "../assets/C4.webp";
import guide1 from "../assets/g1.webp";
import guide2 from "../assets/g2.webp";
import guide3 from "../assets/g3.webp";
import guide4 from "../assets/g4.webp";

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("products");

  const products = [
    { title: "Buying your first home with Better", description: "Find the best mortgage rates...", image: img1, isImageLeft: true },
    { title: "One Day Mortgage", description: "Get your commitment letter in one day...", image: img2, isImageLeft: false },
    { title: "Better HELOC", description: "Access up to 90% of your home equity...", image: img3, isImageLeft: true },
    { title: "Insurance", description: "Get the best insurance plans...", image: img4, isImageLeft: false },
  ];

  const calculators = [
    { title: "Mortgage calculator", description: "Estimate your mortgage payments easily.", image: calc1, isImageLeft: true },
    { title: "Affordability calculator", description: "Check how much house you can afford.", image: calc2, isImageLeft: false },
    { title: "HELOC calculator", description: "Calculate home equity loan options.", image: calc3, isImageLeft: true },
    { title: "Fixed-rate loan comparison", description: "Compare different loan types.", image: calc4, isImageLeft: false },
  ];

  const guides = [
    { title: "What is a good debt-to-income ratio for a home loan?", description: "Learn the basics of DTI ratio.", image: guide1, isImageLeft: true },
    { title: "Buying a house without realtor", description: "Thinking about buying a house without an agent? Read this first.", image: guide2, isImageLeft: false },
    { title: "Timeline for homebuying process", description: "Buying a home simplified into 8 steps.", image: guide3, isImageLeft: true },
    { title: "Conventional loan requirements", description: "Understand loan requirements.", image: guide4, isImageLeft: false },
  ];

  const dataToShow = activeTab === "products" ? products : activeTab === "calculators" ? calculators : guides;

  return (
    <div className="max-w-7xl mt-30 mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-5xl font-semibold">Got questions?</h1>
          <h2 className="text-5xl font-semibold text-gray-700">We've got answers</h2>
        </div>

        {/* Updated Buttons with Hover & Active Effects */}
        <div className="flex gap-4">
          {[
            { id: "products", label: "Our products" },
            { id: "calculators", label: "Calculators" },
            { id: "guides", label: "Guides & FAQs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2 border-2 rounded-full transition-all duration-300 overflow-hidden ${
                activeTab === tab.id ? "border-green-600 text-green-600" : "border-gray-400 text-gray-600"
              }`}
            >
              <span className="relative z-10">{tab.label}</span>

              {/* Hover Effect - Green Rounded Corners */}
              <span className="absolute inset-0 flex justify-between items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                <span className="w-4 h-4 rounded-full bg-green-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              </span>

              {/* Active State - Green Outline on Selected Tab */}
              {activeTab === tab.id && (
                <span className="absolute inset-0 border-2 border-green-600 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-1">
          <ProductCard {...dataToShow[0]} />
        </div>
        <div className="md:col-span-2">
          <ProductCard {...dataToShow[1]} />
        </div>
        <div className="md:col-span-2">
          <ProductCard {...dataToShow[2]} />
        </div>
        <div className="md:col-span-1">
          <ProductCard {...dataToShow[3]} />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
