import { Github, ExternalLink } from "lucide-react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, tech, github, demo, theme }) {
  return (
    <div className="project-card">
      <div className={`project-header ${theme}`}>
        {title}
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>

        <p className="project-description">{description}</p>

        <div className="project-tech">
          {tech.map((t) => (
            <span key={t} className="project-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn code"
          >
            <Github size={18} />
            Code
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="btn demo"
          >
            <ExternalLink size={18} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
