import PropTypes from 'prop-types';
import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence, m } from "framer-motion";

export default function About({ isFade, handleClick, setWhatsClicked, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-red-500 to-red-400 ", size: "w-2 h-2" });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    };

    return (
        <div className={`flex flex-col relative  w-full h-full ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}>
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="z-[500] fixed top-0 left-0 h-full w-full dark:bg-white/10 bg-black/20 "
                    />
                )}
            </AnimatePresence>

            <div className="z-[0] h-[92%] p-4 flex flex-col max-w-md mx-auto">
                <div id="headingnpfp" className="flex justify-between items-center px-2 h-32">
                    <h2 className="text-5xl font-semibold text-gray-800 dark:text-white/50 mb-3 Pally">Mohd Bilal</h2>
                    <div className="size-[110px] overflow-hidden rounded-lg flex items-center justify-center border dark:border-white/20 bg-gradient-to-r dark:from-white/10 from-black/10 to-black/20 dark:to-white/20">
                        <img
                            src="/2821.png"
                            className="h-[85%] drop-shadow-2xl transition-all duration-300 ease-in-out group-hover:scale-105"
                            alt="profile-pic"
                        />
                    </div>
                </div>
                <p className="w-[86%] text-base text-gray-600 dark:text-white mb-4 ml-3 text-pretty">
                    Full stack developer from Lucknow, India. <br /> A frontend expert with love for crafting modern UIs with React, Tailwind CSS, and Framer-motion.
                </p>
            </div>

            <button
                onClick={() => {
                    setWhatsClicked("About");
                    handleClick();
                }}
                onMouseEnter={!isFade ? handleEnter : undefined}
                onMouseLeave={!isFade ? handleExit : undefined}
                className="group h-6 w-fit place-self-end flex gap-1 justify-between items-center dark:bg-white/5 pl-2 pr-1 overflow-hidden"
            >
                <div className="h-full w-fit flex flex-col gap-1 pt-1 text-xs tracking-wider group-hover:-translate-y-5 transition-transform ease-out duration-200">
                    <h1>Unveil More</h1>
                    <h1>Know me better</h1>
                </div>
                <ArrowUpRight size={18} className="group-hover:translate-y-[-1px] group-hover:translate-x-[1px] transition-all duration-300 ease-in-out" />
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
