"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import CurriculumCard from "../../components/curiculumCard";
import TestimonialCard from "../../components/testimonialCard";
import RegistrationLevelCard from "../../components/registrationLevelCard";
import NewsCard from "../../components/newsCard";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
    });
  }, []);

  const testimonials = [
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Kia",
      description:
        "Setelah bergabung KB/TK Baitul Adab, Kia menjadi lebih mandiri dan selalu semangat bangun pagi karena ingin bermain dan belajar sama temen-temen di sekolah. Saya lihat kegiatannya menarik dan variatif serta fasilitasnya pun lengkap. (Bunda Hasnah orangtua dari Sakhia)",
    },
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Adiva",
      description:
        "Alhamdulillah, sekarang Adiva menjadi lebih mudah dalam berteman dan berani dalam mengutarakan pendapat serta keinginannya. Gurunya friendly banget sama anak-anak, membuat Adiva nyaman di sekolah. (Bunda Raisa orangtua dari Adiva)",
    },
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Saliem",
      description:
        "Alhamdulillah, sekarang Adiva menjadi lebih mudah dalam berteman dan berani dalam mengutarakan pendapat serta keinginannya. Gurunya friendly banget sama anak-anak, membuat Adiva nyaman di sekolah. (Bunda Raisa orangtua dari Adiva)",
    },
  ];

  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden">
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

      {/* Hero section*/}
      <section
        id="first"
        className="pt-16 lg:pt-32 lg:pb-16 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-center relative min-h-screen "
      >
        {/* Bagian Kiri */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="w-full lg:w-1/2 mb-8 md:mb-0"
        >
          <div className="mt-4">
            <h2 className="text-4xl font-bold text-gray-800">
              Selamat Datang di
            </h2>
            <h2 className="text-4xl font-bold text-gray-800">
              Baitul Adab Islamic School
            </h2>
            <p className="mt-4 text-gray-600">
              <span className="text-2xl font-semibold">
                sekolah tahfidz bilingual school.
              </span>
              <br />
              Al-adab qoblal ilmi (Belajar adab sebelum ilmu)
            </p>
            <a href="/contact-us">
              <button className="btn btn-primary text-white mt-4">
                Daftar Sekarang <i className="bi bi-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div
          data-aos="fade-left"
          data-aos-delay="800"
          className="w-full lg:w-1/2"
        >
          <img
            height={100}
            width={100}
            style={{ height: "auto" }}
            src="/image/home/heroSectionChildren.png"
            alt="school-pict"
            className="object-contain mx-auto w-full md:w-4/5"
          />
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          height={100}
          width={100}
          src="/image/home/ornament-1.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-[200px] lg:bottom-24 xl:bottom-0 2xl:bottom-16 left-20 hidden lg:block"
        />
        <img
          data-aos="fade-up"
          height={100}
          width={100}
          src="/image/home/UnionBg.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-full -bottom-1 lg:-bottom-20 xl:-bottom-28 z-10"
        />
      </section>
      {/* Hero section*/}

      {/* Second section*/}
      <section
        id="fasilitas"
        className="w-full py-16 lg:py-32 relative z-20 bg-primary-content mt-0"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full text-center" data-aos="fade-up">
            <span className="text-5xl font-semibold">
              Mengapa Harus Baitul Adab?
            </span>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center p-8 w-1/2 lg:w-full lg:order-1 lg:justify-center mx-auto">
            <div
              className="flex flex-col flex-wrap xl:flex-nowrap lg:flex-row items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <CurriculumCard
                imageSrc="/image/home/BookOpen.svg"
                imageAlt="school-pict"
                title="Kurikulum Terbaru"
                description="Menggunakan kurikulum merdeka berbasis project dengan metode active learning"
              />
              <CurriculumCard
                imageSrc="/image/home/SquaresFour.svg"
                imageAlt="school-pict"
                title="Fasilitas Lengkap"
                description="Membuat anak nyaman selama bermain dan mengikuti proses pembelajaran, serta memudahkan anak dalam mengeksplor banyak hal"
              />
              <CurriculumCard
                imageSrc="/image/home/BookOpenUser.svg"
                imageAlt="school-pict"
                title="Setiap hari anak mengaji dan menghafal al-quran juz 30"
                description="Mengaji setiap hari agar anak fasih membaca Al-Quran"
              />
              <CurriculumCard
                imageSrc="/image/home/Books.svg"
                imageAlt="school-pict"
                title="Tahsin dan Tahfidz Juz 30"
                description="Anak menghafal Al-Quran surah - surah pendek (Juz 30)"
              />
            </div>

            <div
              className="flex flex-col lg:flex-row items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <CurriculumCard
                imageSrc="/image/home/Smiley.svg"
                imageAlt="school-pict"
                title="Pembiasaan Adab, Doa dan Ibadah"
                description="Anak-anak dibiasakan sholat, membaca doa-doa dan praktek adab-adab dalam aktifitas sehari-hari"
              />
              <CurriculumCard
                imageSrc="/image/home/BookOpen.svg"
                imageAlt="school-pict"
                title="Bilingual Program"
                description="Pembelajaran menggunakan dua Bahasa, yaitu Bahasa Indonesia dan Bahasa Inggris (Mulai jenjang TK)"
              />

              <CurriculumCard
                imageSrc="/image/home/HandsPraying.svg"
                imageAlt="school-pict"
                title="Pendampingan Psikolog"
                description="Proses pembelajaran dan perkembangan siswa dipantau oleh psikolog yang berpengalaman di bidang perkembangan anak"
              />
            </div>
          </div>
        </div>
        <img
          height={100}
          width={100}
          src="/image/home/ornament-3.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-1/4 left-0 bottom-0 hidden lg:block -z-10"
        />
        <img
          height={100}
          width={100}
          src="/image/home/ornament-2.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-1/4 right-0 -top-20 hidden lg:block -z-10"
        />
      </section>
      {/* Second section*/}

      {/* Third section*/}
      <section id="testimoni" className="w-full py-16 lg:py-32 relative z-10">
        <div className="px-4 lg:px-16">
          <div className="w-full text-center mb-8">
            <div
              className="flex flex-col justify-center gap-4 text-3xl lg:text-5xl font-semibold"
              data-aos="fade-up"
            >
              <span className="text-neutral">Program Sekolah di</span>
              <span className="text-secondary-content">
                Baitul Adab Islamic School
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div data-aos="fade-up" data-aos-delay={350}>
              <RegistrationLevelCard
                imageSrc="/image/home/daycare.png"
                imageAlt="school-pict"
                title="Daycare"
                url="https://api.whatsapp.com/send/?phone=6285333392421"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay={700}>
              <RegistrationLevelCard
                imageSrc="/image/home/kelompok-bermain.png"
                imageAlt="school-pict"
                title="Kelompok Bermain"
                url="https://api.whatsapp.com/send/?phone=6285333392421"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay={1050}>
              <RegistrationLevelCard
                imageSrc="/image/home/taman-kanak-kanak.png"
                imageAlt="school-pict"
                title="Taman Kanak Kanak"
                url="https://api.whatsapp.com/send/?phone=6285333392421"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay={1400}>
              <RegistrationLevelCard
                imageSrc="/image/home/home-school.png"
                imageAlt="school-pict"
                title="Homeschooling"
                subTitle="(SD-SMP-SMA)"
                url="https://pridebaituladab.sch.id/"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Third section*/}

      {/* Fourth section*/}
      <section id="testimoni" className="w-full py-16 lg:py-32 relative z-10">
        <div className="px-4 lg:px-16">
          <div className="w-full text-center mb-8">
            <div
              className="flex flex-col justify-center gap-4 text-3xl lg:text-5xl font-semibold"
              data-aos="fade-up"
            >
              <span className="text-neutral">
                Apa Kata Para Orangtua Tentang
              </span>
              <span className="text-secondary-content">
                Baitul Adab Islamic School?
              </span>
            </div>
          </div>

          <div className="lg:hidden carousel w-full gap-8 rounded-box">
            {testimonials.map((testimonial, index) => (
              <div
                className="carousel-item"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 350}
              >
                <TestimonialCard
                  imageSrc={testimonial.imageSrc}
                  imageAlt={testimonial.imageAlt}
                  title={testimonial.title}
                  description={testimonial.description}
                />
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center w-full gap-8 rounded-box">
            {testimonials.map((testimonial, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 350}>
                <TestimonialCard
                  imageSrc={testimonial.imageSrc}
                  imageAlt={testimonial.imageAlt}
                  title={testimonial.title}
                  description={testimonial.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Fourth section*/}

      {/*  Fifth section*/}
      <section
        id="alur-pendaftaran"
        className="w-full py-16 lg:py-32 relative z-10"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full text-center">
            <div
              className="flex flex-col justify-center gap-4"
              data-aos="fade-up"
            >
              <span className="text-neutral text-3xl lg:text-5xl font-semibold">
                Bagaimana Cara Melakukan{" "}
                <span className="text-secondary-content">Pendaftaran?</span>
              </span>
              <span className="w-full text-neutral text-lg lg:text-2xl mx-auto">
                Ikuti langkah - langkah dibawah ini untuk pendaftaran sekolah di
                Baitul Adab Islamic School
              </span>
            </div>
          </div>
          <div className="w-full lg:order-2 mt-8 lg:mt-56">
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className="card w-auto md:w-1/2 bg-transparent rounded-lg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  height={100}
                  width={100}
                  style={{ width: "auto", height: "auto" }}
                  src="/image/home/registrationStep1.svg"
                  alt="school-pict"
                  className="object-contain mx-auto"
                />
                <div className="card-body items-center text-center text-primary">
                  <h2 className="font-semibold text-2xl">Mengisi Formulir</h2>
                  <p className="text-lg font-normal">
                    Isi formulir pendaftaran dan siapkan berkas - berkas yang
                    dibutuhkan
                  </p>
                </div>
              </div>
              <img
                data-aos="fade-up"
                data-aos-delay="800"
                height={100}
                width={100}
                style={{ height: "auto" }}
                src="/image/home/arrow1.svg"
                alt="school-pict"
                className="object-contain mx-auto mb-auto w-1/6 hidden xl:block"
              />
              <div
                className="card w-auto md:w-1/2 bg-transparent rounded-lg"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <img
                  height={100}
                  width={100}
                  style={{ width: "auto", height: "auto" }}
                  src="/image/home/registrationStep2.svg"
                  alt="school-pict"
                  className="object-contain mx-auto"
                />
                <div className="card-body items-center text-center text-primary">
                  <h2 className="font-semibold text-2xl">
                    Observasi & Wawancara Orang Tua
                  </h2>
                  <p className="text-lg font-normal">
                    Calon peserta didik mengikuti observasi bersama
                    guru/psikolog, Test Fingger print STIFIN, dan wawancara
                    dengan orangtua
                  </p>
                </div>
              </div>
              <img
                data-aos="fade-up"
                data-aos-delay="1600"
                height={100}
                width={100}
                style={{ height: "auto" }}
                src="/image/home/arrow2.svg"
                alt="school-pict"
                className="object-contain mx-auto w-1/6 hidden xl:block"
              />
              <div
                className="card w-auto md:w-1/2 bg-transparent rounded-lg"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                <img
                  height={100}
                  width={100}
                  style={{ width: "auto", height: "auto" }}
                  src="/image/home/registrationStep3.svg"
                  alt="school-pict"
                  className="object-contain mx-auto"
                />
                <div className="card-body items-center text-center text-primary">
                  <h2 className="font-semibold text-2xl">Pengumuman</h2>
                  <p className="text-lg font-normal">
                    Pengumuman hasil observasi & wawancara orang tua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Fifth section*/}

      {/*  Six section*/}
      <section id="syarat-pendaftaran" className="w-full py-16 lg:py-32">
        <div className="px-4 lg:px-16">
          <div className="w-full text-center mb-8">
            <div
              className="flex flex-col justify-center gap-4"
              data-aos="fade-up"
            >
              <span className="text-neutral text-3xl lg:text-5xl font-semibold">
                Siapkan Berkas Pendaftarannya{" "}
                <span className="text-secondary-content">Pendaftarannya!</span>
              </span>
              <span className="text-neutral text-xl lg:text-4xl font-semibold">
                Pendaftaran kami buka sepanjang tahun selama kuota masih
                tersedia
              </span>
              {/*<span className="text-neutral text-lg lg:text-2xl w-full mx-auto">*/}
              {/*  Berkas apa saja yang diperlukan saat proses pendaftaran?*/}
              {/*</span>*/}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* Bagian Kiri */}
            <div
              className="w-full lg:w-1/2 lg:order-1 mb-8 md:mb-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card w-full bg-primary-content shadow-xl">
                <div className="card-body">
                  <h2 className="card-title mx-auto text-2xl lg:text-4xl font-bold">
                    Syarat Umum
                  </h2>
                  <hr />
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Usia Kelompok Bermain minimal 3 tahun di bulan Juli 2024
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Usia Kelompok A minimal 4 tahun di bulan Juli 2024
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Usia kelompok B minimal 5 tahun di bulan juli 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title mx-auto text-xl lg:text-4xl font-bold">
                    Berkas Pendaftaran
                  </h2>
                  <hr />
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Fotocopy Akte Kelahiran
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Fotocopy Kartu Keluarga
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Fotocopy KTP Orangtua
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Pas Foto 3 x 4 sebanyak 3 lembar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian Kanan */}
            <div
              className="w-full lg:w-1/2 lg:order-2"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                height={100}
                width={100}
                style={{ width: "80%", height: "auto" }}
                src="/image/home/personIllustration.svg"
                alt="school-pict"
                className="object-contain mx-auto hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>
      {/*  Six section*/}

      {/*  Seventh Section*/}
      <section id="syarat-pendaftaran" className="w-full py-16 lg:py-32">
        <div className="px-4 lg:px-16">
          <div className="w-full text-center mb-8">
            <div
              className="flex flex-col justify-center gap-4"
              data-aos="fade-up"
            >
              <span className="text-neutral text-3xl lg:text-5xl font-semibold">
                Berita Terbaru Dari{" "}
                <span className="text-secondary-content">Baitul Adab</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap lg:flex-row gap-8 items-center">
            {Array.from({ length: 9 }).map((_, index) => (
              <div data-aos="fade-up" data-aos-delay={index * 350} key={index}>
                <NewsCard
                  title={"Doa Sebelum Belajar"}
                  desc={
                    "Memang doa sesudah dan sebelum belajar sangat dianjurkan dalam agama Islam..."
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  Seventh Section*/}

      {/*  Modal*/}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box text-primary-content text-center">
          <h3 className="font-bold text-lg">Coming Soon</h3>
          <p className="py-4">Konten ini akan segera hadir. Stay tuned!</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
      {/*  Modal*/}
    </div>
  );
}
