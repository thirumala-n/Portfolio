import { Github, Linkedin, Mail, Download } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="avatar">T</div>

        <h1 className="hero-title">Thirumala</h1>

        <p className="hero-subtitle">
          3rd Year B.Tech Student | Full Stack Developer
        </p>

        <p className="hero-description">
          Passionate full-stack developer with a strong foundation in programming and experience building web applications using both frontend and backend technologies. Continuously learning, developing projects, and adapting to new technologies while collaborating effectively in team environments.
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
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

