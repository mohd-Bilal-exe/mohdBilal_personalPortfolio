import { m } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href, className }) => {
  return (
    <m.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl ${className}`}
      style={{
        lineHeight: 0.9, // Keeps the letters tight vertically
      }}
    >
      {/* TOP LAYER (Starts visible, slides up) */}
      <div>
        {children.split('').map((l, i) => (
          <m.span
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {/* If letter is a space, render non-breaking space, else render letter */}
            {l === ' ' ? '\u00A0' : l}
          </m.span>
        ))}
      </div>

      {/* BOTTOM LAYER (Starts hidden below, slides up) */}
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <m.span
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === ' ' ? '\u00A0' : l}
          </m.span>
        ))}
      </div>
    </m.a>
  );
};
