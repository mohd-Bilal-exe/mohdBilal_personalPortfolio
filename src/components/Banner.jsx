import { StarFour } from '@phosphor-icons/react';

const texts = [
  { text: 'Mohd Bilal', type: 'highlight' },
  { text: 'Full Stack Developer', type: 'solid' },
  { text: 'Mobile Developer', type: 'outline' },
  { text: 'Frontend Expert', type: 'solid' },
  { text: 'React Native', type: 'outline' },
];

const textClasses = {
  highlight:
    'font-bold text-sm uppercase tracking-widest whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r mx-5 from-purple-400 to-pink-400',
  solid:
    'font-bold text-sm uppercase tracking-widest whitespace-nowrap text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300',
  outline: 'font-bold text-sm uppercase tracking-widest whitespace-nowrap text-transparent',
};

export default function Banner() {
  return (
    <div className="relative flex items-center border border-neutral-200 border-white/5 dark:border-white/10 border-b h-full overflow-hidden select-none">
      <div className="left-0 z-20 absolute bg-gradient-to-r from-white dark:from-neutral-900 via-white/80 dark:via-neutral-900/80 to-transparent w-20 h-full" />
      <div className="right-0 z-20 absolute bg-gradient-to-l from-white dark:from-neutral-900 via-white/80 dark:via-neutral-900/80 to-transparent w-20 h-full" />

      <div className="group flex items-center gap-2 py-3">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-shrink-0 items-center gap-2">
              {texts.map((item, index) => (
                <div key={`${i}-${index}`} className="flex items-center gap-2">
                  <span
                    className={textClasses[item.type]}
                    style={
                      item.type === 'outline' ? { WebkitTextStroke: '1px #525252' } : undefined
                    }
                  >
                    {item.text}
                  </span>
                  <StarFour
                    weight="fill"
                    className="w-3 h-3 text-purple-500/50 animate-spin-slow"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
