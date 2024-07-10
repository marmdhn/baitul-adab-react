"use client";

import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const faqItems = [
  {
    question: "Bagaimana proses pendaftaran KB/TK Baitul Adab?",
    answer:
      "Pendaftaran bisa dilakukan dengan langsung datang ke sekolah atau online melalui WA/link pendaftaran yang tersedia di website www.baituladab.com",
  },
  {
    question: "Kapan pendaftaran peserta didik baru dibuka?",
    answer:
      "PPDB dibuka sepanjang tahun selama kuota peserta didik masih kosong",
  },
  {
    question: "Apa yang membedakana KB/TK baitul Adab dengan KB/TK lainnya?",
    answer:
      "Kami memiliki beberapa program unggulan, diantaranya metode pembelajaran Active Learning berbasis project, pembiasaan adab, akhlak dan ibadah, bilingual program, mengaji setiap dari dan tahfidz juz 30.",
  },
  {
    question: "Kurikulum apa yang digunakan KB/TK Baitul Adab?",
    answer:
      "KB-TK Baitul Adab menggunakan kurikulum Merdeka plus kurikulum keislaman dengan metode pembelajaran active learning berbasis project",
  },
  {
    question:
      "Metodologi apa yang digunakan untuk mengajarkan Al-Quran di KB/TK Baitul Adab?",
    answer: "Pembelajaran Al-Qur'an menggunakan Metode Ummi",
  },
  {
    question:
      "Bahasa apa yang digunakan dalam kegiatan belajar mengajar di KB/TK Baitul Adab?",
    answer:
      "Program Taman Kanak-Kanak  menerapkan program dua bahasa (Indonesia-Inggris). Sementara itu, program Kelompok Bermain menerapkan penggunaan bahasa Indonesia secara penuh.",
  },
  {
    question: "Apakah ada tes untuk mengikuti Program KB/TK Baitul Adab?",
    answer:
      "Ya, terdapat dua test yang diperlukan untuk mendaftar di KB/TK Baitul Adab?, yaitu observasi siswa dan" +
      " wawancara orangtua, serta test stifin (sidik jari).",
  },
  {
    question: "Apa itu test Stifin?",
    answer:
      "Tes STIFIn adalah sebuah tes yang digunakan untuk mengetahui kepribadian, potensi diri, gaya belajar, dan pola asuh seseorang dengan membacanya sidik jari",
  },
];

const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => (
  <div
    tabIndex={index}
    className="collapse collapse-arrow bg-base-100 text-neutral"
  >
    <div className="collapse-title text-xl font-semibold">{question}</div>
    <div className="collapse-content">
      <p>{answer}</p>
    </div>
  </div>
);

export default function Faq() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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

      <div className="w-full px-4 lg:px-16 py-20 lg:py-32 flex flex-col gap-8 items-center justify-center">
        <span className="text-neutral text-8xl font-bold">FAQ</span>
        <div className="flex flex-col w-full lg:w-3/4 gap-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
