import CharacterCard from "../../components/characterCard";

const Tab1 = () => {
  return (
    <div className="mt-4 card p-10 bg-primary-content relative">
      <img
        height={100}
        width={100}
        style={{ width: "5%", height: "auto" }}
        src="/image/profil-sekolah/handIllustration.svg"
        alt="school-pict"
        className="object-contain mx-auto absolute top-5 left-5"
      />
      <img
        height={100}
        width={100}
        style={{ width: "5%", height: "auto" }}
        src="/image/profil-sekolah/handIllustration.svg"
        alt="school-pict"
        className="object-contain mx-auto absolute bottom-5 right-5"
      />
      <span className="font-bold text-3xl lg:text-5xl text-center">
        Karakter <span className="text-white">Humble</span> Apa Saja Yang
        dibentuk?
      </span>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-1.svg"
          imageAlt="school-pict"
          title="sHoleh"
          description="Siswa memiliki ketaatan dan kesungguhan dalam beribadah dan menjalankan perintah Allah swt serta menjauhi larangan-larangan-Nya"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-2.svg"
          imageAlt="school-pict"
          title="santUn"
          description="Siswa memiliki perilaku santun dalam dalam berbicara, bertindak dan beinteraksi dengan teman, guru, orangtua dan sesama"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-3.svg"
          imageAlt="school-pict"
          title="Mandiri"
          description="Siswa terbiasa proaktif, independen dan mampu memaksimalkan kemampuan sendiri dalam melakukan berbagai aktivitas dengan penuh tanggung jawab"
        />
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-5.svg"
          imageAlt="school-pict"
          title="disipLin"
          description="Siswa memiliki sikap yang akrab, menyenangkan, toleran, mudah bergaul, menyesuaikan diri, dan bekerjasama dengan orang lain"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-4.svg"
          imageAlt="school-pict"
          title="Bersahabat"
          description="Siswa memiliki sikap taat dan patuh terhadap aturan dan nilai-nilai yang dipercaya merupakan tanggung jawabnya"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-6.svg"
          imageAlt="school-pict"
          title="cErdas"
          description="Siswa memiliki kemampuan untuk menggali dan memaksimalkan potensi dirinya sesuai jenis kecerdasannya"
        />{" "}
      </div>
    </div>
  );
};

export default Tab1;
