import { LinkedinLogo, GithubLogo, InstagramLogo, Envelope, Cat } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import { AnimatePresence, m } from 'framer-motion';

export const LinkedIn = ({ isFade, setCursorColor }) => {
  const handleEnter = () => {
    setCursorColor({
      color: 'bg-gradient-to-br from-lnkin to-cyan-300 shadow-cyan-300',
      size: 'w-4 h-4',
    });
  };
  const handleExit = () => {
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  return (
    <a
      href="https://www.linkedin.com/in/mohd--bilal--"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={!isFade ? handleEnter : undefined}
      onMouseLeave={!isFade ? handleExit : undefined}
      className={`
   w-full h-full p-2 grid place-content-center relative group overflow-hidden 
   transition-all duration-300 active:scale-95
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
      {/* Icon */}
      <LinkedinLogo
        size={'80%'}
        weight="regular"
        className="mx-auto text-neutral-400 group-hover:text-lnkin group-hover:scale-[0.85] transition-all duration-300 ease-out"
      />
      {/* Hover Label (Tooltip style) - MODIFIED for Tailwind-only hover transition */}
      <span className="bottom-2 absolute bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-sm px-2 py-1 rounded font-medium text-white/90 text-xs transition-all translate-y-2 group-hover:translate-y-0 duration-200 transform">
        LinkedIn
      </span>
    </a>
  );
};
LinkedIn.propTypes = {
  setCursorColor: PropTypes.func.isRequired,
  isFade: PropTypes.bool.isRequired,
};

// --- GitHub ---

export const GitHub = ({ isFade, setCursorColor }) => {
  const handleEnter = () => {
    setCursorColor({ color: 'bg-gray-500 shadow-gray-200', size: 'w-4 h-4' });
  };
  const handleExit = () => {
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  return (
    <a
      href="https://github.com/mohd-bilal-exe"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={!isFade ? handleEnter : undefined}
      onMouseLeave={!isFade ? handleExit : undefined}
      className={`w-full h-full p-2 grid place-content-center relative group overflow-hidden transition-all duration-300 active:scale-95 ${
        isFade && 'pointer-events-none grayscale opacity-10'
      }`}
    >
      {/* Fade Overlay omitted for brevity, similar to LinkedIn */} {/* Icon */}
      <GithubLogo
        size={'80%'}
        weight="regular"
        className="mx-auto text-neutral-400 group-hover:text-white group-hover:scale-[0.85] transition-all duration-300 ease-out"
      />
      {/* Hover Label - MODIFIED for Tailwind-only hover transition */}
      <span className="bottom-2 absolute bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-sm px-2 py-1 rounded font-medium text-white/90 text-xs transition-all translate-y-2 group-hover:translate-y-0 duration-200 transform">
        GitHub
      </span>
    </a>
  );
};
GitHub.propTypes = { setCursorColor: PropTypes.func.isRequired, isFade: PropTypes.bool.isRequired };

export const Instagram = ({ isFade, setCursorColor }) => {
  const handleEnter = () => {
    setCursorColor({
      color: 'bg-gradient-to-br from-insta to-red-700 shadow-red-700',
      size: 'w-4 h-4',
    });
  };
  const handleExit = () => {
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  return (
    <a
      href="https://www.instagram.com/mohd.bilal__/"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={!isFade ? handleEnter : undefined}
      onMouseLeave={!isFade ? handleExit : undefined}
      className={`w-full h-full p-2 grid place-content-center relative group overflow-hidden transition-all duration-300 active:scale-95 ${
        isFade && 'pointer-events-none grayscale opacity-10'
      }`}
    >
      {/* Fade Overlay omitted for brevity */} {/* Icon */}
      <InstagramLogo
        size={'80%'}
        weight="regular"
        className="mx-auto text-neutral-400 group-hover:text-insta group-hover:scale-[0.85] transition-all duration-300 ease-in-out"
      />
      {/* Hover Label - MODIFIED for Tailwind-only hover transition */}
      <span className="bottom-2 absolute bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-sm px-2 py-1 rounded font-medium text-white/90 text-xs transition-all translate-y-2 group-hover:translate-y-0 duration-200 transform">
        Instagram
      </span>
    </a>
  );
};
Instagram.propTypes = {
  setCursorColor: PropTypes.func.isRequired,
  isFade: PropTypes.bool.isRequired,
};

// --- Email ---

export const Email = ({ isFade, setCursorColor }) => {
  const handleEnter = () => {
    setCursorColor({
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-yellow-600',
      size: 'w-4 h-4',
    });
  };
  const handleExit = () => {
    setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  };

  const mailtoLink = `mailto:mohammadbilal.mail@gmail.com?subject=Loved your work—let’s chat!&body=Hey Bilal,%0D%0A%0D%0AJust checked out your portfolio and had to reach out. Super impressed(assumption). %0D%0A%0D%0AI had something in mind and would love to run it by you:%0D%0A%0D%0A[drop your message here]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ACheers,%0D%0A[Your Name]`;

  return (
    <a
      href={mailtoLink}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={!isFade ? handleEnter : undefined}
      onMouseLeave={!isFade ? handleExit : undefined}
      className={`
   w-full h-full p-4 relative flex justify-between items-center group active:scale-[0.98]
   transition-all duration-300
   ${isFade && 'pointer-events-none grayscale opacity-10'}
 `}
    >
      <AnimatePresence>{/* Fade Overlay omitted */}</AnimatePresence>
      {/* Left Side: Text and Hover CTA */}
      <div className="flex flex-col justify-center overflow-hidden">
        <h1 className="font-semibold text-white group-hover:text-yellow-400 text-xl md:text-2xl transition-colors duration-300">
          E-Mail
        </h1>
        {/* CTA - Slides up on hover (This logic is already correct for the flip) */}
        <div className="mt-1 h-4 overflow-hidden">
          <span className="block text-neutral-400 text-xs transition-transform md:group-hover:-translate-y-4 group-hover:-translate-y-full duration-300 ease-out">
            Have a cool project on mind?
          </span>
          <span className="block font-medium text-yellow-500 text-xs transition-transform translate-y-0 group-hover:-translate-y-4 duration-300 ease-out">
            Drop a 'hello'!
          </span>
        </div>
      </div>
      {/* Right Side: Icon */}
      <div className="flex-shrink-0 place-content-center grid w-1/4 md:w-1/5 h-full">
        <Envelope
          size={'80%'}
          weight="regular"
          className="text-neutral-400 group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
    </a>
  );
};

Email.propTypes = { setCursorColor: PropTypes.func.isRequired, isFade: PropTypes.bool.isRequired };
