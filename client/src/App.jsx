import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Makeup from "./pages/Makeup";
import Hair from "./pages/Hair";

import MakeoverDetails from "./pages/services/MakeoverPage";
import BoudoirPage from "./pages/services/BoudoirPage";
import CakeSmashDetails from "./pages/services/CakesmashDetails";
import FamilyDetails from "./pages/services/FamilyDetails";
import PortraitsPage from "./pages/services/PortraitsPage";
import BabyBump from "./pages/services/BabyBump";
import Newborn from "./pages/services/Newborn";




function App() {
  const ScrollToAnchor = () => {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);

    return null;
  };
  return (
    <>
      <Navbar />
      <div>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services/makeup" element={<Makeup />} />
          <Route path="/services/hair" element={<Hair />} />

          <Route path="/services/portrait" element={<PortraitsPage />} />
          <Route path="/services/makeover" element={<MakeoverDetails />} />
          <Route path="/services/boudoir" element={<BoudoirPage />} />
          <Route path="/services/cake-smash" element={<CakeSmashDetails />} />
          <Route path="/services/family" element={<FamilyDetails />} />
          <Route path="/services/baby-bump" element={<BabyBump />} />
          <Route path="/services/newborn" element={<Newborn />} />
          

          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
