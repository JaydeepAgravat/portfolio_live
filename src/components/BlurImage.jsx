import { useState } from 'react';

export default function BlurImage({ src, alt, className, imgStyle }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`blur-img-wrap ${loaded ? 'is-loaded' : ''} ${className || ''}`}>
      {!loaded && <div className="blur-img-shimmer" />}
      <img
        src={src}
        alt={alt}
        style={imgStyle}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
