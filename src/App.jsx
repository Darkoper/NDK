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
import Foil from "./Pages/WholesalersStore/products/Foil.jsx";
import BottleBrush  from "./Pages/WholesalersStore/products/BottleBrush.jsx";
import BroomSticks  from "./Pages/WholesalersStore/products/BroomSticks.jsx";
import BucketMops from "./Pages/WholesalersStore/products/BucketMops.jsx";
import ButterPapers from "./Pages/WholesalersStore/products/ButterPapers.jsx";
import ChokeRemover from "./Pages/WholesalersStore/products/ChokeRemover.jsx";
import FeatherBrush from "./Pages/WholesalersStore/products/FeatherBrush.jsx";
import CleanignBrush from "./Pages/WholesalersStore/products/CleanignBrush.jsx";
import Cliphangers from "./Pages/WholesalersStore/products/Cliphangers.jsx";
import ClothBrush from "./Pages/WholesalersStore/products/ClothBrush.jsx";
import ClothClip from "./Pages/WholesalersStore/products/ClothClip.jsx";
import Dustpan from "./Pages/WholesalersStore/products/Dustpan.jsx";
import FaceTissue from "./Pages/WholesalersStore/products/FaceTissue.jsx";
import Footscrubber from "./Pages/WholesalersStore/products/Footscrubber.jsx";
import Hooks from "./Pages/WholesalersStore/products/Hooks.jsx";
import JalaBrush from "./Pages/WholesalersStore/products/jalaBrush.jsx";
import KitchenRolls from "./Pages/WholesalersStore/products/KitchenRolls.jsx";
import Lofa from "./Pages/WholesalersStore/products/Lofa.jsx";
import MagicBrush from "./Pages/WholesalersStore/products/MagicBrush.jsx";
import Napkins from "./Pages/WholesalersStore/products/Napkins.jsx";
import Scrubber from "./Pages/WholesalersStore/products/Scrubber.jsx";
import SinkBrush from "./Pages/WholesalersStore/products/SinkBrush.jsx";
import TileBrushes from "./Pages/WholesalersStore/products/TileBrushes.jsx";
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
        <Route path = "/products/Wholesalers-store/CleaningBrushes" element={<FeatherBrush/>}/>
        <Route path = "/products/Wholesalers-store/AluminiumFoil" element={<Foil/>}/>
        <Route path = "/products/Wholesalers-store/BottleBrush" element={<BottleBrush/>}/>
        <Route path = "/products/Wholesalers-store/BroomSticks" element={<BroomSticks/>}/>
        <Route path = "/products/Wholesalers-store/BucketMops" element={<BucketMops/>}/>
        <Route path = "/products/Wholesalers-store/ButterPapers" element={<ButterPapers/>}/>
        <Route path = "/products/Wholesalers-store/ChokeRemover" element={<ChokeRemover/>}/>
        <Route path = "/products/Wholesalers-store/CleaningBrush" element={<CleanignBrush/>}/>
        <Route path = "/products/Wholesalers-store/ClipHangers" element={<Cliphangers/>}/>
        <Route path = "/products/Wholesalers-store/ClothBrush" element={<ClothBrush/>}/>
        <Route path = "/products/Wholesalers-store/ClothClips" element={<ClothClip/>}/>
        <Route path = "/products/Wholesalers-store/Dustpan" element={<Dustpan/>}/>
        <Route path = "/products/Wholesalers-store/FaceTissue" element={<FaceTissue/>}/>
        <Route path = "/products/Wholesalers-store/FootScrubber" element={<Footscrubber/>}/>
        <Route path = "/products/Wholesalers-store/Hooks" element={<Hooks/>}/>
        <Route path = "/products/Wholesalers-store/JalaBrushes" element={<JalaBrush/>}/>
        <Route path = "/products/Wholesalers-store/Kitchenrolls" element={<KitchenRolls/>}/>
        <Route path = "/products/Wholesalers-store/Loofa" element={<Lofa/>}/>
        <Route path = "/products/Wholesalers-store/MagicBrushes" element={<MagicBrush/>}/>
        <Route path = "/products/Wholesalers-store/Napkins" element={<Napkins/>}/>
        <Route path = "/products/Wholesalers-store/Scrubber" element={<Scrubber/>}/>
        <Route path = "/products/Wholesalers-store/SinkBrushes" element={<SinkBrush/>}/>
        <Route path = "/products/Wholesalers-store/TileBrushes" element={<TileBrushes/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}