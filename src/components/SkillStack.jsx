import { DivOrigami } from './DivOrigami';
import { AnimatePresence, m } from 'framer-motion';
import { Arrow } from './Svgs'; // Assuming this is your hand-drawn arrow
import PropTypes from 'prop-types';

export default function SkillStack({ isFade, setCursorColor }) {
  return (
    <section
      className={`relative w-full h-full flex justify-between items-center p-6 smartphone:p-2 overflow-hidden ${
        isFade && 'pointer-events-none grayscale opacity-10'
      } transition-all duration-300`}
    >
      {/* FADE OVERLAY */}
      <AnimatePresence>
        {isFade && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-[500] fixed inset-0 bg-black/20 dark:bg-white/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* MAIN CONTENT CONTAINER */}
      <div className="flex smartphone:flex-col smartphone:justify-center items-center gap-4 w-full h-full">
        {/* LEFT SIDE: TEXT & ARROW */}
        <div
          id="StackText"
          className="z-10 relative flex flex-col justify-center smartphone:items-center smartphone:w-full min-w-[30%] smartphone:text-center"
        >
          {/* Modernized Typography */}
          <div className="flex flex-col">
            <h1 className="font-black text-neutral-800 dark:text-white smartphone:text-4xl text-6xl leading-[0.85] tracking-tighter Pally">
              Tech <br /> Stack
            </h1>

            <div className="space-y-1 mt-4">
              <p className="font-medium text-neutral-500 dark:text-neutral-400 smartphone:text-sm text-lg">
                I{' '}
                <span className="font-bold text-purple-600 dark:text-purple-400 italic">
                  *casually*
                </span>{' '}
                dabble in
              </p>
              <p className="text-neutral-400 text-xs uppercase tracking-widest">(or so I say)</p>
            </div>
          </div>

          {/* Arrow: Positioned to point from Text -> The Featured Card in DivOrigami */}
          <div className="smartphone:hidden top-1/2 -right-8 absolute opacity-80 -translate-y-1/2">
            <Arrow className="w-24 h-24 text-neutral-400 dark:text-white/20 rotate-[15deg]" />
          </div>
        </div>

        {/* RIGHT SIDE: THE GRID COMPONENT */}
        <div className="flex flex-1 items-center pl-4 smartphone:pl-0 smartphone:w-full h-full">
          <DivOrigami isFade={isFade} setCursorColor={setCursorColor} />
        </div>
      </div>
    </section>
  );
}

SkillStack.propTypes = {
  isFade: PropTypes.bool.isRequired,
  setCursorColor: PropTypes.func,
};
