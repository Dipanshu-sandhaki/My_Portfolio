import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import CareerGoals from "./components/CareerGoals";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTopButton from "./components/BackToTopButton";
import LeetCodeStats from './components/LeetCodeStats';
import FloatingWhatsappWidget from "./components/FloatingWhatsappWidget";


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <FloatingWhatsappWidget />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="CareerGoals">
        <CareerGoals />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="leetcode-stats">
        <LeetCodeStats username="Dipanshusandhaki" />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default App;
