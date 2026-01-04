import "./Navbar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Rim Baradie</h1>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="social-icons">
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
      </div>
    </nav>
  );
}

export default Navbar;
