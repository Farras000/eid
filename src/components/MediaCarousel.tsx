import React, { useRef, useState } from 'react';
import './MediaCarousel.css';

// ── All media in public/media ──────────────────────────────────────────────
const ALL_MEDIA = [
  'WhatsApp Image 2026-03-21 at 7.51.23 AM(1).jpeg',
  'WhatsApp Image 2026-03-21 at 7.51.23 AM.jpeg',
  'WhatsApp Image 2026-03-21 at 7.51.24 AM.jpeg',
  'WhatsApp Image 2026-03-21 at 7.51.25 AM.jpeg',
  'WhatsApp Image 2026-03-21 at 7.53.25 AM(1).jpeg',
  'WhatsApp Image 2026-03-21 at 7.53.25 AM.jpeg',
  'WhatsApp Video 2026-03-21 at 7.51.24 AM.mp4',
  'WhatsApp Video 2026-03-21 at 7.51.25 AM.mp4',
  'WhatsApp Video 2026-03-21 at 7.53.24 AM.mp4',
];

const CAPTIONS = [
  'You look so good here ✨',
  'Happy moments 🌙',
  'Blessed vibes only 💛',
  'Best memory 🌟',
  'Pure happiness 🤍',
  'Cherished forever 🕌',
  'So much joy here 😊',
  'Golden moments ✦',
  'Love this so much 💚',
];

function isVideo(filename: string) {
  return filename.endsWith('.mp4') || filename.endsWith('.mov') || filename.endsWith('.webm');
}

// Split into two rows, interleave images & videos
const ROW_A = [...ALL_MEDIA.slice(0, Math.ceil(ALL_MEDIA.length / 2))];
const ROW_B = [...ALL_MEDIA.slice(Math.ceil(ALL_MEDIA.length / 2))];

// Assign a stable random caption to each file
const captionMap: Record<string, string> = {};
ALL_MEDIA.forEach((file, i) => {
  captionMap[file] = CAPTIONS[i % CAPTIONS.length];
});

// ── Individual media card ──────────────────────────────────────────────────
interface MediaCardProps {
  file: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ file }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const src = `/media/${encodeURIComponent(file)}`;
  const caption = captionMap[file];

  const handleMouseEnter = () => {
    setHovered(true);
    // Resume video playback on hover if paused
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`media-card${hovered ? ' media-card--hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVideo(file) ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="media-item"
        />
      ) : (
        <img src={src} alt={caption} className="media-item" loading="lazy" />
      )}

      {/* Caption overlay */}
      <div className="media-caption">
        <span>{caption}</span>
      </div>
    </div>
  );
};

// ── Marquee row (direction: 'left' | 'right') ─────────────────────────────
interface MarqueeRowProps {
  files: string[];
  direction: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ files, direction }) => {
  // Duplicate items for seamless loop
  const looped = [...files, ...files, ...files];

  return (
    <div className={`marquee-outer marquee-outer--${direction}`}>
      <div className={`marquee-track marquee-track--${direction}`}>
        {looped.map((file, idx) => (
          <MediaCard key={`${file}-${idx}`} file={file} />
        ))}
      </div>
    </div>
  );
};

// ── Main export ────────────────────────────────────────────────────────────
const MediaCarousel: React.FC = () => {
  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <div className="carousel-divider-line" />
        <span className="carousel-title">✦ Momen Bersama ✦</span>
        <div className="carousel-divider-line" />
      </div>

      <MarqueeRow files={ROW_A} direction="left" />
      <MarqueeRow files={ROW_B} direction="right" />
    </section>
  );
};

export default MediaCarousel;
