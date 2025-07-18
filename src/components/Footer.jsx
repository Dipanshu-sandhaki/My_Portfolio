import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07132f] text-gray-400 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo + Name + Tagline */}
        <div className="flex items-start gap-4">
          <a href="#home">
            <img
              src="/SbLogo.jpg"
              alt="Logo"
              className="w-12 h-12 object-contain rounded-full hover:scale-105 transition duration-300"
            />
          </a>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Dipanshu Sandhaki
            </h3>
            <p className="text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full">
          <h4 className="text-white font-semibold mb-4 text-center">
            Quick Links
          </h4>
          <div className="grid grid-cols-3 gap-x-6 gap-y-3 text-sm justify-items-start sm:justify-items-center">
            <div className="flex flex-col gap-2">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#gallery" className="hover:text-white transition">Gallery</a>
              <a href="#CareerGoals" className="hover:text-white transition">Career Goals</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#skills" className="hover:text-white transition">Skills</a>
              <a href="#leetcode-stats" className="hover:text-white transition">LeetCode Stats</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#education" className="hover:text-white transition">Education</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#experience" className="hover:text-white transition">Experience</a>
              <a href="#achievements" className="hover:text-white transition">Achievements</a>
              <a href="#certifications" className="hover:text-white transition">Certifications</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>

        {/* Social + Contact Info */}
        <div className="flex flex-col md:items-end items-start text-sm space-y-3">
          <h4 className="text-white font-semibold mb-2">Connect with me</h4>
          <div className="flex gap-4 text-xl flex-wrap">
            <a
              href="mailto:dipanshusandhaki17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <MdEmail />
            </a>
            <a
              href="https://github.com/Dipanshu-sandhaki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/Dipanshusandhaki/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/dipanshazdt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <SiGeeksforgeeks />
            </a>
            <a
              href="https://www.linkedin.com/in/dipanshusandhaki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mr.dipanshuuuu?igsh=aHJwN29xaGs4cGZv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/dipanshu.sandoki?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>
          {/* Location Info */}
          <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
            <FaMapMarkerAlt className="text-lg" />
            <span>Dehradun, Uttarakhand (India)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
