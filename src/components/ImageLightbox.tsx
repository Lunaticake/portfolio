import React from "react";
import '../assets/styles/ImageLightbox.scss';

interface Props {
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
  return (
    <div
      className="lightboxOverlay"
      onClick={(e) => e.stopPropagation()} // optional: prevent accidental overlay clicks
    >
      <img
        src={src}
        alt={alt}
        className="lightboxImage"
        onClick={onClose} // close when clicking the image
      />
    </div>
  );
}