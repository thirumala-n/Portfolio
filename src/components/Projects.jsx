import { useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const projectsData = [
  {
    title: "AI Chat Application",
    description:
      "Real-time AI-powered chat application built with Spring AI for conversational responses. Features Spring Security with JWT authentication, role-based access control, WebSockets for real-time bidirectional messaging, and MySQL-backed conversation persistence. Follows Controller-Service-Repository architecture with centralized exception handling.",
    tech: ["Java 21", "Spring Boot", "Spring AI", "Spring Security", "JWT", "WebSockets", "React", "MySQL"],
    github: "",
    demo: "",
    theme: "blue",
  },
  {
    title: "RentEasy – House Rental Platform",
    description:
      "Full-stack house rental platform supporting property listing, search, booking, and payment workflows. Implements role-based features for tenants, property owners, and administrators. Integrates Razorpay for payments, Spring Data JPA for entity relationships, and JWT-secured REST APIs with request validation.",
    tech: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "React", "MySQL", "Razorpay"],
    github: "",
    demo: "",
    theme: "green",
  },
  {
    title: "RGM Campus Connect",
    description:
      "Centralized campus platform for student communities, placement updates, events, posts, and messaging. Features real-time notifications using WebSockets, Spring Data JPA entity relationships, and transactional service operations with Spring Security and JWT.",
    tech: ["Java 21", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "React", "MySQL", "WebSockets"],
    github: "",
    demo: "",
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
