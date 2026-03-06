import { Code } from "lucide-react";
import "../styles/Skills.css";
import { skillCategories } from "../data/skills";


function Skills() {
  

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        

        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-card">
              <h3 className="skill-card-title">
                <Code size={18} />
                {category}
              </h3>

              <div className="skill-tags">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
