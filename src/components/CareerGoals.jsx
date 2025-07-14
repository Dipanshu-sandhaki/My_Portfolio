import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Target,
  Rocket,
  Lightbulb,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

const goals = [
  {
    icon: <Rocket size={28} className="text-cyan-400" />,
    title: "Build Scalable Applications",
    description:
      "I aim to develop high-performance and scalable web applications that solve real-world problems."
  },
  {
    icon: <Target size={28} className="text-green-400" />,
    title: "Master Full-Stack Development",
    description:
      "To become an expert in both frontend and backend technologies including React, Node.js, and cloud infrastructure."
  },
  {
    icon: <Lightbulb size={28} className="text-yellow-300" />,
    title: "Contribute to Open Source",
    description:
      "Collaborate on impactful open-source projects and give back to the developer community."
  },
  {
    icon: <TrendingUp size={28} className="text-pink-400" />,
    title: "Stay Ahead with AI & Innovation",
    description:
      "Leverage AI tools and keep up with emerging technologies to create future-ready digital solutions."
  },
  {
    icon: <Users size={28} className="text-purple-400" />,
    title: "Lead & Inspire",
    description:
      "Grow into a tech leadership role where I can mentor others and drive innovation within teams."
  },
  {
    icon: <ShieldCheck size={28} className="text-blue-400" />,
    title: "Product Innovator",
    description:
      "Design and launch intuitive tech products that impact users positively and disrupt traditional industries."
  }
];

const CareerGoals = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="goals"
      className="py-20 bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          My Ambitions & Career Goals
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Here are the aspirations that fuel my journey as a passionate developer and learner.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {goals.map((goal, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-6 text-left hover:scale-[1.02] transition duration-500"
            >
              <div className="flex items-center gap-4 mb-3">
                {goal.icon}
                <h3 className="text-lg font-semibold text-white">
                  {goal.title}
                </h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGoals;
