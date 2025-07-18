import React, { useState, useEffect } from "react";
import loaImage from "../assets/loa.jpg";
import loaCertificate from "../assets/loa_certificate.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CalendarDays,
  UserCheck,
  CheckCircle2,
  Rocket,
  Smartphone,
  Target,
  Users,
  BadgeCheck,
  ExternalLink,
  Award,
} from "lucide-react";

const isMobile = () => window.innerWidth < 768;

const Achievements = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (!isMobile()) {
      const flipTimeout = setTimeout(() => setFlipped(true), 2000);
      const flipBackTimeout = setTimeout(() => setFlipped(false), 5000);
      return () => {
        clearTimeout(flipTimeout);
        clearTimeout(flipBackTimeout);
      };
    }
  }, []);

  const handleClickFlip = () => setFlipped((prev) => !prev);
  const handleMouseEnter = () => {
    if (!isMobile()) setFlipped(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile()) setFlipped(false);
  };

  return (
    <section
      id="achievements"
      className="bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          Achievements & Recognition
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-12">
          I take pride in being recognized for my work during impactful academic
          events and technical contributions. Here’s a featured recognition that
          highlights my ability to work under pressure and deliver successful
          solutions.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 w-full px-2">
          {/* Flip Card */}
          <div
            className="relative cursor-pointer perspective w-[260px] h-[350px] sm:w-[280px] sm:h-[400px] md:w-[450px] md:h-[650px] overflow-hidden rounded-3xl"
            onClick={handleClickFlip}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-aos="fade-right"
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped ? "rotate-y-180" : ""
              } rounded-3xl`}
            >
              <img
                src={loaImage}
                alt="LOA Front"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl backface-hidden"
              />
              <img
                src={loaCertificate}
                alt="LOA Certificate"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl backface-hidden rotate-y-180"
              />
            </div>
          </div>

          {/* Text Content Card */}
          <div
            className="relative group w-full max-w-[500px] h-auto sm:h-[400px] md:h-[650px]"
            data-aos="fade-left"
          >
            <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-tr from-[#a928cc]/40 via-[#3b82f6]/40 to-[#06b6d4]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 p-4 sm:p-6 rounded-3xl text-gray-300 text-sm sm:text-[15.5px] leading-relaxed space-y-4 text-justify border border-white/10 backdrop-blur-lg bg-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] transition-all duration-500 ease-in-out h-full overflow-auto sm:overflow-hidden">
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center gap-1">
                  <Award size={26} className="text-cyan-400" />
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white text-center uppercase">
                    Letter of Appreciation
                  </h3>
                </div>

                <p className="text-cyan-400 text-sm font-semibold flex flex-wrap items-center gap-1 sm:gap-2">
                  <CalendarDays size={14} className="shrink-0" />
                  <span className="whitespace-nowrap">Prashan Baan</span>
                  <span className="whitespace-nowrap">• IT - Utsav 3.0</span>
                  <span className="whitespace-nowrap">• 11 April 2025</span>
                </p>

                <p>
                  Built a full-fledged IT quiz web application for
                  <strong> "Prashan Baan"</strong>, the flagship inter-college
                  event during <strong>IT UTSAV 3.0</strong>, organized by the
                  <em> Competitive Cell</em> of
                  <strong> Uttaranchal School of Computing Sciences,</strong>
                  Uttaranchal University, Dehradun.
                </p>

                <p className="font-semibold">
                  <UserCheck
                    size={16}
                    className="inline-block text-cyan-400 mr-1"
                  />
                  <b>My Role: </b>
                  <span className="text-white font-extralight">
                    Frontend Developer
                  </span>
                </p>

                <p className="font-bold">Recognized by:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" />
                    Shri Jitendra Joshi – President, UU
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" />
                    Prof. (Dr.) Sonal Sharma – Director, USCS
                  </li>
                </ul>

                <p className="font-bold">Key Achievements:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
                  <li className="flex items-center gap-2">
                    <Rocket size={14} className="text-cyan-400" />
                    Live deployment during event
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone size={14} className="text-cyan-400" />
                    Responsive UI for high traffic
                  </li>
                  <li className="flex items-center gap-2">
                    <Target size={14} className="text-cyan-400" />
                    Intuitive UX for real-time quizzes
                  </li>
                  <li className="flex items-center gap-2">
                    <Users size={14} className="text-cyan-400" />
                    Cross-functional team collaboration with colleagues.
                  </li>
                </ul>

                <p className="text-cyan-400 italic font-semibold">
                  This experience taught me teamwork, adaptability, and how to
                  deliver under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-10">
          <a
            href="https://drive.google.com/file/d/1cdI5W_veTaKl1ButsQTDXyGsEtn9JTa2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-lg font-semibold text-base sm:text-lg transition-transform transform hover:scale-105"
          >
            <BadgeCheck size={20} />
            View Certificate
          </a>
          <a
            href="https://prashnaabaan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-base sm:text-lg transition-transform transform hover:scale-105"
          >
            <ExternalLink size={20} />
            View Live Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
