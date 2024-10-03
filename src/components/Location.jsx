import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { m } from "framer-motion"
export default function Location({ isFade, darkMode }) {
    return (
        <div className={`relative w-full h-full ${isFade && " pointer-events-none grayscale opacity-10"} `}>
            <AnimatePresence>
                {isFade && <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="z-[5]  fixed dark:bg-white/10  bg-black/20 backdrop:grayscale backdrop-blur-sm  top-0 left-0  h-full w-full"></m.div>}
            </AnimatePresence>
            <div className='w-full h-full flex justify-center items-center group overflow-hidden'>


                <div
                    className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-all duration-500"
                    style={{
                        backgroundImage: `url(${darkMode ? "/LocationDark.png" : "/LocationLight.png"})`
                    }}
                />
            </div>
        </div>
    );
}
Location.propTypes = {
    darkMode: PropTypes.boolean,
    isFade: PropTypes.boolean,
};