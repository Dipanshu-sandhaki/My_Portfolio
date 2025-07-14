import React, { useCallback, useEffect } from "react";
import profileImg from "../assets/DSC_007111.png";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-fit w-full bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 md:px-20 pt-12 pb-12 md:pb-16 lg:pb-12 md:mt-0"
    >
      {/* Profile Image Section */}
      <div
        data-aos="fade-up"
        className="w-full md:w-[45%] flex flex-col items-start justify-start gap-8"
      >
        <div className="mt-14 md:mt-0 relative w-full h-[400px] md:h-[760px] rounded-[2rem] p-1 bg-gradient-to-br from-[#a928cc] via-[#3b82f6] to-[#06b6d4] shadow-[0_0_30px_#3b82f6] overflow-hidden backdrop-blur-lg border border-blue-400/40 group transition-all duration-500">
          <div className="w-full h-full rounded-[1.8rem] overflow-hidden">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-contain object-center transform scale-110 group-hover:scale-125 transition-transform duration-700 ease-in-out"
            />
          </div>
          <div className="absolute -inset-[4px] rounded-[2rem] pointer-events-none bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/10 blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700" />
        </div>
      </div>

      {/* About Me + Resume Section */}
      <div className="w-full md:w-[45%] flex flex-col justify-start md:justify-between gap-4 md:gap-6 md:h-[760px]">
        {/* About Me Card */}
        <div
          data-aos="fade-up"
          className="relative w-full max-w-xl p-6 md:p-8 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_4px_30px_rgba(255,255,255,0.1)] text-gray-100 transition-all duration-300 group overflow-hidden min-h-[300px] md:min-h-[420px]"
        >
          <div className="absolute inset-0 z-0 rounded-[2rem] bg-gradient-to-tr from-[#a928cc]/40 via-[#3b82f6]/40 to-[#06b6d4]/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-2 md:mb-4 font-bold text-cyan-400">
              About Me
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-normal text-justify overflow-y-auto max-h-[400px] pr-2">
              Hello ! My name is{" "}
              <span className="text-white font-semibold">
                Dipanshu Sandhaki
              </span>
              , a passionate web developer with a strong foundation in full
              Stack development, currently pursuing MCA from Uttaranchal
              University, Dehradun. I focus on building clean, scalable, and
              user-friendly web applications using modern technologies like{" "}
              <span className="text-white font-semibold">React</span>,{" "}
              <span className="text-white font-semibold">Node.js</span>, and{" "}
              <span className="text-white font-semibold">MongoDB</span>. I’m
              driven by a passion for problem-solving and continuous growth in
              building impactful digital solutions. With a strong interest in
              emerging technologies and a commitment to staying ahead of
              industry trends, I aim to contribute to the future of smart,
              scalable, and meaningful tech innovation.
            </p>
          </div>
        </div>

        {/* Resume Card */}
        <div
          data-aos="fade-up"
          className="relative w-full max-w-xl h-auto md:h-[300px] p-6 md:p-10 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_4px_30px_rgba(255,255,255,0.1)] flex flex-col justify-center items-center gap-4 md:gap-6 transition-all duration-500 group overflow-hidden"
        >
          <Particles
            id="tsparticles"
            className="absolute inset-0 z-0 rounded-3xl pointer-events-none"
            init={useCallback(async (engine) => {
              await loadStarsPreset(engine);
            }, [])}
            options={{
              preset: "stars",
              background: { color: "transparent" },
              fullScreen: false,
              particles: {
                number: {
                  value: 70,
                  density: { enable: true, value_area: 1000 },
                },
                size: { value: 2 },
                opacity: {
                  value: 0.6,
                  anim: { enable: true, speed: 1.5, opacity_min: 0.1 },
                },
                move: {
                  enable: true,
                  speed: 0.6,
                  direction: "random",
                  random: true,
                  straight: false,
                  outModes: { default: "out" },
                },
                links: { enable: false },
                collisions: { enable: true, mode: "bounce" },
              },
              interactivity: {
                detectsOn: "window",
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  onClick: { enable: true, mode: "push" },
                },
              },
            }}
          />
          <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-tr from-[#a928cc]/40 via-[#3b82f6]/40 to-[#06b6d4]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-1 md:gap-2">
            <p className="text-sm md:text-base text-gray-300 font-normal">
              Are you hiring?
            </p>
            <p className="text-sm md:text-base text-gray-300 font-normal">
              Check out
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              My Resume
            </h2>
          </div>
          <a
            href="/Dipanshu_Sandhaki_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="z-12 px-6 py-3 mt-4 bg-cyan-400 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faFile} className="text-white text-xl" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
