"use client";

import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Profile() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [activeTab, setActiveTab] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const images = [
    "/image/profil-sekolah/profil-1.png",
    "/image/profil-sekolah/profil-2.png",
    "/image/profil-sekolah/profil-3.png",
    "/image/profil-sekolah/profil-4.png",
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % images.length);
  }, [currentSlide, images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <>
      <Helmet>
        <title>Profil Sekolah | Baitul Adab</title>
        <meta
          name="description"
          content="Selamat datang di Baitul Adab Islamic School. Sekolah tahfidz bilingual yang berlokasi di kota Depok, dengan kurikulum merdeka, fasilitas lengkap, dan program tahsin-tahfidz juz 30. Kami menawarkan pembelajaran dua bahasa serta pendampingan psikolog untuk perkembangan anak yang optimal. Sekolah ini didesain untuk melahirkan generasi penerus peradaban Islam yang sholeh, santun, mandiri, bersahabat, cerdas, terampil, berakhlakul mulia dan beradab."
        />
        <link rel="canonical" href="/profil-sekolah" />
      </Helmet>
      <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
        {showWhatsApp && (
          <FloatingWhatsApp
            avatar="/image/logo.svg"
            className="text-neutral"
            phoneNumber="6285333392421"
            accountName="Baitul Adab"
            allowEsc={true}
            chatMessage={"Halo, ada yang bisa dibantu?"}
          />
        )}

        {/* First section */}
        <section
          id="sejarah-singkat"
          className="flex flex-col gap-8 items-center justify-center mb-0 py-20 lg:py-32 relative"
        >
          <div className="px-4 lg:px-16">
            <div className="w-full h-[400px] relative flex justify-center items-center">
              <AnimatePresence>
                <motion.img
                  key={images[currentSlide]}
                  src={images[currentSlide]}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  className="object-cover absolute w-full h-[400px] rounded-lg shadow-lg"
                />
              </AnimatePresence>
            </div>
            <div className="w-full text-center my-4 lg:my-8">
              <div className="flex flex-col justify-center gap-0 lg:gap-4 text-5xl font-semibold">
                <span className="text-neutral">Sejarah Singkat</span>
                <span className="text-secondary-content">
                  Baitul Adab Islamic School
                </span>
              </div>
            </div>

            <div className="gap-4 lg:gap-8 flex flex-col lg:flex-row items-start justify-center text-neutral">
              <span className="w-full lg:w-1/2 lg:order-1 text-lg lg:text-2xl">
                Baitul Adab Islamic School (BAIS) adalah sebuah lembaga
                pendidikan Islam yang berlokasi di kota Depok di bawah naungan
                Yayasan Bintang Peradaban Islam BAIS. Didirikan pada tanggal 14
                Agustus 2023 dan mulai mengadakan kegiatan pembelajaran pada
                awal tahun 2024.
              </span>
              <span className="w-full lg:w-1/2 lg:order-2 text-lg lg:text-2xl">
                Sesuai dengan namanya, Baitul Adab, sekolah ini didesain untuk
                melahirkan generasi penerus peradaban Islam yang sholeh, santun,
                mandiri, bersahabat, cerdas, terampil, berakhlakul mulia dan
                beradab. Saat ini memiliki beberapa unit kegiatan, antara lain:
                Daycare, KB/TK, Homeschooling (jenjang SD, SMP, SMA) dan
                Pesantren Entreupreuneur Al-Quran (jenjang SMP-SMA).
              </span>
            </div>
          </div>
          <img
            height={100}
            width={100}
            src="/image/profil-sekolah/ornament-1.svg"
            alt="school-pict"
            className="object-cover absolute h-auto w-1/12 right-20 bottom-0 hidden lg:block"
          />
        </section>
        {/* First section */}

        {/* Second section */}
        <section
          id="visi-misi"
          className="w-full py-16 lg:py-32 flex flex-col items-center justify-center"
        >
          <div className="px-4 lg:px-16">
            <div className="w-full text-center mb-0 lg:mb-8">
              <div className="text-5xl font-semibold mb-4">
                <span className="text-neutral">Visi & Misi</span>
              </div>
            </div>

            <div className="gap-8 lg:gap-16 flex flex-col lg:flex-row items-center justify-center text-neutral">
              {/* Bagian Kiri */}
              <div className="lg:w-1/2 lg:order-1 mb-0 lg:mb-8">
                <div
                  className="card gap-24 bg-primary-content shadow-xl px-2 lg:px-16 h-auto lg:h-[500px]"
                  style={{
                    backgroundImage: "url(/image/profil-sekolah/bgCard.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="card-body gap-4 lg:gap-10 text-white">
                    <h2 className="card-title mx-auto underline text-2xl lg:text-4xl font-medium">
                      Visi
                    </h2>
                    <div className="flex flex-col gap-8">
                      <span className="text-md lg:text-lg font-semibold text-center">
                        “Menjadi sekolah unggul dalam mendidik generasi muslim
                        yang shaleh, cerdas, terampil dan beradab “
                      </span>
                    </div>
                    <div className="w-full">
                      <img
                        height={100}
                        width={100}
                        style={{ width: "40%", height: "auto" }}
                        src="/image/profil-sekolah/visiIllustration.svg"
                        alt="school-pict"
                        className="object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Bagian Kanan */}
              <div className="lg:w-1/2 lg:order-1 mb-0 lg:mb-8">
                <div
                  className="card bg-primary-content shadow-xl px-2 lg:px-16 h-auto lg:h-[500px]"
                  style={{
                    backgroundImage: "url(/image/profil-sekolah/bgCard.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="card-body gap-4 lg:gap-10 text-white">
                    <h2 className="card-title mx-auto underline text-2xl lg:text-4xl font-medium">
                      Misi
                    </h2>
                    <div>
                      <div className="flex items-center">
                        <i className="bi bi-dot text-4xl"></i>
                        <span>
                          Menyiapkan lingkungan belajar yang islami dan
                          menyenangkan
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="bi bi-dot text-4xl"></i>
                        <span>
                          Membangun pembiasaan perilaku hidup bersih, sehat,
                          disiplin dan beradab
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="bi bi-dot text-4xl"></i>
                        <span>
                          Mengembangkan potensi peserta didik berdasarkan
                          kecerdasannya untuk mencapai prestasi terbaik
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="bi bi-dot text-4xl"></i>
                        <span>
                          Menanamkan sikap mandiri, percaya diri, kreatif,
                          terampil dan berjiwa pemimpin
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="bi bi-dot text-4xl"></i>
                        <span>
                          Mengenalkan pembelajaran inovatif berbasis IT dan
                          penguasaan bahasa asing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Second section */}

        {/* Third section */}
        <section id="detail-sekolah" className="w-full py-16 lg:py-32">
          <div className="px-4 lg:px-16 text-neutral">
            <div className="flex gap-8 items-start font-semibold">
              <button
                className={`${
                  activeTab === 1
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
                }`}
                onClick={() => handleTabChange(1)}
              >
                Karakter Sekolah
              </button>
              <button
                className={`${
                  activeTab === 2
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
                }`}
                onClick={() => handleTabChange(2)}
              >
                Profile Lulusan
              </button>
              <button
                className={`${
                  activeTab === 3
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
                }`}
                onClick={() => handleTabChange(3)}
              >
                Fasilitas Sekolah
              </button>
            </div>
            <div className="w-1/3">
              <hr />
            </div>
            {activeTab === 1 && <Tab1 />}
            {activeTab === 2 && <Tab2 />}
            {activeTab === 3 && <Tab3 />}
          </div>
        </section>
        {/* Third section */}
      </div>
    </>
  );
}
