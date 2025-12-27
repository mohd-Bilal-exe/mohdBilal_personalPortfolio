import { FlyingSaucer } from '@phosphor-icons/react';
import { AnimatePresence, m } from 'framer-motion';
import PropTypes from 'prop-types';

export default function ExtrasCollapsed({ isFade, setWhatsClicked, handleClick, setCursorColor }) {
  const handleEnter = () => {
    setCursorColor({
      color: 'bg-gradient-to-br from-red-900 to-red-600 shadow-red-600',
      size: 'w-4 h-4',
    });
  };
  const handleExit = () => {
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  return (
    // Main Wrapper: Responsive, No BG/Rounded Corners
    <div
      onMouseEnter={!isFade ? handleEnter : undefined}
      onMouseLeave={!isFade ? handleExit : undefined}
      className={`  
                w-full h-full flex items-center p-2 relative active:scale-[0.98] transition-all duration-300
                ${isFade && 'pointer-events-none grayscale opacity-10'} 
            `}
    >
      <AnimatePresence>
        {isFade && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="top-0 left-0 z-[500] fixed bg-black/30 dark:bg-white/10 w-full h-full"
          />
        )}
      </AnimatePresence>

      <a
        href="#Extra_stuff_I_love_to_do"
        className="group z-10 flex justify-between items-center w-full h-full cursor-pointer"
        onClick={() => {
          setWhatsClicked('Extras');
          handleClick();
        }}
      >
        {/* Left Side: Text Flip Area */}
        <div className="flex justify-start items-center ml-2 w-2/3 h-full">
          {/* The "Window" for the Flip Effect */}
          <div className="relative h-10 overflow-hidden font-thin text-3xl md:text-4xl Pally">
            <div className="flex flex-col w-fit transition-transform group-hover:-translate-y-10 duration-[700ms] ease-out">
              {/* Line 1 (Default Text) */}
              <h1 className="flex items-center h-10">Extras</h1>

              {/* Line 2 (CTA Text - Slides up into view) */}
              <h1 className="flex items-center bg-clip-text bg-gradient-to-br from-red-500 dark:from-red-300 to-red-300 dark:to-red-100 h-10 font-normal text-transparent text-sm md:text-base tracking-wide">
                Take you there? Just click!
              </h1>
            </div>
          </div>
        </div>

        {/* Right Side: Icon */}
        <div className="place-content-center grid w-1/3 h-full">
          <FlyingSaucer
            size="90%"
            weight="regular"
            className="text-neutral-400 group-hover:text-red-600 group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
      </a>
    </div>
  );
}

ExtrasCollapsed.propTypes = {
  setWhatsClicked: PropTypes.func.isRequired,
  setCursorColor: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFade: PropTypes.bool.isRequired,
};
