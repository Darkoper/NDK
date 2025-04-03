import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact.jsx";
import HomeKeeping from "./Pages/Homekeeping";
import WholesalersStore from "./Pages/WholesalersStore/WholesalersStore.jsx";
import Footer from "./Components/Footer.jsx";
import Hangers from "./Pages/WholesalersStore/products/Hangers.jsx";
import Wipers from "./Pages/WholesalersStore/products/Wipers.jsx"
import SprayBottles from "./Pages/WholesalersStore/products/SprayBottles.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/home-keeping" element={<HomeKeeping />} />
        <Route path = "/products/Wholesalers-store" element={<WholesalersStore/>}/>
        <Route path = "/products/Wholesalers-store/Hangers" element={<Hangers/>}/>
        <Route path = "/products/Wholesalers-store/Wipers" element={<Wipers/>}/>
        <Route path = "/products/Wholesalers-store/SprayBottles" element={<SprayBottles/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}