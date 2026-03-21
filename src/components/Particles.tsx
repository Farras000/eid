import React from 'react';
import './Particles.css';

const PARTICLE_COUNT = 30;

const Particles: React.FC = () => {
  return (
    <div className="particles-container" aria-hidden="true">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            fontSize: `${10 + Math.random() * 14}px`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
        >
          {['✦', '✧', '★', '✨', '⬟', '◆'][Math.floor(Math.random() * 6)]}
        </span>
      ))}
    </div>
  );
};

export default Particles;
