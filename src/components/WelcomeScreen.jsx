import { twMerge } from 'tailwind-merge';
import { m } from 'framer-motion';
export default function WelcomeScreen({ darkMode }) {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={twMerge(
        'top-0 left-0 z-[50] fixed flex justify-center items-center bg-white dark:bg-darkGray drop-shadow-md w-screen h-screen text-black dark:text-white text-7xl ubuntu',
        darkMode && 'bg-darkGray text-white'
      )}
    >
      <m.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi!
      </m.h1>
    </m.section>
  );
}
