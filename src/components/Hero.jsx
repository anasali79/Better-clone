import { FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa"
import HeroImage from "../assets/hero.webp"
import GoogleLogo from "../assets/google.png"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div
      id="hero-section"
      className="relative w-full h-screen bg-[#004733] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Main Heading - Positioned at top on mobile, centered on desktop */}
      <div className="absolute top-[30%] md:top-[20%] text-[#71E5A3] font-bold text-[40px] xs:text-[50px] sm:text-[64px] md:text-[80px] leading-tight font-['Druk_Wide_Bold'] z-20">
        <h1>Mortgages</h1>
        <h2 className="mt-[-10px] font-['Druk_Wide_Bold']">made simple</h2>
      </div>

      {/* Centered Image */}
      <div className="relative mt-[40px] md:mt-[110px] z-10">
        <img
          src={HeroImage || "/placeholder.svg"}
          alt="Phone showing mortgage approval"
          className="w-[220px] xs:w-[260px] md:w-[400px] lg:w-[480px]"
        />
      </div>

      {/* Bottom Section - Stacked on mobile, side by side on larger screens */}
      <div className="absolute bottom-[5%] sm:bottom-[10%] w-full px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
        {/* Left Side Button & Clock Text */}
        <div className="flex flex-col items-center sm:items-start order-2 sm:order-1">
          <button
            onClick={() => navigate("/start")}
            className="bg-[#3ED598] text-black px-6 py-3 rounded-full text-lg font-semibold"
          >
            Start my approval
          </button>
          <div className="flex items-center gap-2 mt-2 text-white text-sm">
            <FaRegClock /> <span>3 min | No credit impact</span>
          </div>
        </div>

        {/* Right Side Google Rating */}
        <div className="flex flex-col sm:flex-row items-center text-white gap-2 order-1 sm:order-2">
          <img src={GoogleLogo || "/placeholder.svg"} alt="Google" className="w-7 h-7" />
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
          </div>
          <span className="text-sm ml-0 sm:ml-2 text-center sm:text-left">4.6 Stars | 3177 Google reviews</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection