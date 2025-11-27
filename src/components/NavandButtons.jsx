import { DiceFive } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import useStore from '../stores/useStores';

export default function NavandButtons({ handleLayoutUpdate }) {
  const { navSelected, setNavSelected } = useStore(); // Access zustand state

  const list = [
    {
      id: 1,
      title: 'Everything',
    },
    {
      id: 2,
      title: 'Technologies',
    },
    {
      id: 3,
      title: 'Everything else',
    },
  ];

  return (
    <section
      className={`border border-neutral-200 dark:border-white/10 w-full h-full flex flex-col items-center justify-center relative `}
    >
      <div id="navigation" className={`w-full h-full p-1 relative`}>
        {/* 1. SLIDING ACTIVE INDICATOR (Background Layer) */}
        <div className={`w-full h-full absolute top-0 z-0 p-1 flex`}>
          <span
            className={`
             h-full w-1/3 transition-transform ease-in-out duration-300 rounded-lg backdrop-blur-sm
           border border-white/20 dark:border-white/10 shadow-lg
     bg-white/5 dark:bg-black/20
  ${navSelected === 'Everything' && 'translate-x-0'} 
              ${navSelected === 'Technologies' && 'translate-x-full'} 
     ${navSelected === 'Everything else' && 'translate-x-[200%]'}
                        `}
          />
        </div>

        {/* 2. NAVIGATION BUTTONS (Foreground Layer) */}
        <ul className={`w-full h-full flex gap-[2px] z-20`}>
          {list.map(item => {
            const isSelected = navSelected === item.title;
            return (
              <li key={item.id} className={`z-20 w-1/3 flex justify-center items-center`}>
                <button
                  onClick={() => {
                    handleLayoutUpdate(item.title);
                    setNavSelected(item.title);
                  }}
                  className={`w-full h-full text-center group overflow-hidden relative transition-colors duration-300 ${
                    isSelected
                      ? 'text-gray-900 dark:text-white font-bold'
                      : 'text-neutral-600 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-300 font-medium'
                  } `}
                >
                  <div className="flex flex-col justify-start items-center gap-4 py-2 h-full">
                    {/* Top Text (Default/Selected) */}
                    <span className="text-gray-900 md:text-md dark:text-white/60 text-sm transition-transform lg:group-hover:-translate-y-8 duration-300 ease-out">
                      {item.title}
                    </span>

                    {/* Bottom Text (Hover/Rearrange) */}
                    <span className="flex justify-center items-center gap-1 text-purple-600 dark:text-purple-400 text-xs md:text-sm transition-transform lg:group-hover:-translate-y-9 duration-300 ease-out">
                      Rearrange
                      <DiceFive size={16} weight="regular" />
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

NavandButtons.propTypes = {
  handleLayoutUpdate: PropTypes.func.isRequired,
};
