import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4EC] text-[#134A27] py-10 px-6 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold">Better</h2>
            <p className="text-sm mt-2">
              Better is a family of companies serving all your homeownership needs.
            </p>
            <ul className="mt-4 space-y-1">
              <li><strong>Better</strong> Mortgage</li>
              <li><strong>Better</strong> Real Estate</li>
              <li><strong>Better</strong> Cover</li>
              <li><strong>Better</strong> Inspect</li>
              <li><strong>Better</strong> Settlement Services</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/calculator" className="footer-link">Mortgage Calculator</Link></li>
              <li><Link to="/our-products" className="footer-link">Our Products</Link></li>
              <li><Link to="/guide-faq" className="footer-link">Guide & FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/media" className="footer-link">Media</Link></li>
              <li><Link to="/partners" className="footer-link">Partner With Us</Link></li>
              <li><Link to="/learning-center" className="footer-link">Learning Center</Link></li>
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/investor-relations" className="footer-link">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Email: hello@better.com</li>
              <li>Phone: 415-523-8837</li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/glossary" className="footer-link">Glossary</Link></li>
            </ul>
            <h3 className="font-semibold mt-4">Legal</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/nmls" className="footer-link">NMLS Consumer Access</Link></li>
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Use</Link></li>
              <li><Link to="/disclosures" className="footer-link">Disclosures & Licensing</Link></li>
              <li><Link to="/business-affiliate" className="footer-link">Affiliated Business</Link></li>
              <li><Link to="/borrower-disclaimer" className="footer-link">Borrower Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <div className="flex space-x-4">
            <a href="#" className="footer-link text-xl"><FaFacebookF /></a>
            <a href="#" className="footer-link text-xl"><FaInstagram /></a>
            <a href="#" className="footer-link text-xl"><FaLinkedinIn /></a>
          </div>
          <p className="mt-4 md:mt-0 text-center md:text-left">
            © 2025 Better Home & Finance Holding Company. All rights reserved.
          </p>
        </div>

        {/* Legal Disclaimers */}
        <div className="text-xs text-gray-700 space-y-4 mt-6">
          <p>
            <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide required financial documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination within 24 hours.
            Approval is subject to additional verification checks. See <Link to="/one-day-mortgage" className="footer-link">One Day Mortgage™ Terms and Conditions</Link>.
          </p>
          <p>
            <sup>2</sup> Better Mortgage’s One Day HELOC™ promotion offers similar benefits for HELOC loans. See <Link to="/one-day-heloc" className="footer-link">One Day HELOC™ Terms and Conditions</Link>.
          </p>
          <p>
            <sup>3</sup> Funding timelines may vary. Automated Valuation Model (AVM) required for fastest service.
          </p>
          <hr className="border-gray-400 my-4" />

          <p>
            Home lending products offered by Better Mortgage Corporation. NMLS #330511. Loans made or arranged pursuant to a California Finance Lenders Law License.
            Not available in all states. <Link to="/nmls" className="footer-link">NMLS Consumer Access</Link>.
          </p>

          <p>
            Better Real Estate, LLC and its affiliates provide real estate services under various state licenses.
            <Link to="/license-numbers" className="footer-link"> View full licensing details.</Link>
          </p>

          <p>
            Better Settlement Services, LLC, Better Cover, LLC, and Better Inspect, LLC are subsidiaries of Better Home & Finance Holding Company.
          </p>

          <p>
            <Link to="/new-york-discrimination" className="footer-link">New York State Housing and Anti-Discrimination Notice</Link> |
            <Link to="/standard-operating" className="footer-link"> Standard Operating Procedures</Link>
          </p>

          <p>
            <Link to="/brokerage-services" className="footer-link">Texas Real Estate Commission Information</Link> |
            <Link to="/consumer-protection" className="footer-link"> Consumer Protection Notice</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
