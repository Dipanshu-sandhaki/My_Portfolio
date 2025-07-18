import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const certificates = [
  {
    title: "Goldman Sachs - Data Analytics",
    image: "/certificates/GoldmanSachs.jpg",
    link: "https://drive.google.com/file/d/1wVh5cD1GzptUD4YGSb672BewP_hnGnZa/view?usp=sharing"
  },
  {
    title: "Javascript - Scaler",
    image: "/certificates/Javascript Certification - by Scaller.png",
    link: "https://drive.google.com/file/d/1Z0YaR6L6h09weNGKhdkocFk8ByO55O6A/view?usp=sharing"
  },
  {
    title: "ByteHackathon",
    image: "/certificates/ByteHackathon.png",
    link: "https://drive.google.com/file/d/1LjxjfGiMXhwioUm9O1-haahXViXb2ak6/view?usp=sharing"
  },
  {
    title: "Robotics Workshop",
    image: "/certificates/Robotics-Certificate.jpg",
    link: "https://drive.google.com/file/d/1c3Fw3KjXbIRs4lM7YzimZc3tQqwfSR9l/view?usp=sharing"
  },
  {
    title: "Diploma in IT",
    image: "/certificates/DiplomaCertificate.png",
    link: "https://drive.google.com/file/d/1l4p2jcKpspChN1lbViVZkGhvfz1YC49U/view?usp=sharing"
  },
  {
    title: "Moocs English",
    image: "/certificates/MoocsEnglish.png",
    link: "https://drive.google.com/file/d/1DqrUH3o8zwMpa6k9qTQbpupASfm2Rc7C/view?usp=sharing"
  }
];

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">My Certifications</h2>
        <p className="text-gray-400 mb-10 text-sm sm:text-base">
          Here are some of the certifications I have earned throughout my academic journey.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="bg-white/10 backdrop-blur-md border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_0_30px_rgba(6,182,212,0.2)] rounded-xl overflow-hidden p-4 flex flex-col items-center transition-all hover:scale-[1.05]"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2 text-center">
                {cert.title}
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition"
                data-tooltip-id={`tooltip-${idx}`}
                data-tooltip-content="Open certificate in Google Drive"
              >
                <FaExternalLinkAlt /> View Certificate
              </a>
              <Tooltip id={`tooltip-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
