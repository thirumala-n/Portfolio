import { useState } from "react";
import { Search } from "lucide-react";
import CertificateCard from "./CertificateCard";
import "../styles/Certificates.css";

function Certificates() {
  const [searchTerm, setSearchTerm] = useState("");

  const certificatesData = [
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "January 2024",
      link: "#",
    },
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "December 2023",
      link: "#",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "November 2023",
      link: "#",
    },
    {
      name: "Python for Data Science",
      issuer: "edX",
      date: "October 2023",
      link: "#",
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
