import { useState } from "react";
import { Search } from "lucide-react";
import CertificateCard from "./CertificateCard";
import "../styles/Certificates.css";

function Certificates() {
  const [searchTerm, setSearchTerm] = useState("");

 const certificatesData = [
  {
    name: "Modern Programming in C++",
    issuer: "NPTEL",
    date: "Oct 2024",
    link: "#",
  },
  {
    name: "Internet of Things",
    issuer: "NPTEL",
    date: "Apr 2024",
    link: "#",
  },
  {
    name: "Soft Skills",
    issuer: "NPTEL",
    date: "Oct 2023",
    link: "#",
  },
  {
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft Azure",
    date: "Mar 2024",
    link: "#",
  },
  {
    name: "Artificial Intelligence & Machine Learning Internship",
    issuer: "APSCHE & SmartBridge",
    date: "Jul 2025",
    link: "/certificates/aiml-internship.pdf",
  },
];

  const filteredCertificates = certificatesData.filter(
    (cert) =>
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <h2 className="certificates-title">Certificates</h2>
        <p className="certificates-subtitle">
          Professional certifications and courses completed
        </p>

        <div className="certificates-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="certificates-grid">
          {filteredCertificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <p className="certificates-empty">
            No certificates found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default Certificates;
