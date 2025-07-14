import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  }, // Newly added
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  }, // Newly added
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#0a1636] to-[#14061f] py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
        {/* LEFT SIDE - Heading and Description */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
            What I Use
          </p>
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            Skills & Tools
          </h2>
          <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 mx-auto text-left md:mx-0 md:text-left">
            <li>Full-stack development (MERN)</li>
            <li>Clean code, responsive UI</li>
            <li>REST APIs & modern tools</li>
            <li>Version control (Git & GitHub)</li>
            <li>Database design (MongoDB, Mongoose)</li>
            <li>Deployment (Netlify, Vercel, Render)</li>
          </ul>
        </div>

        {/* RIGHT SIDE - Skills Grid */}
        <div className="md:w-1/2 grid grid-cols-4 sm:grid-cols-5 gap-3 sm:gap-4 justify-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#22d3ee"
                glarePosition="all"
                className="rounded-xl p-2 sm:p-2 text-center border border-white/10 bg-white/10 backdrop-blur-md hover:shadow-cyan-400/10 transition duration-300"
              >
                <div className="flex flex-col items-center justify-center space-y-1">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    onError={(e) => {
                      e.target.src = "/assets/fallback.png";
                    }}
                  />
                  <p className="text-[10px] sm:text-xs text-gray-200 font-medium">
                    {skill.name}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
