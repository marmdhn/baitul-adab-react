import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        {/* Example: */}
        <Route path="/" element={<Home />} />
        {/*<Route path="/profil-sekolah" element={<ProfilSekolah />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
