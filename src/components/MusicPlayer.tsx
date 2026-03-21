import React, { useRef, useState, useEffect } from 'react';
import './MusicPlayer.css';

interface MusicPlayerProps {
  triggerPlay?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ triggerPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Play when envelope is clicked (triggerPlay flips true = valid user gesture)
  useEffect(() => {
    if (!triggerPlay) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;
    audio.play()
      .then(() => {
        setPlaying(true);
        setShowHint(false);
      })
      .catch(() => setPlaying(false));
  }, [triggerPlay]);

  // Hide hint after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      setShowHint(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      <button
        className={`music-btn${playing ? ' music-btn--playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play background music'}
      >
        {/* Ripple rings when playing */}
        {playing && (
          <>
            <span className="ring ring-1" />
            <span className="ring ring-2" />
            <span className="ring ring-3" />
          </>
        )}

        {/* Icon */}
        <span className="music-icon">
          {playing ? (
            /* Pause bars */
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            /* Play triangle */
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </span>
      </button>

      {/* First-load hint bubble */}
      {showHint && !playing && (
        <div className="music-hint">🎵 Tap to play music</div>
      )}
    </>
  );
};

export default MusicPlayer;
