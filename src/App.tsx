import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/beranda";
import Gallery from "./pages/galeri-sekolah";
import Profile from "./pages/profil-sekolah";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Program from "./pages/program-sekolah/page";
import SchoolExpenses from "./pages/program-sekolah/biaya-sekolah/page";
import Pendaftaran from "./pages/contact-us/page";
import Faq from "./pages/contact-us/faq/page";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil-sekolah" element={<Profile />} />
        <Route path="/program-sekolah" element={<Program />} />
        <Route
          path="/program-sekolah/biaya-sekolah"
          element={<SchoolExpenses />}
        />
        <Route path="/galeri-sekolah" element={<Gallery />} />
        <Route path="/contact-us" element={<Pendaftaran />} />
        <Route path="/contact-us/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
