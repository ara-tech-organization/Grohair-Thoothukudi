import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import HairTreatmentDetail from "./pages/HairTreatmentDetail";
import SkinTreatmentDetail from "./pages/SkinTreatmentDetail";

export default function App() {
  return (
    <BrowserRouter basename="/Grohair-Thoothukudi">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/hair-treatment" element={<Services />} />
          <Route path="/Skin-treatment" element={<Services />} />
          <Route path="/services/hair/:slug" element={<HairTreatmentDetail />} />
          <Route path="/services/skin/:slug" element={<SkinTreatmentDetail />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
