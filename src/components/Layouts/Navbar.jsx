import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { setupNavbar } from "./nav";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const cleanup = setupNavbar();

    return cleanup;
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10 justify-center  lg:w-full text-slate-600"
      id="navigasi"
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-8 py-6 font-semibold text-lg md:text-xl lg:text-2xl lg:py-2 w-1/4">
            <a href="#beranda" onClick={scrollToTop}>
              <img
                src="/images/logo.png"
                alt="logo relive"
                className="lg:w-1/2"
              />
            </a>
          </div>
          <div className="px-8 py-4 flex items-center justify-cente">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute block lg:hidden"
            >
              <Menu
                id="icon-menu"
                className="transition ease-in-out duration-300"
              />
              <X
                id="icon-close"
                className="hidden transition ease-in-out duration-300"
              />
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute p-4 rounded-lg max-w-[200px] w-full right-6 top-full border border-border lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:border-none bg-teal-400 lg:py-0 text-white lg:text-slate-700"
            >
              <ul className="font-semibold block lg:flex lg:gap-4 lg:text-lg items-center">
                <li className="group">
                  <a href="#beranda" className="navbar-item">
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a href="#tentang-kami" className="navbar-item">
                    Tentang Kami
                  </a>
                </li>
                <li className="group">
                  <a href="#layanan" className="navbar-item">
                    Layanan
                  </a>
                </li>
                <li className="group">
                  <a href="#artikel" className="navbar-item">
                    Artikel
                  </a>
                </li>
                <li className="group">
                  <Link
                    to={"/login"}
                    className="group-hover:text-icon flex py-2 lg:bg-teal-500 lg:rounded-lg lg:px-8 lg:group-hover:text-white lg:group-hover:bg-teal-400 lg:text-white"
                  >
                    Masuk
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
