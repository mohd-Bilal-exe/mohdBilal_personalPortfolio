import { m } from 'framer-motion';
import { DiceFive } from '@phosphor-icons/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
export default function NavandButtons({ handleLayoutUpdate }) {

    const [navSelected, setNavSelected] = useState("Everything")
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
                                <li key={item.id} className={`z-20 w-1/3 text-md flex justify-center items-center px-2 py-1`}>
                                    <div href="#" onClick={() => { handleLayoutUpdate(item.title); setNavSelected(item.title) }} className='w-full text-center group h-6 overflow-hidden'>
                                        <div className='group-hover:-translate-y-6 flex flex-col transition-transform duration-200 delay-100'>
                                            <span>{item.title}</span>
                                            <span className='flex items-center justify-center'>Rearrange<DiceFive size={25} weight="thin" /></span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={`w-full h-full absolute top-0 z-0 py-1 pr-2 grid grid-cols-3`}>
                    <m.span
                        layout
                        transition={{ duration: 0.5, type: "spring", ease: "easeInOut", delay: 0.1 }}
                        className={`h-full w-full rounded-sm bg-gradient-to-br dark:from-white/10 from-black/10 to-black/20 dark:to-white/20 ${navSelected === "Everything" && "col-start-1"} ${navSelected === "Technologies" && "col-start-2"} ${navSelected === "Everything else" && "col-start-3"}`}
                    />
                </div>
            </div>
        </section>
    );
}
NavandButtons.propTypes = {
    handleLayoutUpdate: PropTypes.func.isRequired,
};