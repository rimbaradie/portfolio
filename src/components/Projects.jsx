import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "React Native Weather App",
    description:
      "Mobile weather app with real-time location-based forecasts and 7-day outlook.",
    image: "assets/react-native-weather.jpeg",
    link: "https://github.com/rimbaradie/react-native-weather",
    type: "mobile",
    tech: [
      "React Native",
      "JavaScript",
      "Expo",
      "React Navigation",
      "Open-Meteo API",
    ],
  },
  {
    title: "React Native To-Do List",
    description: "Mobile To-Do List app storing tasks locally for persistence.",
    image: "assets/react-native-todo.jpeg",
    link: "https://github.com/rimbaradie/react-native-todolist",
    type: "mobile",
    tech: ["React Native", "JavaScript", "Expo", "AsyncStorage"],
  },
  {
    title: "React Native Temperature Converter",
    description:
      "Converts temperatures between Celsius and Fahrenheit with a clean interface.",
    image: "assets/react-native-temp.jpeg",
    link: "https://github.com/rimbaradie/react-native-temperature-converter-app",
    type: "mobile",
    tech: ["React Native", "JavaScript", "Expo"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built with React showcasing my projects and skills.",
    image: "assets/portfolio.png",
    link: "https://rimbaradie.github.io/portfolio/",
    type: "web",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "React Poster App",
    description:
      "Web app where users can add posts displayed in a dynamic list.",
    image: "assets/reactposter.jpeg",
    link: "https://github.com/rimbaradie/ReactPoster",
    type: "web",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "React Investment Calculator",
    description:
      "Web app to calculate investment growth over time with year-by-year breakdown.",
    image: "assets/investment-calculator.png",
    link: "https://github.com/rimbaradie/InvestmentCalulator",
    type: "web",
    tech: ["React", "JavaScript", "CSS", "React Hooks"],
  },

  {
    title: "Makeup Detection System",
    description:
      "Web app using Face++ API to analyze photos and determine skin type for personalized makeup suggestions.",
    image: "assets/makeup-detection.jpeg",
    link: "https://github.com/rimbaradie/makeup-detection-system",
    type: "web",
    tech: [
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "Java",
      "Face++ API",
    ],
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Filter Buttons */}
      <div className="project-filters">
        {["all", "mobile", "web"].map((type) => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="project-grid">
        <AnimatePresence exitBeforeEnter>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title} // unique key is important for AnimatePresence
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
