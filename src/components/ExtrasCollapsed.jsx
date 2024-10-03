import { FlyingSaucer } from "@phosphor-icons/react";
import { AnimatePresence, m } from "framer-motion";
import PropTypes from 'prop-types';

export default function ExtrasCollapsed({ isFade, setWhatsClicked, handleClick, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-red-900 to-red-600 ", size: "w-4 h-4" });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    };

    return (
        <div
            onMouseEnter={!isFade && handleEnter}
            onMouseLeave={!isFade && handleExit}
            className={`w-full h-full flex items-center p-2 relative ${isFade && "pointer-events-none grayscale opacity-10"}`}
        >
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-[500] fixed top-0 left-0 h-full w-full bg-black/30 dark:bg-white/10"
                    />
                )}
            </AnimatePresence>

            <div
                className="z-10 group w-full h-full flex items-center cursor-pointer"
                onClick={() => {
                    setWhatsClicked("Extras");
                    handleClick();
                }}
            >
                <div className="w-1/2 text-4xl flex justify-start ml-4 font-thin Pally h-10 overflow-hidden">
                    <div className="w-fit flex flex-col group-hover:-translate-y-10 transition-transform ease-out duration-200">
                        <h1>Extras</h1>
                        <h1 className="text-sm font-normal tracking-wide bg-gradient-to-br from-red-500 to-red-300 text-transparent bg-clip-text">
                            Take you there? Just click!
                        </h1>
                    </div>
                </div>

                <FlyingSaucer
                    size={"96%"}
                    weight="thin"
                    className="group-hover:text-red-900 group-hover:scale-95 transition-all duration-700"
                />
            </div>
        </div>
    );
}

ExtrasCollapsed.propTypes = {
    setWhatsClicked: PropTypes.func.isRequired,
    setCursorColor: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    isFade: PropTypes.bool.isRequired,
};
