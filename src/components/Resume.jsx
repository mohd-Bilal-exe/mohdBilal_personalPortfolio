import { AnimatePresence, m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import useStore from '../stores/useStores';
import { DownloadSimple, Eye, FileText } from '@phosphor-icons/react';

export default function Resume({ isFade, setCursorColor }) {
  const { setResumeModalOpen } = useStore();
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Spotlight Logic
  const handleMouseMove = e => {
    if (!divRef.current || isFade) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleEnter = () => {
    setCursorColor({ color: 'bg-purple-500 shadow-purple-500', size: 'w-4 h-4' });
  };

  const handleExit = () => {
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleExit}
      className={`relative w-full h-full flex flex-col justify-between overflow-hidden border border-neutral-200 dark:border-white/10 bg-white dark:bg-transparent p-4 group/resume ${
        isFade && 'pointer-events-none grayscale opacity-10'
      } transition-all duration-300`}
    >
      {/* SPOTLIGHT EFFECT */}
      <div
        className="z-10 absolute -inset-px opacity-0 group-hover/resume:opacity-100 transition duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.1), transparent 40%)`,
        }}
      />

      {/* SCANNER LINE ANIMATION (The Cool Factor) */}
      <div className="top-0 left-0 z-0 absolute opacity-0 group-hover/resume:opacity-100 w-full h-full overflow-hidden transition-opacity duration-500 pointer-events-none">
        <m.div
          className="bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)] w-full h-[2px]"
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute' }}
        />
      </div>

      {/* BACKGROUND DECORATION (Abstract Text Lines) */}
      <div className="top-4 right-4 absolute flex flex-col items-end gap-2 opacity-10 pointer-events-none">
        <div className="bg-white rounded-full w-12 h-1"></div>
        <div className="bg-white rounded-full w-8 h-1"></div>
        <div className="bg-white rounded-full w-10 h-1"></div>
      </div>

      {/* FADE OVERLAY */}
      <AnimatePresence>
        {isFade && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-[50] absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* HEADER CONTENT */}
      <div className="z-20 relative flex flex-col">
        <div className="flex items-center gap-2">
          <span className="flex justify-center items-center bg-purple-500/20 rounded-full w-7 h-7 text-purple-400">
            <FileText weight="fill" size={12} />
          </span>
          <h5 className="font-medium text-purple-300 text-xs uppercase tracking-wider">
            Updated 2025
          </h5>
        </div>
        <h1 className="mt-2 font-bold text-black dark:text-white text-3xl tracking-tight">Resume</h1>
      </div>

      {/* ACTION BUTTONS */}
      <div className="z-20 relative flex items-center gap-3 mt-auto">
        {/* VIEW BUTTON (Primary) */}
        <button
          onClick={() => setResumeModalOpen(true)}
          className="flex flex-1 justify-center items-center gap-2 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-purple-50 px-1 py-2 rounded-xl font-bold text-white dark:text-black text-sm active:scale-95 transition-all duration-200"
        >
          <Eye size={18} weight="bold" />
          <span>Preview</span>
        </button>

        {/* DOWNLOAD BUTTON (Secondary) */}
        <a
          href="/MohdBilalresume.pdf"
          download="MohdBilalresume"
          className="group/download flex justify-center items-center bg-white/5 hover:bg-purple-500 border border-white/10 hover:border-purple-500 rounded-xl w-12 h-12 text-white hover:text-white transition-all duration-200"
        >
          <DownloadSimple size={20} weight="bold" className="group-hover/download:animate-bounce" />
        </a>
      </div>
    </div>
  );
}

Resume.propTypes = {
  setCursorColor: PropTypes.func.isRequired,
  isFade: PropTypes.bool.isRequired,
};
