import { useState } from 'react';
import './App.css';
import Envelope from './components/Envelope';
import GreetingCard from './components/GreetingCard';
import Particles from './components/Particles';
import MusicPlayer from './components/MusicPlayer';
import { useVisitorTracker } from './hooks/useVisitorTracker';

type AppState = 'closed' | 'opening' | 'open';

function App() {
  useVisitorTracker();

  const [state, setState] = useState<AppState>('closed');
  const [triggerPlay, setTriggerPlay] = useState(false);

  const handleEnvelopeClick = () => {
    if (state !== 'closed') return;
    setTriggerPlay(true); // starts music on user gesture
    setState('opening');
    setTimeout(() => {
      setState('open');
    }, 900);
  };


  return (
    <div className="app">
      {/* Animated background pattern */}
      <div className="bg-pattern" aria-hidden="true" />

      {/* Gold sparkles */}
      <Particles />

      {/* Main content */}
      <main className="main-content">
        {state !== 'open' && (
          <div className="envelope-area">
            <Envelope isOpen={state === 'opening'} onClick={handleEnvelopeClick} />
          </div>
        )}

        {state === 'open' && (
          <div className="card-area">
            <GreetingCard />
          </div>
        )}
      </main>

      {/* Subtle footer */}
      <footer className="app-footer">
        <span>✦ Eid Mubarak 1447 H ✦</span>
      </footer>

      {/* Floating music player */}
      <MusicPlayer triggerPlay={triggerPlay} />
    </div>
  );
}

export default App;
