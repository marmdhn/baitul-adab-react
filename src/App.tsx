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
import RegistrationForm from "./pages/formulir-pendaftaran/page";

const MainLayout = ({ children }: { children: any }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const NoNavbarFooterLayout = ({ children }: { children: any }) => (
  <>{children}</>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/formulir-pendaftaran"
          element={
            <NoNavbarFooterLayout>
              <RegistrationForm />
            </NoNavbarFooterLayout>
          }
        />
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/profil-sekolah"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
        <Route
          path="/program-sekolah"
          element={
            <MainLayout>
              <Program />
            </MainLayout>
          }
        />
        <Route
          path="/program-sekolah/biaya-sekolah"
          element={
            <MainLayout>
              <SchoolExpenses />
            </MainLayout>
          }
        />
        <Route
          path="/galeri-sekolah"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <MainLayout>
              <Pendaftaran />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
