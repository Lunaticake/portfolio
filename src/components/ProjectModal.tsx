import React from "react";
import ImageLightbox from "../components/ImageLightbox";
import ReactMarkdown from "react-markdown";
import '../assets/styles/ProjectModal.scss';

export default function ProjectModal({ project, onClose }: any) {
    const [closing, setClosing] = React.useState(false);
    const [lightboxSrc, setLightboxSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (project) {
      setClosing(false);
      document.body.style.overflow = "hidden";
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightboxSrc) {
        setClosing(true);
        setTimeout(() => {
          onClose();
          setClosing(false);
          setLightboxSrc(null);
        }, 300); // matches animation
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, lightboxSrc, onClose]);

  if (!project && !closing) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
      setLightboxSrc(null);
    }, 300); // matches animation
  };

  return (
    <div className="modalOverlay" onClick={handleClose}>
      <div
        className={`modalContent ${closing ? "slideOut" : "slideIn"}`}
        onClick={(e) => e.stopPropagation()}
      >

        <button className="closeButton" onClick={handleClose}>✕</button>

        {/* Title */}
        <h2 className="modalTitle">{project.title}</h2>

        {/* Main content */}
        <div className="modalBody">

          {/* Left: video + images */}
          <div className="modalLeft">

            {project.video && (
              <video controls className="modalVideo">
                <source src={project.video} type="video/mp4" />
              </video>
            )}

            {project.images && project.images.length > 0 && (
            <div className="modalImages">
                {project.images.map((img: string, i: number) => (
                <img
                    key={i}
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    onClick={() => setLightboxSrc(img)}
                />
                ))}
            </div>
            )}

            {lightboxSrc && (
                <ImageLightbox
                    src={lightboxSrc}
                    alt={project.title}
                    onClose={() => setLightboxSrc(null)}
                />
            )}

          </div>

          {/* Right: description */}
          <div className="modalRight">
            <ReactMarkdown>{project.description}</ReactMarkdown>

            {project.roles && project.roles.length > 0 && (
              <p><strong>My Roles: </strong> {project.roles.join(", ")}</p>
            )}

            {project.tech && project.tech.length > 0 && (
              <p><strong>Used Technologies: </strong> {project.tech.join(", ")}</p>
            )}

            {project.contributions && project.contributions.length > 0 && (
            <div>
              <strong>Key Contributions:</strong>
              <ul>
                {project.contributions.map((role: string, index: number) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
            )}

            {project.links && project.links.length > 0 && (
              <p>
                <strong>Relevant Links: </strong>
                {project.links.map((link: { name: string; url: string }, index: number) => (
                  <span key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                    {index < project.links.length - 1 && ", "}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}