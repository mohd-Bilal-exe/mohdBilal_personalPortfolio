import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { m } from "framer-motion"
export default function Location({ isFade, darkMode, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ 
            color: darkMode 
                ? "bg-gradient-to-br from-[#0F3035] to-green-600 shadow-green-400" 
                : "bg-gradient-to-br from-[#C8EFD9] to-[#EBE8DE] shadow-green-300", 
            size: "w-4 h-4" 
        });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    };
    return (
        <div className={`relative w-full h-full ${isFade && " pointer-events-none grayscale opacity-10"} `}>
            <AnimatePresence>
                {isFade && <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="top-0 left-0 z-[5] fixed bg-black/20 dark:bg-white/10 backdrop-blur-sm backdrop:grayscale w-full h-full"></m.div>}
            </AnimatePresence>
            <div className='group flex justify-center items-center w-full h-full overflow-hidden'>


                <div
                    className="bg-cover bg-center w-full h-full group-hover:scale-110 transition-all duration-500"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleExit}
                    style={{
                        backgroundImage: `url(${darkMode ? "/LocationDark.webp" : "/LocationLight.webp"})`
                    }}
                />
            </div>
        </div>
    );
}
Location.propTypes = {
    darkMode: PropTypes.bool,
    isFade: PropTypes.bool,
};