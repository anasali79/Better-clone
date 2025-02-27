import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MortgageCalculator from "./pages/MortgageCalculator";
import Start from "./pages/Start";
import Testimonial from "./components/Testimonial";
import OurProducts from "./pages/OurProducts";
import BuyingHome from "./components/BuyingHome";
import RefinanceMortgage from "./pages/RefinanceMortgage";
import GetCashPage from "./pages/GetCashPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/calculator" element={<MortgageCalculator />} />
        <Route path="/start" element={<Start />} />
        <Route path="/buying-home" element={<BuyingHome />} />
        <Route path="/refinance-mortgage" element={<RefinanceMortgage />} />
        <Route path="/get-cash" element={<GetCashPage />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/OurProducts" element={<OurProducts />} />
    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
