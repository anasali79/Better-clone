"use client"

import { useEffect, useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaPhone, FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
  const location = useLocation()
  const [navbarStyle, setNavbarStyle] = useState({
    bg: "bg-[#004733] text-white",
    shadow: "",
    showButton: false,
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section")

      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom

        if (heroBottom <= 0) {
          // User has scrolled past the hero section
          setNavbarStyle({
            bg: "bg-white text-black",
            shadow: "shadow-md",
            showButton: true,
          })
        } else {
          // User is still on the hero section
          setNavbarStyle({
            bg: "bg-[#004733] text-white",
            shadow: "",
            showButton: false,
          })
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`w-full py-4 px-4 md:px-8 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${navbarStyle.bg} ${navbarStyle.shadow}`}
    >
      {/* Logo - Always visible */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">Better</span>
      </div>

      {/* Desktop Navigation Links - Hidden on mobile */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-lg font-medium">
        <Link to="/" className="hover:text-gray-500 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-500 transition-colors">
          About
        </Link>
        <Link to="/calculator" className="hover:text-gray-500 transition-colors">
          Calculator
        </Link>
        <Link to="/Testimonial" className="hover:text-gray-500 transition-colors">
          Testimonial
        </Link>
        <Link to="/OurProducts" className="hover:text-gray-500 transition-colors">
          Our Products
        </Link>
      </div>

      {/* Right Side - Call Icon + Sign In + Get Started Button */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Call Icon */}
        <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
          <FaPhone size={18} />
        </div>

        {/* Sign In - Hidden on small mobile */}
        <Link to="/signin" className="hidden sm:block text-lg font-medium">
          Sign in
        </Link>

        {/* Get Started Button - Only shown when scrolled past hero on desktop */}
        {navbarStyle.showButton && (
          <Link
            to="/start"
            className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-green-600 transition-all"
          >
            Get Started
          </Link>
        )}

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden flex items-center justify-center ml-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Overlay */}
      {isMenuOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" />}

      {/* Mobile Menu - Slide in from right */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full sm:w-80 bg-white text-black z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <span className="text-2xl font-bold">Better</span>
          <button onClick={toggleMenu} className="text-black">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          <Link to="/" className="text-xl font-medium hover:text-gray-600" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="text-xl font-medium hover:text-gray-600" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/calculator" className="text-xl font-medium hover:text-gray-600" onClick={toggleMenu}>
          Calculator
          </Link>
          <Link to="/Testimonial" className="text-xl font-medium hover:text-gray-600" onClick={toggleMenu}>
          Testimonial
          </Link>
          <Link to="/OurProducts" className="text-xl font-medium hover:text-gray-600" onClick={toggleMenu}>
          Our Products
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
          <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-full py-3 px-6">
            <FaPhone />
            <span className="font-medium">Call us anytime at (415) 523 88371</span>
          </div>

          <Link
            to="/start"
            className="block bg-green-500 text-white text-center py-3 px-6 rounded-full font-medium hover:bg-green-600 transition-all"
            onClick={toggleMenu}
          >
            Get started
            <div className="text-sm font-normal text-center">3 min | No credit impact</div>
          </Link>

          <Link
            to="/signin"
            className="block text-center py-3 px-6 rounded-full border font-medium hover:bg-gray-100 transition-all"
            onClick={toggleMenu}
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar