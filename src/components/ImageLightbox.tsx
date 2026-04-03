import React from "react";
import ReactDOM from "react-dom";
import '../assets/styles/ImageLightbox.scss';

interface Props {
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: Props) {

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="lightboxOverlay" onClick={onClose}>
      <button className="lightboxCloseButton" onClick={onClose}>
        ✕
      </button>

      <img
        src={src}
        alt={alt}
        className="lightboxImage"
      />
    </div>,
    document.body
  );
}