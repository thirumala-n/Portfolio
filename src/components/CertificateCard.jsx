import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import "../styles/CertificateCard.css";

function resolvePublicUrl(path) {
  if (!path) return "";
  if (/^(https?:)?\/\//i.test(path)) return path;

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  if (path.startsWith("/")) {
    return `${normalizedBase}${path.slice(1)}`;
  }

  return `${normalizedBase}${path}`;
}

function CertificateCard({ name, issuer, date, theme = "blue", image, link }) {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const showImage = Boolean(image) && !imageLoadFailed;
  const isValidLink = link && link !== "#";
  const imageUrl = resolvePublicUrl(image);
  const certificateUrl = resolvePublicUrl(link);

  return (
    <div className="certificate-card">
      <div className="certificate-preview">
        {showImage ? (
          <img
            src={imageUrl}
            alt={`${name} certificate`}
            className="certificate-image"
            loading="lazy"
            onError={() => setImageLoadFailed(true)}
          />
        ) : (
          <div className={`certificate-icon ${theme}`}>
            <Award size={24} />
          </div>
        )}
      </div>

      <div className="certificate-inner">
        <div className="certificate-content">
          <h3 className="certificate-title">{name}</h3>
          <p className="certificate-issuer">{issuer}</p>
          <p className="certificate-date">{date}</p>

          {isValidLink ? (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Certificate <ExternalLink size={14} />
            </a>
          ) : (
            <span className="certificate-link certificate-link--disabled">
              Link coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
