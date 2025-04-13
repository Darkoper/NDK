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
import Mops from "./Pages/WholesalersStore/products/Mop.jsx"
import ToiletBrushes from "./Pages/WholesalersStore/products/ToiletBrush.jsx";
import Ropes from "./Pages/WholesalersStore/products/Ropes.jsx";
import CleaningBrushes from "./Pages/WholesalersStore/products/FeatherBrush.jsx";
import Foil from "./Pages/WholesalersStore/products/Foil.jsx";
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
        <Route path = "/products/Wholesalers-store/Mops" element={<Mops/>}/>
        <Route path = "/products/Wholesalers-store/ToiletBrushes" element={<ToiletBrushes/>}/>
        <Route path = "/products/Wholesalers-store/Ropes" element={<Ropes/>}/>
        <Route path = "/products/Wholesalers-store/CleaningBrushes" element={<CleaningBrushes/>}/>
        <Route path = "/products/Wholesalers-store/AluminiumFoil" element={<Foil/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}