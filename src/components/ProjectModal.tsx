import React from "react";
import ImageLightbox from "../components/ImageLightbox";
import ReactMarkdown from "react-markdown";
import '../assets/styles/ProjectModal.scss';

export default function ProjectModal({ project, onClose }: any) {
    const [closing, setClosing] = React.useState(false);
    const [lightboxSrc, setLightboxSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (project) {
      setClosing(false); // play opening animation
      document.body.style.overflow = "hidden"; // disable background scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // restore scroll when modal closes
    };
  }, [project]);

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
          </div>

        </div>
      </div>
    </div>
  );
}