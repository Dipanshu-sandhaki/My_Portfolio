import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";
import { FiDownload } from "react-icons/fi"; // Importing download icon

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center px-6 bg-gradient-to-br from-[#080d17] to-[#0c1017] text-white overflow-hidden"
    >
      {/* 🌌 Aurora Blur Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 blur-[120px] animate-pulse rotate-45" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 opacity-20 blur-[100px] animate-pulse rotate-12" />
      </div>

      {/* ✨ Foreground Text Content */}
      <div className="z-10 max-w-4xl w-full text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center text-center gap-y-2 sm:gap-x-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="whitespace-nowrap">Hi, I'm</span>
          <span className="text-cyan-400 whitespace-nowrap">
            <TypeAnimation
              sequence={[
                "Dipanshu Sandhaki",
                2000,
                "a Web Developer",
                2000,
                "a Tech Enthusiast",
                2000,
                "Dipanshu Sandhaki",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Aspiring Full Stack Developer | Pursuing MCA | Open to Work
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          Passionate about crafting seamless web experiences and exploring the
          latest in technology. Let's build something amazing together!
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-cyan-500 text-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition duration-300"
          >
            <FaUserTie className="text-xl text-cyan" />
            <span className="tracking-wide text-lg">Hire Me</span>
          </a>
        </motion.div>
      </div>

      {/* 🔻 Scroll Down Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <a href="#about" className="text-cyan-400 animate-bounce">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
