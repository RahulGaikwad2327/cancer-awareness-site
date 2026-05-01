import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hud({ activeZone, selectedProject, setSelectedProject, onClose }) {
  const project = portfolioData.projects.find((p) => p.id === selectedProject);
  return (
    <>
      <div className="absolute top-5 left-5 glass rounded-2xl p-4 max-w-sm">
        <p className="text-cyan-300 text-sm">{portfolioData.role}</p>
        <h1 className="text-2xl font-semibold">{portfolioData.name}</h1>
        <p className="text-slate-200 text-sm mt-1">{portfolioData.intro}</p>
        <p className="text-xs text-slate-400 mt-3">Use WASD/Arrow keys. Click glowing cubes to open zones.</p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2 text-sm">
        Active Zone: <span className="text-cyan-300 uppercase">{activeZone}</span>
      </div>

      <AnimatePresence>
        {activeZone === 'projects' && !project && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-5 top-5 glass rounded-2xl p-4 w-96">
            <h2 className="font-semibold mb-3">Projects District</h2>
            {portfolioData.projects.map((p) => <button key={p.id} onClick={() => setSelectedProject(p.id)} className="block w-full text-left mb-2 rounded-lg bg-slate-800/70 p-2 hover:bg-slate-700">{p.title}</button>)}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {project && (
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40 grid place-items-center p-6">
            <div className="glass rounded-2xl p-5 max-w-xl w-full">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-200 my-2">{project.description}</p>
              <p className="text-xs text-slate-300">Tech: {project.tech.join(', ')}</p>
              <div className="mt-3 flex gap-3 text-sm"><a href={project.live}>Live</a><a href={project.github}>GitHub</a><span>{project.role}</span></div>
              <button onClick={onClose} className="mt-4 rounded-lg bg-cyan-600 px-3 py-2">Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
