import PropTypes from 'prop-types';
import { ArrowUpRight } from '@phosphor-icons/react';
import { AnimatePresence, m } from 'framer-motion';
import { useRef, useState } from 'react';

export default function About({ isFade, handleClick, setWhatsClicked, setCursorColor }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFade) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
    setCursorColor({
      color: 'bg-gradient-to-br from-red-500 to-red-400 shadow-red-400',
      size: 'w-2 h-2',
    });
  };

  const handleBlur = () => {
    setOpacity(0);
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`
                relative flex flex-col justify-between w-full h-full overflow-hidden
                border border-white/10 
                ${isFade && 'pointer-events-none grayscale opacity-10'} 
                transition-all duration-300 group/card
            `}
    >
      {/* SPOTLIGHT EFFECT OVERLAY */}
      <div
        className="absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <AnimatePresence>
        {isFade && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-[50] absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      <div className="z-10 relative flex flex-col justify-between p-6 h-full">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3">
            {/* UPDATED: Increased text size to 5xl (desktop) and 4xl (mobile) */}
            <h2 className="font-bold text-gray-800 dark:text-white smartphone:text-4xl text-5xl leading-none tracking-tighter">
              Mohd <br /> <span className="text-neutral-400">Bilal</span>
            </h2>

            {/* UPDATED: Increased text size to text-sm */}
            <div className="flex items-center gap-2 bg-white/5 mt-1 px-3 py-1.5 border border-white/5 rounded-md w-fit">
              <div className="relative flex w-2.5 h-2.5">
                <span className="inline-flex absolute bg-green-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
                <span className="inline-flex relative bg-green-500 rounded-full w-2.5 h-2.5"></span>
              </div>
              <span className="flex items-center gap-1 font-medium text-neutral-400 text-sm">
                Lucknow, India
              </span>
            </div>
          </div>

          {/* AVATAR */}
          <div className="group/avatar relative">
            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full scale-0 group-hover/avatar:scale-125 transition-all duration-500" />
            <div className="relative flex justify-center items-center bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-xl border border-white/10 rounded-2xl size-[100px] smartphone:size-[80px] overflow-hidden">
              <img
                src="/2821.webp"
                className="drop-shadow-lg h-[85%] object-cover group-hover/avatar:rotate-3 group-hover/avatar:scale-110 transition-transform duration-500 transform"
                alt="Mohd Bilal"
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        {/* UPDATED: Increased text size to text-base (16px) and text-sm */}
        <div className="space-y-2 mt-4">
          <p className="text-neutral-300 smartphone:text-sm text-base text-pretty leading-relaxed">
            <span className="font-semibold text-white">Full Stack Wizard</span> ⚡ Frontend Fanatic
            & Web Dev Junkie.
          </p>
          <p className="text-neutral-500 smartphone:text-xs text-sm">
            Building sites for fun (and occasionally to impress my cat).
          </p>
        </div>

        {/* BUTTON */}
        {/* UPDATED: Increased text size to text-sm */}
        <button
          onClick={() => {
            setWhatsClicked('About');
            handleClick();
          }}
          className="group/btn flex justify-between items-center bg-white/5 hover:bg-white/10 mt-auto p-2 border border-white/5 hover:border-white/20 rounded-xl w-full transition-all duration-300"
        >
          <div className="flex flex-col justify-start h-5 overflow-hidden text-left">
            <span className="font-medium text-white text-sm tracking-wide transition-transform group-hover/btn:-translate-y-5 duration-300">
              Unveil More
            </span>
            <span className="font-medium text-red-400 text-sm tracking-wide transition-transform group-hover/btn:-translate-y-5 duration-300">
              Let's get personal
            </span>
          </div>

          <div className="bg-white p-0.5 rounded-full text-black group-hover/btn:rotate-45 transition-transform duration-300">
            <ArrowUpRight size={16} weight="bold" />
          </div>
        </button>
      </div>
    </div>
  );
}

About.propTypes = {
  handleClick: PropTypes.func.isRequired,
  setWhatsClicked: PropTypes.func.isRequired,
  setCursorColor: PropTypes.func.isRequired,
  isFade: PropTypes.bool.isRequired,
};
