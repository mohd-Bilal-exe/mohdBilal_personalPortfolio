import { AnimatePresence, m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { MapPin, Clock } from '@phosphor-icons/react'; // Ensure you have these icons

export default function Location({ isFade, darkMode, setCursorColor }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState('');

  // 1. Real-time Clock Logic (India Standard Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // 2. Mouse Tracking Logic (Spotlight)
  const handleMouseMove = e => {
    if (!divRef.current || isFade) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleEnter = () => {
    setCursorColor({
      color: darkMode ? 'bg-emerald-500 shadow-emerald-400' : 'bg-emerald-300 shadow-emerald-200',
      size: 'w-4 h-4',
    });
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
      className={`
                relative w-full h-full overflow-hidden border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900
                ${isFade && 'pointer-events-none grayscale opacity-10'} 
                transition-all duration-300 group/map
            `}
    >
      {/* SPOTLIGHT OVERLAY */}
      <div
        className="z-20 absolute -inset-px opacity-0 group-hover/map:opacity-100 transition duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />

      {/* FADE OVERLAY */}
      <AnimatePresence>
        {isFade && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-50 absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative w-full h-full overflow-hidden">
        {/* THE MAP IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center group-hover/map:scale-110 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${darkMode ? '/LocationDark.webp' : '/LocationLight.webp'})`,
          }}
        />

        {/* Dark Overlay Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

        {/* TOP LEFT: Location Badge */}
        <div className="top-4 left-4 z-10 absolute flex items-center gap-2 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md px-3 py-1.5 border border-black/10 dark:border-white/10 rounded-full">
          <div className="relative flex w-2.5 h-2.5">
            <span className="inline-flex absolute bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
            <span className="inline-flex relative bg-emerald-500 rounded-full w-2.5 h-2.5"></span>
          </div>
          <span className="font-medium text-gray-900 dark:text-white text-xs tracking-wide">Lucknow</span>
        </div>

        {/* CENTER: Radar Animation (Visual Interest) */}
        <div className="top-1/2 left-1/2 absolute flex justify-center items-center -translate-x-1/2 -translate-y-1/2">
          <div className="absolute opacity-20 border border-emerald-500/30 rounded-full w-24 h-24 animate-ping" />
          <div className="absolute bg-emerald-500/20 blur-xl rounded-full w-12 h-12" />
          <MapPin
            weight="fill"
            className="top-[-12px] z-10 relative drop-shadow-lg text-emerald-500 text-3xl"
          />
        </div>

        {/* BOTTOM BAR: Time & Info */}
        <div className="right-4 bottom-4 left-4 absolute flex justify-between items-end">
          <div className="flex flex-col">
            <span className="mb-0.5 font-bold text-[10px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
              Local Time
            </span>
            <div className="flex items-center gap-1.5 text-gray-900 dark:text-white">
              <Clock weight="bold" className="text-emerald-400" />
              <span className="font-variant-numeric font-bold tabular-nums text-xl tracking-tight">
                {time}
              </span>
            </div>
          </div>

          {/* Coordinates (Optional - adds 'tech' feel) */}
          <div className="hidden smartphone:hidden md:block opacity-60 font-mono text-[9px] text-neutral-800 dark:text-neutral-500 text-right">
            26.8467° N<br />
            80.9462° E
          </div>
        </div>
      </div>
    </div>
  );
}

Location.propTypes = {
  darkMode: PropTypes.bool,
  isFade: PropTypes.bool,
  setCursorColor: PropTypes.func.isRequired,
};
