import React from 'react';
import './Envelope.css';

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onClick }) => {
  return (
    <div className="envelope-scene" onClick={!isOpen ? onClick : undefined}>
      <div className={`envelope-wrapper${isOpen ? ' opened' : ''}`}>
        {/* Envelope Body */}
        <div className="envelope-body">
          {/* Gold side triangles (left & right) */}
          <div className="env-triangle env-triangle--left" />
          <div className="env-triangle env-triangle--right" />
          {/* Bottom triangle */}
          <div className="env-triangle env-triangle--bottom" />

          {/* Front face content */}
          <div className="envelope-front">
            <div className="crescent-star">
              <span className="crescent">☽</span>
              <span className="star">★</span>
            </div>
            <p className="env-text">Eid Mubarak</p>
            <p className="env-year">1447 H</p>
            <div className="env-ornament">
              <span>✦</span>
              <span className="ornament-line" />
              <span>✦</span>
            </div>
          </div>
        </div>

        {/* Flap */}
        <div className={`envelope-flap${isOpen ? ' flap-open' : ''}`}>
          <div className="flap-inner">
            <div className="flap-crescent">☽</div>
          </div>
        </div>
      </div>

      {!isOpen && (
        <p className="open-hint">
          <span className="hint-pulse">Ketuk untuk membuka ✨</span>
        </p>
      )}
    </div>
  );
};

export default Envelope;
