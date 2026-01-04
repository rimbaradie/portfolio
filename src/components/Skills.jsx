import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const skills = {
    Frontend: [
      "React",
      "React Native",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    Database: ["SQL", "MySQL"],
    "Tools & Version Control": ["GitHub", "Expo", "Andriod Studio"],
    "Other Programming": ["C++", "Java", "PHP", "Python", "C#"],
  };

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{category}</h3>
            <div className="skill-badges">
              {skillList.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
