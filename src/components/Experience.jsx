import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaBuilding, FaFileAlt } from "react-icons/fa";
import gharpadharoLogo from "../assets/Gharpadharo_logo.png";
import euphoriaLogo from "../assets/euphoria_genx_logo.jpg";

const Experience = () => {
  const experienceList = [
    {
      title: "Internship | Role: Full Stack Developer",
      company: "Zestos Ventures Pvt. Ltd. (GharPadharo) | Dehradun, India",
      companyUrl: "https://www.gharpadharo.com/",
      duration: "June 11 – Sept 11, 2025 (Remote)",
      description:
        "Selected as Full Stack Developer Intern at GharPadharo. Working on real-time web projects with mentorship, feedback cycles, and startup culture exposure. Contributing to development tasks while learning end-to-end project lifecycle and collaborating with remote teams.",
      logo: gharpadharoLogo,
      certificateLink:
        "https://drive.google.com/file/d/1mRIMAkQAk67fhvyaTNfhhkadvP7kAOn1/view?usp=sharing",
      status: "Pursuing",
      buttonText: "Offer Letter",
    },
    {
      title: "Industrial Training – MERN Stack Development",
      company: "Euphoria Genx, Kolkata, India",
      companyUrl: "https://euphoriagenx.com/",
      duration: "Jan 30 – May 20, 2024 (Onsite)",
      description:
        "Completed a hands-on industrial training program on the MERN stack. Collaboratively developed a production-grade E-Commerce Food Delivery Web Application. Gained experience with frontend (React.js) and backend (Node.js, Express.js, MongoDB) integration.",
      logo: euphoriaLogo,
      certificateLink:
        "https://drive.google.com/file/d/1pBJ8iygmFwi-cboL6rgGZSz45R4qiI_L/view",
      status: "Completed",
      buttonText: "View Certificate",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Experience / Internships
        </h2>

        <div className="grid gap-10">
          {experienceList.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-[inset_0_0_8px_rgba(255,255,255,0.05),0_0_30px_rgba(6,182,212,0.1)] p-6 sm:p-8 hover:scale-[1.015] transition-all duration-500"
            >
              {/* Status Badge */}
              <div
                className={`sm:absolute sm:top-4 sm:right-4 mt-2 sm:mt-0 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-sm inline-block w-fit ${
                  item.status === "Completed"
                    ? "bg-green-600 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                {item.status}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Company Logo */}
                <div className="flex justify-center sm:justify-start">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-32 sm:w-40 h-auto object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300 bg-white p-2"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Company with icon and link */}
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 text-sm font-medium mb-1 inline-flex items-center gap-2 hover:underline"
                  >
                    <FaBuilding className="text-cyan-400 text-base" />
                    {item.company}
                  </a>

                  <p className="text-gray-400 text-sm mb-3">{item.duration}</p>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Button */}
                  <div className="mt-4">
                    <a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 text-sm rounded-full shadow transition-all"
                    >
                      <FaFileAlt className="text-base" />
                      {item.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
