import { useEffect, useRef } from "react";
import { CloseIcon } from "./icons";

export default function Lightbox({ title, images, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      onClick={onClose}
    >
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-head">
          <h3>{title}</h3>
          <button
            ref={closeRef}
            className="icon-btn"
            onClick={onClose}
            aria-label="Close screenshots"
          >
            <CloseIcon s={18} />
          </button>
        </div>
        <div className="lightbox-strip">
          {images.map((src, i) => (
            <img key={src} src={src} alt={`${title} screenshot ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
