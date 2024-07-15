import React, { useState, useEffect, useMemo, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [activePath, setActivePath] = useState("");
  const [hoveredDropdownIndex, setHoveredDropdownIndex] = useState<
    number | SetStateAction<null>
  >(null);
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [activeAccordion] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      localStorage.setItem("currentHash", newHash);
      setCurrentHash(newHash);
    };
    window.addEventListener("hashchange", handleHashChange);

    setCurrentHash(localStorage.getItem("currentHash") || window.location.hash);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleMouseEnter = (
    index: React.SetStateAction<number | React.SetStateAction<null>>,
  ) => {
    setHoveredDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredDropdownIndex(null);
  };

  const getLinkClass = (path: string) => {
    if (path === "/" && activePath !== "/") {
      return "text-gray-600 transition ease-in-out duration-200 hover:text-blue-600";
    }
    return activePath.startsWith(path)
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-600 transition ease-in-out duration-200 hover:text-blue-600";
  };

  const getMobileLinkClass = (path: string) => {
    if (path === "/" && activePath !== "/") {
      return "text-gray-600 transition ease-in-out duration-200 hover:text-blue-600";
    }
    return activePath.startsWith(path)
      ? "text-blue-600"
      : "text-gray-600 transition ease-in-out duration-200 hover:text-blue-600";
  };

  const menuItems = useMemo(
    () => [
      {
        index: 0,
        label: "Beranda",
        href: "/",
        scrollLinks: [],
      },
      {
        index: 1,
        label: "Profil Sekolah",
        href: "/profil-sekolah",
        scrollLinks: [
          {
            label: "Sejarah Singkat",
            href: "/profil-sekolah/#sejarah-singkat",
            hash: "#sejarah-singkat",
          },
          {
            label: "Visi & Misi",
            href: "/profil-sekolah/#visi-misi",
            hash: "#visi-misi",
          },
          {
            label: "Detail Sekolah",
            href: "/profil-sekolah/#detail-sekolah",
            hash: "#detail-sekolah",
          },
        ],
      },
      {
        index: 2,
        label: "Program Sekolah",
        href: "/program-sekolah",
        scrollLinks: [
          {
            label: "Kelas",
            href: "/program-sekolah/#kelas",
            hash: "#kelas",
          },
          {
            label: "Kurikulum",
            href: "/program-sekolah/#kurikulum",
            hash: "#kurikulum",
          },
          {
            label: "Kelas & Jadwal Harian",
            href: "/program-sekolah/#kelas-jadwal-harian",
            hash: "#kelas-jadwal-harian",
          },
          {
            label: "Biaya Sekolah",
            href: "/program-sekolah/biaya-sekolah",
            hash: "biaya-sekolah",
          },
        ],
      },
      {
        index: 3,
        label: "Galeri Sekolah",
        href: "/galeri-sekolah",
        scrollLinks: [],
      },
      {
        index: 4,
        label: "Hubungi Kami",
        href: "/contact-us",
        scrollLinks: [],
      },
    ],
    [],
  );

  return (
    <nav className="bg-white py-4 px-8 w-full fixed top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex gap-6 font-semibold items-center">
          <div className="hidden lg:block">
            <img
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              src={"/image/logo.svg"}
              alt="schools"
            />
          </div>

          <div className="hidden lg:flex space-x-6">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div tabIndex={0} role="button">
                  {menu.scrollLinks.length > 0 ? (
                    <span className={getLinkClass(menu.href)}>
                      {menu.label}
                    </span>
                  ) : (
                    <Link
                      to={menu.href}
                      onClick={() => {
                        setCurrentHash("");
                        localStorage.setItem("currentHash", "");
                      }}
                    >
                      <span className={getLinkClass(menu.href)}>
                        {menu.label}
                      </span>
                    </Link>
                  )}
                </div>
                {hoveredDropdownIndex === index &&
                  menu.scrollLinks.length > 0 && (
                    <ul
                      className="absolute dropdown-content shadow bg-base-100 rounded-box w-52 z-[1] mt-2"
                      onMouseLeave={handleMouseLeave}
                    >
                      {menu.scrollLinks.map((link, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-600 hover:text-blue-600 hover:cursor-pointer"
                        >
                          <Link
                            to={link.href}
                            onClick={() => {
                              const element = document.getElementById(
                                link.hash.split("#")[1],
                              );
                              element?.scrollIntoView({ behavior: "smooth" });
                              setCurrentHash(link.hash);
                              localStorage.setItem("currentHash", link.hash);
                            }}
                          >
                            <span
                              className={`block px-4 py-2  ${
                                currentHash === link.hash ||
                                activePath === link.href
                                  ? "text-blue-600"
                                  : ""
                              }`}
                            >
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>
        </div>

        <div className="drawer block lg:hidden">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={activeSidebar}
            onChange={() => setActiveSidebar(!activeSidebar)}
          />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="text-gray-600 hover:text-blue-600 focus:outline-none drawer-button"
            >
              <i className="bi bi-list text-2xl"></i>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-100 px-4 py-8 w-2/3 min-h-full text-base-content flex flex-col justify-between items-center">
              <div className="join join-vertical w-full text-neutral">
                {menuItems.map((menu, index) => (
                  <div
                    key={index}
                    className={`collapse ${
                      menu.scrollLinks.length > 0 && "collapse-arrow"
                    } join-item`}
                  >
                    {menu.scrollLinks.length > 0 ? (
                      <>
                        <input
                          type="radio"
                          name="my-accordion"
                          defaultChecked={activeAccordion === menu.href}
                        />
                        <div
                          className={`collapse-title font-medium ${getMobileLinkClass(
                            menu.href,
                          )}`}
                        >
                          {menu.label}
                        </div>
                        <div className="collapse-content">
                          {menu.scrollLinks.map((link, subIndex) => (
                            <div
                              key={subIndex}
                              className={`text-gray-600 ${
                                currentHash === link.hash ||
                                activePath === link.href
                                  ? "text-blue-600"
                                  : ""
                              }`}
                              onClick={() => setActiveSidebar(false)}
                            >
                              <Link
                                to={link.href}
                                onClick={() => {
                                  const element = document.getElementById(
                                    link.hash.split("#")[1],
                                  );
                                  element?.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                  setCurrentHash(link.hash);
                                  localStorage.setItem(
                                    "currentHash",
                                    link.hash,
                                  );
                                }}
                              >
                                <span
                                  className={`block px-4 py-2 ${
                                    currentHash === link.hash
                                      ? "text-blue-600"
                                      : ""
                                  }`}
                                >
                                  {link.label}
                                </span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={menu.href}
                        onClick={() => {
                          setActiveSidebar(false);
                          setCurrentHash("");
                          localStorage.setItem("currentHash", "");
                        }}
                      >
                        <div
                          className={`collapse-title font-medium ${getMobileLinkClass(
                            menu.href,
                          )}`}
                        >
                          {menu.label}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="space-x-4">
                <Link to="/">
                  <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
                </Link>
                <Link to="/">
                  <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
                </Link>
                <Link to="/">
                  <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 font-semibold items-center">
          <Link to="/contact-us">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800"
            >
              Pendaftaran
            </button>
          </Link>
          <div className="hidden lg:flex space-x-4">
            <Link
              to="https://www.instagram.com/baituladabislamicschool?igsh=MWttZXg5aDhmNnhiZQ=="
              target="_blank"
            >
              <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=61551435236019&mibextid=ZbWKwL"
              target="_blank"
            >
              <i className="bi bi-facebook text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
            </Link>
            <Link
              to="https://www.tiktok.com/@baisedu?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <i className="bi bi-tiktok text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
