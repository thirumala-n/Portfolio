import { useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const projectsData = [
    {
      title: "E-Commerce Website",
      description:
        "Full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project1",
      demo: "https://demo-link.com",
      theme: "blue",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and deadline tracking.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/project2",
      demo: "https://demo-link.com",
      theme: "purple",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard displaying real-time weather data, forecasts, and climate statistics using external APIs.",
      tech: ["JavaScript", "API Integration", "Chart.js"],
      github: "https://github.com/yourusername/project3",
      demo: "https://demo-link.com",
      theme: "green",
    },
    
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Showcase of my recent work and personal projects
        </p>

        <div className="projects-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search projects by name or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">
            No projects found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
