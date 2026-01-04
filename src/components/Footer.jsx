import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/rim-baradie-a36a5920b/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/rimbaradie"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
        >
          <FaGithub />
        </a>

        <a href="mailto:baradiereem30@gmail.com" title="Send Email">
          <FaEnvelope />
        </a>
      </div>
      <p>© 2025 Rim Baradie. All rights reserved.</p>
      <p style={{ fontSize: "0.85rem", color: "#bbb", marginTop: "0.5rem" }}>
        LinkedIn may ask you to log in to view the profile.
      </p>
    </footer>
  );
}

export default Footer;
