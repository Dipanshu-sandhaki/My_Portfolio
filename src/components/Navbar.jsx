import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Home, User, FolderOpen, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", icon: <Home size={18} /> },
  { name: "About", icon: <User size={18} /> },
  { name: "Projects", icon: <FolderOpen size={18} /> },
  { name: "Contact", icon: <Mail size={18} /> },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  const drawerRef = useRef(null);
  const touchStartX = useRef(null);

  // Detect scroll direction and active section
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollDirection(scrollPosition > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.name.toLowerCase());
        if (section) {
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveLink(link.name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest("#drawer") &&
        !e.target.closest("#menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Swipe to open/close
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (diff > 50) {
        setMenuOpen(true); // swipe left to open
      } else if (diff < -50) {
        setMenuOpen(false); // swipe right to close
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Lock scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 w-fit px-6 py-3 rounded-xl border border-white/20 backdrop-blur-xl transition-all duration-300 ${
          scrollDirection === "down"
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm text-[#E5E5E5]">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                className={`transition-all duration-200 tracking-wider ${
                  activeLink === item.name.toLowerCase()
                    ? "text-white font-semibold"
                    : "hover:text-gray-300"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-center">
          <button
            id="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        id="drawer"
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 pt-14 shadow-xl transform transition-transform duration-300 md:hidden ${
          menuOpen
            ? "translate-x-0 scale-100 opacity-100"
            : "translate-x-full scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <img
            src="/SbLogo.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover shadow-md border border-white/20"
          />
          <div className="text-xl font-semibold tracking-wide text-cyan-400">
            Dipanshu Sandhaki
          </div>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 text-base font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 transition-all ${
                  activeLink === item.name.toLowerCase()
                    ? "text-cyan-400 font-semibold"
                    : "hover:text-gray-300"
                }`}
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
