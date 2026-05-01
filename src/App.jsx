import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import PortfolioScene from './scenes/PortfolioScene';
import Hud from './ui/Hud';

export default function App() {
  const [activeZone, setActiveZone] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const roverPos = useRef({ x: 0, y: 1, z: 4 });
  const keys = useRef({ forward: false, backward: false, left: false, right: false });
  const overlayRef = useRef();

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 1 }, { opacity: 0, duration: 1.5, delay: 0.4, pointerEvents: 'none' });
    const map = { w: 'forward', ArrowUp: 'forward', s: 'backward', ArrowDown: 'backward', a: 'left', ArrowLeft: 'left', d: 'right', ArrowRight: 'right' };
    const key = (pressed) => (e) => map[e.key] && (keys.current[map[e.key]] = pressed);
    window.addEventListener('keydown', key(true));
    window.addEventListener('keyup', key(false));
    return () => {
      window.removeEventListener('keydown', key(true));
      window.removeEventListener('keyup', key(false));
    };
  }, []);

  return (
    <main className="h-full w-full relative">
      <PortfolioScene keys={keys} setActiveZone={setActiveZone} roverPos={roverPos} />
      <Hud activeZone={activeZone} selectedProject={selectedProject} setSelectedProject={setSelectedProject} onClose={() => setSelectedProject(null)} />
      <div ref={overlayRef} className="absolute inset-0 bg-black grid place-items-center text-3xl tracking-widest">ENTERING PORTFOLIO WORLD...</div>
    </main>
  );
}
