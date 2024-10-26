"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import CurriculumCard from "../../components/curiculumCard";
import TestimonialCard from "../../components/testimonialCard";
import RegistrationLevelCard from "../../components/registrationLevelCard";
import NewsCard from "../../components/newsCard";
import { Helmet } from "react-helmet-async";

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

  const news = [
    {
      imageSrc: "/image/news/montesori.png",
      title:
        "Transformasi Kelas: Pelatihan Metode Montessori untuk Inovasi Pengajaran",
      desc: "Pada 24-28 agustus, KB-TK Baitul Adab Islamic School mengadakan pelatihan Metode Montessori untuk para guru dengan tema Transformasi Kelas: Pelatihan Metode Montessori untuk Inovasi Pengajaran. Kegiatan ini dihadiri oleh para guru, staff dan pengurus yayasan yang antusias belajar cara-cara inovatif dalam mengajar. Pelatihan ini mengedepankan prinsip-prinsip Montessori, seperti pembelajaran berbasis pengalaman dan kemandirian siswa. Para peserta diajak untuk berpartisipasi dalam sesi praktik dan diskusi, membagikan pengalaman serta ide-ide kreatif. Acara ini diharapkan dapat meningkatkan kualitas pengajaran dan menciptakan lingkungan belajar yang lebih inspiratif!",
    },
    {
      imageSrc: "/image/news/market-day.png",
      title: "Kecil-Kecil Jualan: Kegiatan Seru di Market Day",
      desc: "KB-TK Baitul Adab Islamic School menggelar Market Day bertema Kecil-Kecil Jualan pada 17 Agustus 2024 bertepatan dengan peringatan 17 an , di mana para siswa berkesempatan untuk menunjukkan kreativitas mereka. Anak-anak menjual berbagai produk, mulai dari kerajinan tangan hingga makanan ringan, sambil belajar nilai jual dan interaksi dengan pelanggan. Acara ini juga dilengkapi dengan permainan dan aktivitas menarik, menciptakan suasana penuh keceriaan. Market Day ini menjadi pengalaman berharga, mengajarkan kerja sama dan tanggung jawab kepada anak-anak. Suasana meriah ini diharapkan menjadi tradisi semesteran yang dinanti!",
    },
    {
      imageSrc: "/image/news/outing-class.png",
      title: "Dari Kelas ke Kebun Binatang: Petualangan Edukatif di Ragunan",
      desc: "Pada tanggal 17 Oktober 2024, siswa-siswi KB-TK Baitul Adab Islamic School mengadakan outing class ke Kebun Binatang Ragunan. Kegiatan ini bertujuan untuk memberikan pengalaman langsung tentang keanekaragaman hayati dan pentingnya pelestarian satwa. Siswa-siswi dengan antusias menjelajahi berbagai kandang hewan, mulai dari gajah hingga burung eksotis. Mereka juga mengikuti sesi edukasi yang diadakan oleh pemandu, yang menjelaskan perilaku dan habitat hewan. Kegiatan ini tidak hanya menyenangkan, tetapi juga menambah pengetahuan dan kesadaran siswa tentang lingkungan. Suasana ceria dan penuh kegembiraan menyemarakkan hari belajar di luar kelas ini!",
    },
    {
      imageSrc: "/image/news/webinar-parenting.png",
      title:
        "Webinar Parenting; Kiat mengenali bakat dan Melejitkan Potensi Anak",
      desc: "Pada 19 Oktober 2024, KB-TK Baitul Adab Islamic School sukses mengadakan webinar parenting bertema Kiat Mengenali Bakat dan Melejitkan Potensi Anak. Acara ini dihadiri oleh orang tua dan pendidik yang antusias untuk memahami cara terbaik mendukung perkembangan anak. Pembicara ahli yang dihadirkan adalah Ibu Hena Rustiana, S.Psi, CFP, seorang Psikolog dan Konselor, memberikan wawasan tentang pentingnya mengenali bakat unik setiap anak serta strategi untuk mengoptimalkan potensi mereka. Sesi interaktif juga memungkinkan peserta untuk berbagi pengalaman dan bertanya langsung. Webinar ini bertujuan untuk membekali orang tua dengan alat yang diperlukan dalam mendukung tumbuh kembang anak secara optimal.",
    },
    {
      imageSrc: "/image/news/kolam-renang.png",
      title:
        "Kolam Renang Sekolah: Fasilitas Baru untuk Kesehatan dan Keceriaan Anak!",
      desc: "Kami dengan bangga mengumumkan bahwa sekolah Baitul Adab Islamic School kini telah memiliki kolam renang! Fasilitas ini resmi akan dibuka pada tanggal 28 Oktober 2024 dan diharapkan dapat menjadi tambahan yang menyenangkan bagi siswa. Kolam renang ini tidak hanya menyediakan kesempatan untuk belajar berenang, tetapi juga mendukung kegiatan olahraga dan rekreasi yang sehat. Siswa akan mendapatkan pelajaran renang dari instruktur berpengalaman, menjadikan pengalaman belajar lebih menyenangkan. Kami yakin fasilitas ini akan meningkatkan kualitas pendidikan fisik di sekolah dan memberikan manfaat besar bagi perkembangan anak-anak.",
    },
    {
      imageSrc: "/image/news/rapor.png",
      title: "Refleksi Pembelajaran: Pembagian Rapor Mid Semester!",
      desc: "Pada 4 Oktober 2024, KB-TK Baitul Adab Islamic School mengadakan kegiatan pembagian rapor mid semester yang dihadiri oleh siswa, orang tua, dan guru. Acara ini bertujuan untuk memberikan umpan balik mengenai pencapaian akademis siswa selama setengah semester. Siswa dengan antusias menerima rapor mereka dan berdiskusi dengan guru tentang perkembangan belajar. Orang tua juga berkesempatan untuk berbincang langsung dengan guru mengenai kemajuan anak. Kegiatan ini diharapkan dapat memotivasi siswa untuk terus berprestasi dan memperbaiki kekurangan di semester mendatang. Semoga pencapaian ini menjadi langkah awal menuju kesuksesan yang lebih besar!",
    },
    {
      imageSrc: "/image/news/kolam-renang-asyik.png",
      title: "Serunya Berenang: Kegiatan Mengasyikkan di Kolam Sekolah",
      desc: "Kegiatan berenang ini rutin di diadakan di sekolah selama 2 kali dalam sebulan setiap hari rabu pekan ke-dua dan ke-empat. Kegiatan ini memberikan kesempatan bagi siswa untuk belajar dan bersenang-senang di kolam renang sekolah. Di bawah bimbingan instruktur/guru berpengalaman, siswa diajarkan teknik dasar renang, permainan air, dan keselamatan di air. Setiap sesi diisi dengan tawa dan semangat, saat siswa berkompetisi dalam lomba kecil atau bermain permainan air. Kegiatan ini tidak hanya meningkatkan keterampilan berenang, tetapi juga memperkuat kepercayaan diri dan kerja sama antar teman, menjadikannya pengalaman belajar yang berharga dan menyenangkan!",
    },
    // {
    //   imageSrc: "/image/news/outing-class.png",
    //   title: "Dari Kelas ke Kebun Binatang: Petualangan Edukatif di Ragunan",
    //   desc: "Pun!",
    // },
  ];

  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Beranda | Baitul Adab</title>
        <meta
          name="description"
          content="Selamat datang di Baitul Adab Islamic School. Sekolah tahfidz bilingual dengan kurikulum merdeka, fasilitas lengkap, dan program tahsin-tahfidz juz 30. Kami menawarkan pembelajaran dua bahasa serta pendampingan psikolog untuk perkembangan anak yang optimal."
        />
        <link rel="canonical" href="/" />
      </Helmet>
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
              src="/image/home/mainimage.png"
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
                <div
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
                  Ikuti langkah - langkah dibawah ini untuk pendaftaran sekolah
                  di Baitul Adab Islamic School
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
                  <span className="text-secondary-content">
                    Pendaftarannya!
                  </span>
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
                          Usia Kelompok Bermain minimal 3 tahun di bulan Juli
                          2024
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

            <div className="flex flex-col flex-wrap lg:flex-row gap-8 items-center justify-center">
              {news.map((item, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 350}
                  key={index}
                >
                  <NewsCard
                    imgSrc={item.imageSrc}
                    title={item.title}
                    desc={item.desc}
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
    </>
  );
}
