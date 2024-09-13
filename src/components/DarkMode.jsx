import { Moon, SunDim } from "@phosphor-icons/react";
import { m } from 'framer-motion'
export default function DarkMode({ setDarkMode, darkMode, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-cyan-500 to-blue-600", size: "" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    }
    return (
        <button className={`w-full h-full z-[100] flex`} >
            <div className="w-1/2 h-full flex justify-center items-center">
                <SunDim onClick={() => setDarkMode(!darkMode)} onMouseEnter={handleEnter}
                    onMouseLeave={handleExit} className="z-[101]" size={"65%"} weight="thin" />
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <Moon onClick={() => setDarkMode(!darkMode)} onMouseEnter={handleEnter}
                    onMouseLeave={handleExit} className="z-[101]" size={"65%"} weight="thin" />
            </div>
            <div className={`absolute top-0 left-0 p-1 h-full w-full flex ${darkMode ? "justify-end" : "justify-start"}`}>
                <m.div layout transition={{ duration: 0.5, type: "spring", ease: "easeInOut" }} className="w-1/2 h-full rounded-sm bg-gradient-to-br dark:from-w1/10 from-darkGray/20 to-darkGray/40 dark:to-w1/20" ></m.div>
            </div>
        </button>
    )
}