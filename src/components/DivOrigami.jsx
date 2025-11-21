import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FaJs, FaJava, FaDocker } from 'react-icons/fa';
import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiVisualstudiocode,
  SiPostman,
  SiMysql,
} from 'react-icons/si';
import { LiaNode } from 'react-icons/lia';
import { MdDesignServices, MdPsychology, MdArchitecture, MdStorage } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export const DivOrigami = ({ isFade, setCursorColor }) => {
  const techItems = [
    { id: 1, icon: FaJs, name: 'JavaScript', color: '#F7DF1E', category: 'Language' },
    { id: 2, icon: SiTypescript, name: 'TypeScript', color: '#3178C6', category: 'Language' },
    { id: 3, icon: FaJava, name: 'Java', color: '#ED8B00', category: 'Language' },
    { id: 4, icon: SiHtml5, name: 'HTML5', color: '#E34F26', category: 'Frontend' },
    { id: 5, icon: SiCss3, name: 'CSS3', color: '#1572B6', category: 'Frontend' },
    { id: 6, icon: SiReact, name: 'React', color: '#61DAFB', category: 'Library' },
    { id: 7, icon: SiNextdotjs, name: 'Next.js', color: '#ffffff', category: 'Framework' },
    { id: 8, icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', category: 'Styling' },
    { id: 9, icon: LiaNode, name: 'Node.js', color: '#339933', category: 'Backend' },
    { id: 10, icon: SiExpress, name: 'Express', color: '#ffffff', category: 'Backend' },
    { id: 11, icon: SiMongodb, name: 'MongoDB', color: '#47A248', category: 'Database' },
    { id: 12, icon: SiMysql, name: 'MySQL', color: '#4479A1', category: 'Database' },
    { id: 13, icon: SiFirebase, name: 'Firebase', color: '#FFCA28', category: 'BaaS' },
    { id: 14, icon: SiGit, name: 'Git', color: '#F05032', category: 'Tool' },
    { id: 15, icon: SiVisualstudiocode, name: 'VS Code', color: '#007ACC', category: 'Tool' },
    { id: 16, icon: FaDocker, name: 'Docker', color: '#2496ED', category: 'DevOps' },
    { id: 17, icon: SiPostman, name: 'Postman', color: '#FF6C37', category: 'Tool' },
    { id: 18, icon: MdStorage, name: 'Data Structs', color: '#9333ea', category: 'Concept' },
    { id: 19, icon: MdArchitecture, name: 'Sys Design', color: '#0d9488', category: 'Concept' },
    { id: 20, icon: MdDesignServices, name: 'UI/UX', color: '#ec4899', category: 'Design' },
    { id: 21, icon: MdPsychology, name: 'AI/ML', color: '#4f46e5', category: 'Future' },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full">
      <TechDisplay items={techItems} isFade={isFade} setCursorColor={setCursorColor} />
    </div>
  );
};

DivOrigami.propTypes = {
  isFade: PropTypes.bool.isRequired,
  setCursorColor: PropTypes.func,
};

const TechDisplay = ({ items, isFade, setCursorColor }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering || isFade) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovering, isFade, items.length]);

  const activeItem = items[activeIndex];

  return (
    <div
      className="flex smartphone:flex-col justify-between items-center gap-8 smartphone:gap-6 w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 1. FEATURED CARD (Left) */}
      <div className="relative flex flex-col flex-shrink-0 justify-center items-center shadow-2xl rounded-2xl w-40 smartphone:w-full h-40 smartphone:h-32 overflow-hidden">
        {/* Subtle pulsing background matching the tech color */}
        <div
          className="absolute inset-0 opacity-20 transition-colors duration-500"
          style={{
            background: `radial-gradient(circle at center, ${activeItem.color}, transparent 70%)`,
          }}
        />

        <AnimatePresence mode="wait">
          <m.div
            key={activeItem.id}
            initial={{ y: 10, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="z-10 relative flex flex-col items-center gap-2"
          >
            <activeItem.icon
              className="drop-shadow-md text-5xl transition-colors duration-300"
              style={{ color: activeItem.color }}
            />

            <div className="text-center">
              <h3 className="font-bold text-white text-lg leading-none tracking-tight">
                {activeItem.name}
              </h3>
              <span className="block mt-1 font-medium text-[10px] text-neutral-400 uppercase tracking-widest">
                {activeItem.category}
              </span>
            </div>
          </m.div>
        </AnimatePresence>
      </div>

      {/* 2. THE GRID (Right) */}
      <div className="flex-1 place-content-center gap-2 grid grid-cols-7 smartphone:grid-cols-5">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => {
                setActiveIndex(index);
                if (setCursorColor) setCursorColor({ color: item.color, size: 'w-4 h-4' });
              }}
              onMouseLeave={() => {
                if (setCursorColor)
                  setCursorColor({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
              }}
              className={twMerge(
                'group relative flex justify-center items-center p-2 rounded-lg aspect-square transition-all duration-300',
                isActive
                  ? 'bg-white/10 ring-1 ring-white/20 scale-110 z-10'
                  : 'bg-transparent hover:bg-white/5'
              )}
            >
              <item.icon
                className={twMerge(
                  'text-xl transition-all duration-300',
                  isActive
                    ? 'opacity-100'
                    : 'opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100'
                )}
                style={{ color: isActive || isHovering ? item.color : 'currentColor' }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
