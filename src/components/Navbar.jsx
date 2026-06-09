import logo from "../assets/logo.png";
import { MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "categories",
      "bestsellers",
      "about",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ to, section, children }) => (
    <HashLink smooth to={to}>
      <li
        className={`relative cursor-pointer transition-all duration-300 ${
          activeSection === section
            ? "text-[#f7d774] drop-shadow-[0_0_10px_rgba(247,215,116,0.35)]"
            : "text-white hover:text-[#d4a017]"
        }`}
      >
        {children}

        <span
          className={`absolute left-1/2 top-[22px] -translate-x-1/2 -bottom-3 h-[2px] bg-[#d4a017] rounded-full transition-all duration-300 ${
            activeSection === section
              ? "w-8 opacity-100"
              : "w-0 opacity-0"
          }`}
        />
      </li>
    </HashLink>
  );

  return (
    <>
      <nav
        className="
          fixed
          top-3
          left-1/2
          -translate-x-1/2
          w-[97%]
          h-[78px]
          rounded-[28px]
          border
          border-[#d4a017]/60
          bg-[#111111]/70
          backdrop-blur-3xl
          shadow-[0_0_25px_rgba(212,160,23,0.12)]
          z-50
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent pointer-events-none" />
        <div
  className="
  absolute
  -left-20
  top-0
  h-full
  w-16
  bg-white/[0.04]
  skew-x-12
  animate-[shimmer_8s_linear_infinite]
  pointer-events-none
"
/>

        <div className="relative h-full flex items-center px-8">

          <HashLink smooth to="/#home">
            <div
              className="
                h-18
                w-18
                rounded-full
                overflow-hidden
                border
                border-[#d4a017]/60
                cursor-pointer
                hover:border-[#d4a017]/40
                transition-all
                duration-300
              "
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </HashLink>

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              -translate-x-1/2
            "
          >
            <ul className="flex items-center gap-16 text-[16px] font-medium">

              <NavItem
                to="/#categories"
                section="categories"
              >
                Items
              </NavItem>

              <NavItem
                to="/#bestsellers"
                section="bestsellers"
              >
                Best Sellers
              </NavItem>

              <NavItem
                to="/#about"
                section="about"
              >
                About
              </NavItem>

              <NavItem
                to="/#contact"
                section="contact"
              >
                Contact
              </NavItem>

            </ul>
          </div>

          <div className="ml-auto flex items-center gap-3">

            <Link to="/locations">
              <div
  className="
    h-11
    w-11
    rounded-full
    border
    border-[#d4a017]/30
    bg-gradient-to-b
    from-[#f7d774]/10
    to-[#d4a017]/5
    backdrop-blur-md
    flex
    items-center
    justify-center
    hover:shadow-[0_0_20px_rgba(212,160,23,0.25)]
    hover:border-[#d4a017]/60
    transition-all
    duration-300
  "
>
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="text-[#d4a017]"
                />
              </div>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? (
                <X size={24} className="text-[#d4a017]" />
              ) : (
                <Menu size={24} className="text-[#d4a017]" />
              )}
            </button>

          </div>
        </div>
      </nav>

      <div
        className={`fixed top-[92px] left-1/2 -translate-x-1/2 w-[95%] rounded-[24px] shadow-[0_0_25px_rgba(212,160,23,0.15)] bg-black/80 backdrop-blur-xl overflow-hidden z-40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 text-white">

          <HashLink smooth to="/#categories" onClick={() => setMenuOpen(false)}>
            <div className="px-4 py-3 rounded-xl hover:bg-white/5">
              Items
            </div>
          </HashLink>

          <HashLink smooth to="/#bestsellers" onClick={() => setMenuOpen(false)}>
            <div className="px-4 py-3 rounded-xl hover:bg-white/5">
              Best Sellers
            </div>
          </HashLink>

          <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>
            <div className="px-4 py-3 rounded-xl hover:bg-white/5">
              About
            </div>
          </HashLink>

          <HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}>
            <div className="px-4 py-3 rounded-xl hover:bg-white/5">
              Contact
            </div>
          </HashLink>

        </div>
      </div>
    </>
  );
}

export default Navbar;