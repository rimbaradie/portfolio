import { motion } from "framer-motion";
import "./About.css";
import profilePic from "/assets/profile.jpeg"; // replace with your professional photo

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Rim Baradie</strong>! I recently graduated with a
            degree in Computer Science and have been building my skills as a
            frontend developer. I specialize in <strong>React</strong> and{" "}
            <strong>React Native</strong>, and I have developed{" "}
            <strong>3 mobile applications</strong> using React Native. I’m
            passionate about creating intuitive and responsive user interfaces
            and bringing ideas to life through code.
          </p>
          <p>
            I’m currently looking for opportunities as a{" "}
            <strong>junior frontend developer</strong>, where I can contribute
            to building engaging web and mobile applications, continue learning,
            and grow as a developer.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profilePic} alt="Rim Baradie" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
