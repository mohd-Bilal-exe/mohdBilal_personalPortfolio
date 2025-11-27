import { Moon, Sun } from '@phosphor-icons/react'; // Switched SunDim to Sun for cleaner lines
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

export default function DarkMode({ setDarkMode, darkMode, setCursorColor }) {
  const handleEnter = () => {
    setCursorColor({
      color: darkMode ? 'bg-indigo-500 shadow-indigo-500' : 'bg-amber-400 shadow-amber-400',
      size: 'w-4 h-4',
    });
  };

  const handleExit = () => {
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  return (
    <div className="relative flex justify-center items-center p-2 border border-white/10 w-full h-full overflow-hidden">
      {/* THE BACKGROUND TRACK */}
      <div className="relative flex bg-black/20 border border-white/5 rounded-2xl w-full h-full overflow-hidden">
        {/* THE SLIDING PILL (Active State Background) */}
        <div className={`absolute inset-0 p-1 flex justify-start`}>
          <m.div
            layout
            animate={{ translateX: darkMode ? '100%' : '0%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={`
                            h-full w-1/2 rounded-xl shadow-md
                            ${
                              darkMode
                                ? 'bg-neutral-800 border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.3)]' // Dark Mode Glow
                                : 'bg-white border border-white/20 shadow-[0_0_15px_rgba(251,191,36,0.4)]' // Light Mode Glow
                            }
                        `}
          />
        </div>

        {/* SUN BUTTON (Light Mode) */}
        <button
          onClick={() => setDarkMode(false)}
          onMouseEnter={handleEnter}
          onMouseLeave={handleExit}
          className="z-10 relative flex justify-center items-center outline-none w-1/2 h-full"
        >
          <Sun
            size={28}
            weight={!darkMode ? 'fill' : 'regular'} // Fill when active
            className={`
                            transition-all duration-300 
                            ${
                              !darkMode
                                ? 'text-amber-500 scale-110 rotate-0' // Active Style
                                : 'text-neutral-500 hover:text-neutral-300 scale-100 rotate-90' // Inactive Style
                            }
                        `}
          />
        </button>

        {/* MOON BUTTON (Dark Mode) */}
        <button
          onClick={() => setDarkMode(true)}
          onMouseEnter={handleEnter}
          onMouseLeave={handleExit}
          className="z-10 relative flex justify-center items-center outline-none w-1/2 h-full"
        >
          <Moon
            size={28}
            weight={darkMode ? 'fill' : 'regular'} // Fill when active
            className={`
                            transition-all duration-300
                            ${
                              darkMode
                                ? 'text-indigo-400 scale-110 rotate-0' // Active Style
                                : 'text-neutral-500 hover:text-neutral-300 scale-100 -rotate-12' // Inactive Style
                            }
                        `}
          />
        </button>
      </div>
    </div>
  );
}

DarkMode.propTypes = {
  setCursorColor: PropTypes.func.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
