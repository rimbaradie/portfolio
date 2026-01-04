function ProjectCard({ title, description, image, link, tech, type }) {
  return (
    <div className="project-card">
      {image && (
        <div className={`project-image ${type}`}>
          <img src={image} alt={title} />
          <span className="project-type">{type}</span>
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-badges">
        {tech?.map((t) => (
          <span key={t} className="tech-badge">
            {t}
          </span>
        ))}
      </div>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
