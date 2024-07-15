"use client";

import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Gallery() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [filter, setFilter] = useState("semua");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      src: "/image/galeri-sekolah/img (1).jpg",
      category: "kegiatan-sekolah",
    },
    {
      src: "/image/galeri-sekolah/img (2).JPG",
      category: "area-sekolah",
    },
    {
      src: "/image/galeri-sekolah/img (3).JPG",
      category: "alat-peraga",
    },
    {
      src: "/image/galeri-sekolah/img (4).JPG",
      category: "kegiatan-sekolah",
    },
    {
      src: "/image/galeri-sekolah/img (5).JPG",
      category: "area-sekolah",
    },
    {
      src: "/image/galeri-sekolah/img (6).JPG",
      category: "alat-peraga",
    },
    {
      src: "/image/galeri-sekolah/img (7).JPG",
      category: "kegiatan-sekolah",
    },
  ];

  const filteredData =
    filter === "semua" ? data : data.filter((item) => item.category === filter);

  return (
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

      <section
        id="gallery-first"
        className="w-full px-4 lg:px-16 flex flex-col gap-8 items-center justify-center mb-0 mt-24 lg:mt-32"
      >
        <div className="mx-auto">
          <div className="flex flex-col justify-center items-center text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">
            <span className="text-neutral">Foto - Foto</span>
            <span className="text-secondary-content text-center">
              Baitul Adab Islamic School
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span
              className={`badge badge-lg px-8 py-4 hover:bg-primary hover:border-transparent hover:text-white hover:cursor-pointer ${
                filter === "semua"
                  ? "badge-primary text-white"
                  : "badge-secondary"
              }`}
              onClick={() => setFilter("semua")}
            >
              Semua
            </span>
            <span
              className={`badge badge-lg px-8 py-4 hover:bg-primary hover:border-transparent hover:text-white hover:cursor-pointer ${
                filter === "kegiatan-sekolah"
                  ? "badge-primary text-white"
                  : "badge-secondary"
              }`}
              onClick={() => setFilter("kegiatan-sekolah")}
            >
              Kegiatan Sekolah
            </span>
            <span
              className={`badge badge-lg px-8 py-4 hover:bg-primary hover:border-transparent hover:text-white hover:cursor-pointer ${
                filter === "area-sekolah"
                  ? "badge-primary text-white"
                  : "badge-secondary"
              }`}
              onClick={() => setFilter("area-sekolah")}
            >
              Area Sekolah
            </span>
            <span
              className={`badge badge-lg px-8 py-4 hover:bg-primary hover:border-transparent hover:text-white hover:cursor-pointer ${
                filter === "alat-peraga"
                  ? "badge-primary text-white"
                  : "badge-secondary"
              }`}
              onClick={() => setFilter("alat-peraga")}
            >
              Alat Peraga
            </span>
          </div>

          <div className="grid md:grid-cols-4 auto-rows-[500px] gap-4 my-10">
            {filteredData.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl flex flex-col items-center justify-center overflow-hidden  ${
                  i === 0 || i === 4 || i === 5 || i === 6
                    ? "md:col-span-2"
                    : ""
                } ${i === 2 ? "md:row-span-2" : ""}`}
              >
                <img
                  height={100}
                  width={100}
                  src={item.src}
                  alt="school-pict"
                  className="object-cover h-full w-full rounded-xl transition duration-200 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
