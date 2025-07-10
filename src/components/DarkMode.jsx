import { Moon, SunDim } from "@phosphor-icons/react";
import { m } from 'framer-motion'
import PropTypes from 'prop-types';
export default function DarkMode({ setDarkMode, darkMode, setCursorColor }) {
    const handleEnter = () => {
            setCursorColor({ color: "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-blue-600", size: "w-2 h-2" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    }
    return (
        <button className={`w-full h-full z-[100] flex`} >
            <button onClick={() => setDarkMode(false)} className="flex justify-center items-center w-1/2 h-full">
                <SunDim  onMouseEnter={ handleEnter}
                    onMouseLeave={handleExit} className="z-[101] text- hover:text-purple-600 dark:hover:text-sky-300 hover:scale-[0.90] active:scale-75 transition-all duration-300" size={"65%"} weight="thin" />
            </button>
            <button onClick={() => setDarkMode(true)} className="flex justify-center items-center w-1/2 h-full">
                <Moon onClick={() => setDarkMode(true)} onMouseEnter={ handleEnter}
                    onMouseLeave={handleExit} className="z-[101] text- hover:text-purple-600 dark:hover:text-sky-300 hover:scale-[0.90] active:scale-75 transition-all duration-300" size={"65%"} weight="thin" />
            </button>
            <div className={`absolute top-0 left-0 p-1 h-full w-full flex ${darkMode ? "justify-end" : "justify-start"}`}>
                <m.div layout transition={{ duration: 0.3, type: "spring", ease: "easeInOut" }} className="bg-gradient-to-br from-darkGray/20 dark:from-w1/10 to-darkGray/40 dark:to-w1/20 rounded-sm w-1/2 h-full" ></m.div>
            </div>
        </button>
    )
}
DarkMode.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    setDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
};