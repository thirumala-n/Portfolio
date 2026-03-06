import { Calendar } from "lucide-react";
import "../styles/Education.css";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science Engineering",
      institution: "Rajeev Gandhi Memorial College Of Engineering And Technology, Nandyal",
      year: "2023 - 2027",
      cgpa: "8.5 / 10",
      coursework: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      degree: "Senior Secondary (12th)",
      branch: "science",
      institution: "Government Junior College Holagunda ",
      year: "2022",
      cgpa: "90%",
      coursework: [],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <p className="education-subtitle">
          My academic journey and qualifications
        </p>

        <div className="education-list">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-branch">{edu.branch}</p>
                  <p className="education-institution">
                    {edu.institution}
                  </p>
                </div>

                <div className="education-meta">
                  <p className="education-year">
                    <Calendar size={16} />
                    {edu.year}
                  </p>
                  <p className="education-cgpa">{edu.cgpa}</p>
                </div>
              </div>

              {edu.coursework.length > 0 && (
                <div className="education-coursework">
                  <p className="coursework-title">
                    Relevant Coursework:
                  </p>
                  <div className="coursework-tags">
                    {edu.coursework.map((course) => (
                      <span key={course} className="coursework-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
