import { Award, ExternalLink } from "lucide-react";
import "../styles/CertificateCard.css";



function CertificateCard({ name, issuer, date, link }) {
  return (
    <div className="certificate-card">
      <div className="certificate-inner">
        <div className="certificate-icon">
          <Award size={24} />
        </div>

        <div className="certificate-content">
          <h3 className="certificate-title">{name}</h3>
          <p className="certificate-issuer">{issuer}</p>
          <p className="certificate-date">{date}</p>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="certificate-link"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
