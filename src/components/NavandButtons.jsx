import { DiceFive } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import useStore from '../stores/useStores';
export default function NavandButtons({ handleLayoutUpdate }) {

    const { navSelected, setNavSelected } = useStore();  // Access zustand state

    const list = [
        {
            id: 1,
            title: "Everything"
        },
        {
            id: 2,
            title: "Technologies"
        },
        {
            id: 3,
            title: "Everything else"
        },
    ];

    return (
        <section className={`w-full h-full flex flex-col items-center justify-center absolute right-0 top-0 text-bg1`}>
            <div id="navigation" className={`w-full h-full p-1 relative`}>
                <ul className={`w-full h-full flex gap-[2px] z-20`}>
                    {
                        list.map((item) => {
                            return (
                                <li key={item.id} className={`z-20 w-1/3 text-md smartphone:text-sm  flex justify-center items-center px-2 py-1`}>
                                    <div href="#" onClick={() => { handleLayoutUpdate(item.title); setNavSelected(item.title); }} className='w-full text-center group h-6 overflow-hidden'>
                                        <div className='lg:group-hover:-translate-y-6 flex flex-col transition-transform duration-300 delay-100'>
                                            <span className='smartphone:mb-[2px]'>{item.title}</span>
                                            <span className='flex items-center justify-center'>Rearrange<DiceFive size={25} weight="thin" /></span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={`w-full h-full absolute top-0 z-0 py-1 pr-2 flex`}>
                    <span
                        className={`h-full w-1/3 transition-transform ease-in-out duration-300 rounded-sm bg-gradient-to-br dark:from-white/20 from-black/20 to-black/30 dark:to-white/30 
                        ${navSelected === "Everything" && "translate-x-0"} 
                        ${navSelected === "Technologies" && "translate-x-full"} 
                        ${navSelected === "Everything else" && "translate-x-[200%]"}`}
                    />
                </div>
            </div>
        </section>
    );
}


NavandButtons.propTypes = {
    handleLayoutUpdate: PropTypes.func.isRequired,
    whatsClicked: PropTypes.string,
};
