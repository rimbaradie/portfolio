import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Rim Baradie
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A showcase of my projects, skills, and achievements in the field of
          computer science
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#projects" className="hero-button">
            View Projects
          </a>
          <a
            href="assets/Rim_Baradie_Junior_Frontend_Developer_CV.pdf"
            className="hero-button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Floating shapes for visual style */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>
    </section>
  );
}

export default Hero;
