import { useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio website showcasing projects, technical skills, and contact information with a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/thirumala-n/Portfolio",
    demo: "https://thirumala-n.github.io/Portfolio",
    theme: "blue",
  },
  {
    title: "Online Grocery Store Web Application",
    description:
      "Full-stack grocery e-commerce platform with product browsing, cart management, wishlist functionality, and secure user authentication.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/thirumala-n/grocery-store-project",
    demo: "",
    theme: "green",
  },
  {
    title: "AI & ML Internship Project",
    description:
      "Completed a 2-month internship on Artificial Intelligence and Machine Learning, gaining practical exposure to AI concepts, data analysis, and basic machine learning workflows.",
    tech: ["Python", "Machine Learning", "AI Fundamentals"],
    github: "",
    demo: "/certificates/aiml-internship.pdf",
    theme: "purple",
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
