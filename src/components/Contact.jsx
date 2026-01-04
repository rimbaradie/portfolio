import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:baradiereem30@gmail.com">baradiereem30@gmail.com</a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/rim-baradie-a36a5920b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/rim-baradie-a36a5920b
          </a>
          <br />
          <small style={{ color: "#555" }}>
            *May ask you to log in to view the profile*
          </small>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/rimbaradie"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/rimbaradie
          </a>
        </p>
      </div>
    </motion.section>
  );
}

export default Contact;
