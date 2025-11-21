import PropTypes from 'prop-types';
import { useEffect, useState, useMemo, useCallback } from 'react';
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

export const DivOrigami = ({ isFade, setCursorColor }) => (
  <div className="flex justify-center items-center w-full h-full">
    <TechDisplay items={techItems} isFade={isFade} setCursorColor={setCursorColor} />
  </div>
);

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
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, isFade, items.length]);

  const activeItem = useMemo(() => items[activeIndex], [items, activeIndex]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  const handleItemClick = useCallback(index => setActiveIndex(index), []);

  const handleItemMouseEnter = useCallback(
    (index, color) => {
      setActiveIndex(index);
      setCursorColor?.({ color, size: 'w-4 h-4' });
    },
    [setCursorColor]
  );

  const handleItemMouseLeave = useCallback(() => {
    setCursorColor?.({ color: 'bg-white shadow-white', size: 'w-2 h-2' });
  }, [setCursorColor]);

  return (
    <div
      className="flex smartphone:flex-col justify-between items-center gap-3 smartphone:gap-6 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="smartphone:hidden relative flex flex-col flex-shrink-0 justify-center items-center rounded-2xl w-40 smartphone:w-full h-40 smartphone:h-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 transition-colors duration-500 will-change-auto"
          style={{
            background: `radial-gradient(circle at center, ${activeItem.color}, transparent 70%)`,
          }}
        />

        <div
          key={activeItem.id}
          className="z-10 relative flex flex-col items-center gap-2 animate-fade-in"
        >
          <activeItem.icon
            className="drop-shadow-md text-5xl transition-colors duration-300 will-change-auto"
            style={{ color: activeItem.color }}
          />
          <div className="text-center">
            <h3 className="font-bold text-black dark:text-white text-lg leading-none tracking-tight">
              {activeItem.name}
            </h3>
            <span className="block mt-1 font-medium text-[10px] text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
              {activeItem.category}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 place-content-center gap-1 grid grid-cols-7 smartphone:grid-cols-5">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(index)}
              onMouseEnter={() => handleItemMouseEnter(index, item.color)}
              onMouseLeave={handleItemMouseLeave}
              className={`group relative flex justify-center items-center p-1 rounded-lg size-10 aspect-square transition-all duration-300 will-change-transform ${
                isActive
                  ? 'bg-black/10 dark:bg-white/10 ring-1 ring-black/20 dark:ring-white/20 scale-110 z-10'
                  : 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <item.icon
                className={`text-xl transition-all duration-300 will-change-auto ${
                  isActive
                    ? 'opacity-100'
                    : 'opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100'
                }`}
                style={{ color: isActive || isHovering ? item.color : 'currentColor' }}
              />
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};
