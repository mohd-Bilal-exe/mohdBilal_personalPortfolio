import PropTypes from 'prop-types';
import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence, m } from "framer-motion";

export default function About({ isFade, handleClick, setWhatsClicked, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-red-500 to-red-400 shadow-red-400", size: "w-2 h-2" });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    };

    return (
        <div className={`flex flex-col justify-between smartphone:pb-1  relative  w-full h-full ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}>
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="top-0 left-0 z-[500] fixed bg-black/20 dark:bg-white/10 w-full h-full"
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-col mx-auto p-4 max-w-md h-[90%]">
                <div id="headingnpfp" className="flex justify-between items-center px-2 h-32">
                    <h2 className="mb-3 font-semibold text-gray-800 dark:text-white/50 smartphone:text-3xl text-5xl Pally">Mohd Bilal</h2>
                    <div className="flex justify-center items-center bg-gradient-to-r from-black/10 dark:from-white/10 to-black/20 dark:to-white/20 border dark:border-white/20 rounded-xl size-[110px] smartphone:size-[80px] overflow-hidden">
                        <img
                            src="/2821.webp"
                            className="drop-shadow-2xl h-[85%] group-hover:scale-105 transition-all duration-300 ease-in-out"
                            alt="profile-pic"
                        />
                    </div>
                </div>
                <p className="mb-4 ml-3 w-[90%] text-gray-600 dark:text-white smartphone:text-xs text-base text-pretty">
                    Full Stack Wizard from Lucknow, India ⚡|  Frontend Fanatic & Web Dev Junkie Who Builds Sites for Fun (and occasionally just to impress my cat)
                </p>
            </div>

            <button
                onClick={() => {
                    setWhatsClicked("About");
                    handleClick();
                }}
                onMouseEnter={!isFade ? handleEnter : undefined}
                onMouseLeave={!isFade ? handleExit : undefined}
                className="group flex justify-between items-center place-self-end gap-1 dark:bg-white/5 pr-1 pl-2 w-fit h-[8%] smartphone:h-8 overflow-hidden"
            >
                <a href="#Let's_get_personal" className="flex flex-col gap-1 pt-1 w-fit h-full text-xs tracking-wider transition-transform group-hover:-translate-y-5 duration-200 ease-out">
                    <h1>Unveil More</h1>
                    <h1>Know me better</h1>
                </a>
                <ArrowUpRight size={18} className="transition-all group-hover:translate-x-[1px] group-hover:translate-y-[-1px] duration-300 ease-in-out" />
            </button>
        </div>
    );
}

About.propTypes = {
    handleClick: PropTypes.func.isRequired,
    setWhatsClicked: PropTypes.func.isRequired,
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired
};
