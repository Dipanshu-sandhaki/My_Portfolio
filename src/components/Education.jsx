import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaRegCalendarAlt, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import uuLogo from "../assets/uttaranchal-logo.jpg";
import timtLogo from "../assets/timt-logo.png";
import wbbseLogo from "../assets/wbbse.png";
import wbchseLogo from "../assets/wbbhse.jpg";  

const educationData = [
  {
    id: 1,
    title: "Master of Computer Applications (MCA)",
    institution: "Uttaranchal University, Dehradun",
    duration: "2024 – 2026",
    cgpa: "—",
    remark: "Pursuing",
    logo: uuLogo,
    certificate: null,
    note: "",
  },
  {
    id: 2,
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Tamralipta Institute of Management & Technology, Tamluk",
    duration: "2021 – 2024",
    cgpa: "7.80",
    remark: "Graduated",
    logo: timtLogo,
    certificate: "/certificates/BCA-Degree.pdf",
    note: "Affiliated by: Maulana Abul Kalam Azad University of West Bengal (MAKAUT)",
  },
  {
    id: 3,
    title: "Higher Secondary Education (Class 12th)",
    institution: "Chatra Kunja Rani Bani Bhawan (H.S), Hogalberya, West Bengal",
    duration: "2021",
    cgpa: "66%",
    remark: "Pass",
    logo: wbchseLogo,
    certificate: "/certificates/12th board Certificate.pdf",
    note: "Board: West Bengal Council of Higher Secondary Education (WBCHSE) | Stream: Science",
  },
  {
    id: 4,
    title: "Secondary Education (Class 10th)",
    institution: "Hakola High School (H.S), Baragechhe, West Bengal",
    duration: "2019",
    cgpa: "54%",
    remark: "Pass",
    logo: wbbseLogo,
    certificate: "/certificates/10th board Certificate.pdf",
    note: "Board: West Bengal Board of Secondary Education (WBBSE)",
  },
];

const Education = () => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePreview = (url) => {
    setPreviewUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPreviewUrl("");
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          My Education
        </h2>

        <div className="relative border-l-4 border-cyan-500 pl-6 before:absolute before:top-0 before:left-[-1px] before:w-1 before:h-full before:bg-gradient-to-b from-transparent via-cyan-600 to-transparent before:animate-scrollLine">
          {educationData.map((edu, index) => (
            <div key={index} data-aos="fade-up" className="mb-10 ml-4 relative">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-3 top-3 border-4 border-[#0a192f] shadow-[0_0_10px_#06b6d4]"></div>

              {/* Glassmorphism Card with Inner Shadow */}
              <div className="relative bg-[#ffffff0d] backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/10 shadow-[inset_0_0_8px_rgba(255,255,255,0.05),0_0_20px_rgba(6,182,212,0.15)] transition-transform hover:scale-[1.015] duration-300">
                
                {/* Desktop Preview Button */}
                {edu.certificate && (
                  <button
                    onClick={() => handlePreview(edu.certificate)}
                    className="hidden md:flex absolute top-3 right-3 text-white bg-cyan-600 hover:bg-cyan-700 px-3 py-1.5 text-xs rounded-full items-center gap-1 transition"
                  >
                    <FaEye className="text-sm" />
                    Certificate
                  </button>
                )}

                {/* Card Content */}
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-10 h-10 object-contain rounded-full border border-cyan-400"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-cyan-300 leading-tight">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-white font-medium">
                      {edu.institution}
                    </p>
                    {edu.note && (
                      <p className="text-xs italic text-gray-300">{edu.note}</p>
                    )}
                  </div>
                </div>

                {/* Duration */}
                <p className="text-xs text-gray-300 mb-1 flex items-center gap-2">
                  <FaRegCalendarAlt className="text-cyan-400 text-sm" />
                  {edu.duration}
                </p>

                {/* CGPA or Percentage */}
                <p className="text-xs font-medium text-cyan-200 flex items-center gap-2">
                  <FaChartLine className="text-cyan-400 text-sm" />
                  {edu.id === 3 || edu.id === 4
                    ? `Percentage: ${edu.cgpa}`
                    : `CGPA: ${edu.cgpa}`}
                </p>

                {/* Status */}
                <p className="text-xs font-medium text-green-400 flex items-center gap-2">
                  <FaCheckCircle className="text-green-300 text-sm" />
                  Status: {edu.remark}
                </p>

                {/* Mobile Preview Button */}
                {edu.certificate && (
                  <div className="flex justify-end mt-4 md:hidden">
                    <button
                      onClick={() => handlePreview(edu.certificate)}
                      className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-700 px-3 py-1.5 text-xs text-white rounded-full transition"
                    >
                      <FaEye className="text-sm" />
                      Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate Preview */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-[90%] p-4 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-black text-2xl font-bold hover:text-red-600"
            >
              &times;
            </button>
            <iframe
              src={previewUrl}
              title="Certificate Preview"
              className="w-full h-full border-none"
            ></iframe>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Education;
