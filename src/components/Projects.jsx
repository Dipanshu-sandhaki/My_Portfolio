import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projectList = [
    {
      id: 1,
      thumbnail: "/src/assets/weather-project.png",
      name: "Weather App",
      description: "A React-based weather application that fetches real-time weather data from OpenWeatherMap API.",
      github: "https://github.com/Dipanshu-sandhaki/Weather-forecast-Web-Application",
      live: "https://dipanshu-sandhaki.github.io/Weather-forecast-Web-Application/"
    },
    {
      id: 2,
      thumbnail: "/src/assets/Food delivery project.jpg",
      name: "Food Ordering App",
      description: "An E-commerce food ordering platform built with the MERN stack with online payment integration.",
      github: "https://github.com/Dipanshu-sandhaki/Ecommerce-Food-App-Using---MERN-Stack",
      live: "" 
    },
    {
      id: 3,
      thumbnail: "/src/assets/bus-booking-system.jpg",
      name: "Bus Reservation Management System",
      description: "A responsive web app to search, book, and manage bus reservations with user-friendly features and real-time updates.",
      github: "https://github.com/Dipanshu-sandhaki/BUS-Reservation-Management-System",
      live: "" 
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">My Project Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-300"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img 
                src={project.thumbnail} 
                alt={project.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-white">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  <a 
                    href={project.live && project.live !== "#" ? project.live : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      project.live && project.live !== "#"
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-gray-600 text-gray-300 cursor-not-allowed pointer-events-none'
                    }`}
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-14 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          <span className="text-cyan-400 font-semibold">Note:</span> This section is continuously evolving. More projects, feature enhancements, and new innovations will be added here as my journey progresses.
        </p>
      </div>
    </section>
  )
}

export default Projects
