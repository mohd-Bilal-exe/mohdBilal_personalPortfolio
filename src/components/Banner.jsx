import { m } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { StarFour } from '@phosphor-icons/react'; // Assuming you use Phosphor

export default function Banner() {
  return (
    <div className="relative flex items-center border-white/5 border-b h-full overflow-hidden select-none">
      {/* Improved Gradient Masks with Blur */}
      <div className="left-0 z-20 absolute bg-gradient-to-r dark:from-neutral-900 dark:via-neutral-900/70 to-transparent dark:backdrop-blur-[1px] w-20 h-full"></div>
      <div className="right-0 z-20 absolute bg-gradient-to-l dark:from-neutral-900 dark:via-neutral-900/70 to-transparent dark:backdrop-blur-[1px] w-20 h-full"></div>
      <MarqueeItem />
    </div>
  );
}

const MarqueeItem = () => {
  const texts = [
    { text: 'Mohd Bilal', type: 'highlight' },
    { text: 'Full Stack Developer', type: 'solid' },
    { text: 'Mobile Developer', type: 'outline' }, // Outline style for contrast
    { text: 'Frontend Expert', type: 'solid' },
    { text: 'React Native', type: 'outline' },
  ];

  return (
    <div className="group flex items-center gap-2 py-3">
      {/* We render the loop twice to create the infinite effect */}
      <LoopingText items={texts} />
      <LoopingText items={texts} />
      <LoopingText items={texts} /> {/* Added 3rd for ultra-wide screens safety */}
    </div>
  );
};

const LoopingText = ({ items }) => {
  return (
    <m.div
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{
        duration: 20, // Slower is classier
        repeat: Infinity,
        ease: 'linear',
      }}
      className="flex flex-shrink-0 items-center gap-2 group-hover:[animation-play-state:paused]" // CSS Pause on hover
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {/* The Text Logic */}
          <span
            className={twMerge(
              'font-bold text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300',
              // CASE 1: The Name (Gradient)
              item.type === 'highlight' &&
                'bg-clip-text text-transparent bg-gradient-to-r mx-5 from-purple-400 to-pink-400',
              // CASE 2: Solid Text (Standard)
              item.type === 'solid' &&
                'text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white',
              // CASE 3: Outline Text (Modern Touch)
              item.type === 'outline' && 'text-transparent stroke-text hover:text-neutral-500'
            )}
            // Inline style for the 'outline' effect specifically
            style={item.type === 'outline' ? { WebkitTextStroke: '1px #525252' } : {}}
          >
            {item.text}
          </span>

          {/* The Separator Icon */}
          <StarFour weight="fill" className="w-3 h-3 text-purple-500/50 animate-spin-slow" />
        </div>
      ))}
    </m.div>
  );
};
