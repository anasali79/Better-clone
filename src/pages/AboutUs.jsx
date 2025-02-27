import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import softbank from "../assets/softbank.png";
import ally from "../assets/ally.png";
import citi from "../assets/citi.png";
import pingan from "../assets/pingan.png";
import goldmansachs from "../assets/goldmansachs.png";
import kpcb from "../assets/kpcb.png";
import americanexpress from "../assets/americanexpress.png";

const AboutUs = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="bg-[#f9f9f3] min-h-screen flex flex-col justify-center items-center px-6">
      {/* Mission Section */}
      <section className="text-center max-w-4xl mx-auto my-20 w-full">
        <h3 className="text-green-700 text-4xl mt-40 font-medium">Our mission</h3>
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mt-20 leading-snug">
          We’re making homeownership simpler, faster —
          <br className="hidden md:block" />
          and most importantly, more accessible for all Americans.
        </h2>
      </section>

      {/* Status Quo Section */}
      <section className="bg-[#f9f9f3] flex flex-col md:flex-row justify-between items-center gap-10 px-6 py-20 my-20 w-full max-w-6xl">
        <div className="max-w-lg text-start">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            The status quo is broken
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="mt-6 bg-green-700 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition">
            Read Vishal’s story
          </button>
        </div>
        <div
          className={`relative w-full max-w-lg transition-all duration-500 ${isVideoPlaying ? "scale-110" : "scale-100"}`}
        >
          {!isVideoPlaying ? (
            <div className="relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
              <img
                src="https://img.youtube.com/vi/1KjYlLBM9j4/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="w-full h-64 md:h-80 rounded-md"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-black bg-opacity-50 rounded-full p-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-72 md:h-96 rounded-md"
              src="https://www.youtube.com/embed/1KjYlLBM9j4?autoplay=1"
              title="Vishal Garg Video"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </section>


      {/* How We're Changing Things Section */}
      <section className="bg-[#017848] text-white px-6 py-20 w-full">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold">How we’re changing things</h2>
          <p className="text-lg mt-6 leading-relaxed">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers’.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            That’s why Better.com is redefining the homeownership process from
            the ground up. We’re using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </section>



      {/* Investors Section */}
      <section className="bg-[#f9f9f3] py-16 flex flex-col items-center">
        <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold mt-30 mb-10">Backed by</h2>
        <div className="flex flex-wrap justify-center gap-96 mt-20 md:gap-16 px-6 max-w-6xl">
          {[softbank, ally, citi, pingan, goldmansachs, kpcb, americanexpress].map((logo, index) => (
            <img key={index} src={logo} alt="Investor Logo" className="h-10 md:h-12" />
          ))}
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="bg-[#f9f9f3] py-20 w-full">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">Company Timeline</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          {[
            { year: "2014", text: "Better.com was founded to make homebuying easier and cheaper." },
            { year: "2015", text: "Better Mortgage funds its first mortgage loan entirely online." },
            { year: "2016", text: "Becomes a Fannie Mae approved seller + servicer." },
            { year: "2017", text: "Expands into real estate with Better Real Estate." },
            { year: "2018", text: "Partners with Ally Bank to build Ally powered by Better." },
            { year: "2019", text: "Launches partnership with American Express." },
            { year: "2021", text: "Acquires Trussle, UK's online mortgage broker." },
            { year: "2022", text: "Funds $100B home loans entirely online." },
            { year: "2023", text: "Launches One Day Mortgage." },
            { year: "TODAY", text: "You become part of the story by joining thousands of happy homeowners!", isToday: true },
          ].map((item, index) => (
            <div key={index} className="relative flex flex-col items-center my-8">
              {item.year && <div className="bg-green-700 text-white text-lg font-semibold px-4 py-2 rounded-full">{item.year}</div>}
              <div className="w-3 h-3 absolute left-1/2 transform -translate-x-1/2 mt-2 rounded-full "></div>
              <div className={`bg-gray-100 text-gray-700 p-6 rounded-lg max-w-md shadow-md mt-6 ${index % 2 === 0 ? "self-start ml-6" : "self-end mr-6"} ${item.isToday ? "bg-green-100 border border-green-700" : ""}`}>
                <p>{item.text}</p>
                {item.isToday && <button onClick={() => navigate("/start")} className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition">GET STARTED</button>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
