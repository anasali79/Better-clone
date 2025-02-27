import { useState } from "react";
import customerImg from "../assets/bro.webp"; // Replace with actual image
import amandaImg from "../assets/Amanda.webp"; // Replace with actual image
import paulImg from "../assets/Paul.webp"; // Replace with actual image

const testimonials = {
  customer: {
    img: customerImg,
    text: "The easiest way I decided to go through with my mortgage was through Better. I literally clicked a button and I was done.",
    name: "Customer",
  },
  amanda: {
    img: amandaImg,
    text: "Amanda’s experience with Better was smooth and stress-free. She couldn’t believe how easy the process was!",
    name: "Amanda",
  },
  paul: {
    img: paulImg,
    text: "Paul saved thousands on his mortgage and got approved in record time. A game-changer!",
    name: "Paul",
  },
};

const Testimonial = () => {
  const [selected, setSelected] = useState("customer");

  return (
    <section className="bg-gray-100 py-16 mt-30 text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        
        {/* Left: Dynamic Image & Name Buttons */}
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src={testimonials[selected].img}
            alt={testimonials[selected].name}
            className="w-72 rounded-lg shadow-lg transition-all duration-300"
          />
          
          {/* Name Buttons Below Image */}
          <div className="mt-4 flex gap-4">
            {Object.keys(testimonials).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`px-4 py-2 rounded-md font-semibold ${
                  selected === key
                    ? "bg-green-700 text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
                }`}
              >
                {testimonials[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Testimonial Text */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-left md:pl-12">
          <h2 className="text-7xl font-semibold font-family['Druk Wide Bold']">Find out why we’re better.</h2>
          <p className="text-gray-700 mt-4">{testimonials[selected].text}</p>

          {/* Buttons */}
          <div className="mt-6">
            <button className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition">
              See all our stories →
            </button>
            <p className="text-gray-500 mt-2">⭐ Trustpilot: Excellent 4.4 out of 5</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
