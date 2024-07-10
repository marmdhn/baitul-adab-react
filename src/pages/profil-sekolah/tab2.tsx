import GraduationCard from "../../components/graduationCard";

const Tab2 = () => {
  return (
    <div className="mt-4 card p-10 bg-primary-content relative">
      <img
        height={100}
        width={100}
        style={{ width: "10%", height: "auto" }}
        src="/image/profil-sekolah/baloon.svg"
        alt="school-pict"
        className="object-contain mx-auto absolute bottom-5 left-5"
      />
      <img
        height={100}
        width={100}
        style={{ width: "10%", height: "auto" }}
        src="/image/profil-sekolah/baloon.svg"
        alt="school-pict"
        className="object-contain mx-auto absolute bottom-5 right-5"
      />
      <span className="font-bold text-3xl lg:text-5xl text-center">
        <span className="text-white">Lulusan</span> Seperti Apa Yang Dibentuk?
      </span>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <GraduationCard
          imageSrc="/image/profil-sekolah/lulusan.svg"
          imageAlt="school-pict"
          title="Beradab & Berakhlak Islami"
        />{" "}
        <GraduationCard
          imageSrc="/image/profil-sekolah/lulusan-1.svg"
          imageAlt="school-pict"
          title="Bisa Membaca Al-Quran"
        />{" "}
        <GraduationCard
          imageSrc="/image/profil-sekolah/lulusan-2.svg"
          imageAlt="school-pict"
          title="Memiliki Hafalan Al-Quran"
        />{" "}
        <GraduationCard
          imageSrc="/image/profil-sekolah/lulusan-3.svg"
          imageAlt="school-pict"
          title="Bisa Berbahasa Asing"
        />
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <GraduationCard
          imageSrc="/image/profil-sekolah/lulusan-4.svg"
          imageAlt="school-pict"
          title="Mengenal Literasi Dasar"
        />{" "}
        <GraduationCard
          imageSrc="/image/profil-sekolah/lulusan-5.svg"
          imageAlt="school-pict"
          title="Menjadi SIswa Yang Berprestasi"
        />{" "}
        <GraduationCard
          imageSrc="/image/profil-sekolah/lulusan-6.svg"
          imageAlt="school-pict"
          title="Memiliki Karakter HUMBLE"
        />{" "}
      </div>
    </div>
  );
};

export default Tab2;
