import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      if (scrollPosition > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveLink(link.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 w-fit transition-all duration-300
        ${
          scrolled && scrollDirection === "up"
            ? "backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            : "bg-transparent"
        }
        border rounded-xl px-6 py-3 border-white/[0.2]
        ${scrollDirection === "down" ? "hidden" : ""}
      `}
    >
      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-sm text-[#E5E5E5]">
        {navLinks.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`transition-all duration-200 tracking-wider ${
                activeLink === item.toLowerCase()
                  ? "text-[#E5E5E5] font-semibold"
                  : "hover:text-[#D1D5DB]"
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle - fully centered */}
      <div className="md:hidden flex justify-center w-full">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1A1A1A]/95 backdrop-blur border-t border-white/10 px-6 pb-4 pt-2 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-3 text-[#E5E5E5]">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block py-1 tracking-wide ${
                    activeLink === item.toLowerCase()
                      ? "text-[#E5E5E5] font-semibold"
                      : "hover:text-[#D1D5DB]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
