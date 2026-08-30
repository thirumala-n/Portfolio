import { Github, Linkedin, Mail, Download } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="avatar">T</div>

        <h1 className="hero-title">Thirumala Nemberu</h1>

        <p className="hero-subtitle">
          Software Engineer | Java Backend Developer
        </p>

        <p className="hero-description">
          I build backend-focused, full-stack applications using Java and Spring Boot, with experience in REST APIs, secure authentication, database-driven systems, and real-time features.
        </p>

        <p className="hero-tech-line">
          Spring Boot · Spring Security · JPA · WebSockets · MySQL
        </p>

        <div className="hero-buttons">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn primary"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn outline"
          >
            Contact Me
          </button>

          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" className="btn secondary">
            <Download size={18} />
            Resume
          </a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/thirumala-n" target="_blank" rel="noreferrer">
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/thirumala-n"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:nthirumala2274@gmail.com">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

