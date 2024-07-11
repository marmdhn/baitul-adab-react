import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-8">
      <img
        height={100}
        width={100}
        src="/image/footer/topFooterBG.svg"
        alt="school-pict"
        className="object-contain w-full z-10"
      />
      <footer className="footer p-10 lg:px-80 gap-24 bg-primary-content text-base-content">
        <aside className="w-full">
          <div className="flex items-center gap-2">
            <img
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              src={"/image/whiteLogo.svg"}
              alt="schools"
            />
            <span className="font-bold text-xl text-white">
              Baitul Adab Islamic School
            </span>
          </div>
          <p className="font-normal text-sm text-white">
            Sekolah tahfidz billingual schools. Al - adab qoblal ilmi ( belajar
            adab sebelum ilmu )
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61551435236019&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn bg-transparent shadow-none hover:bg-transparent text-white hover:text-neutral text-xl border-0">
                <i className="bi bi-facebook"></i>
              </button>
            </a>
            <a
              href="https://www.tiktok.com/@baisedu?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn bg-transparent shadow-none hover:bg-transparent text-white hover:text-neutral text-xl border-0">
                <i className="bi bi-tiktok"></i>
              </button>
            </a>
            <a
              href="https://www.instagram.com/baituladabislamicschool?igsh=MWttZXg5aDhmNnhiZQ=="
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn bg-transparent shadow-none hover:bg-transparent text-white hover:text-neutral text-xl border-0">
                <i className="bi bi-instagram"></i>
              </button>
            </a>
          </div>
        </aside>
        <nav className="text-white">
          <h6 className="text-xl font-semibold">Pages</h6>
          <a className="link link-hover" href="/public">
            Home
          </a>
          <a className="link link-hover" href="/profil-sekolah">
            Profil Sekolah
          </a>
          <a className="link link-hover" href="/program-sekolah">
            Program Sekolah
          </a>
          <a className="link link-hover" href="/galeri-sekolah">
            Galleri Sekolah
          </a>
        </nav>
        <nav className="text-white w-72">
          <h6 className="text-xl font-semibold">Contact</h6>
          <div className="flex items-center gap-2">
            <i className="bi bi-telephone-fill"></i>
            <span>0853-3339-2421</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bi bi-envelope-fill"></i>
            <span>baituladab@gmail.com</span>
          </div>
          <div className="flex items-start gap-2">
            <i className="bi bi-geo-alt-fill"></i>
            <span>
              Jl. RTM Kelapa Dua Jl. H. Ahmad Sibi No.1, Tugu, Kec. Cimanggis,
              Kota Depok, Jawa Barat 16451
            </span>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
