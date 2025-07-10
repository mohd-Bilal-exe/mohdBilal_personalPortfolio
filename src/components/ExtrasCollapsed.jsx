import { FlyingSaucer } from "@phosphor-icons/react";
import { AnimatePresence, m } from "framer-motion";
import PropTypes from 'prop-types';

export default function ExtrasCollapsed({ isFade, setWhatsClicked, handleClick, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-red-900 to-red-600 shadow-red-600", size: "w-4 h-4" });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    };

    return (
        <div
            onMouseEnter={!isFade ? handleEnter : undefined}
            onMouseLeave={!isFade ? handleExit : undefined}
            className={`w-full h-full flex items-center p-2 relative ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}
        >
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="top-0 left-0 z-[500] fixed bg-black/30 dark:bg-white/10 w-full h-full"
                    />
                )}
            </AnimatePresence>

            <a
                href="#Extra_stuff_I_love_to_do"
                className="group z-10 flex items-center w-full h-full cursor-pointer"
                onClick={() => {
                    setWhatsClicked("Extras");
                    handleClick();
                }}
            >
                <div className="flex justify-start ml-4 w-1/2 h-10 overflow-hidden font-thin smartphone:text-3xl text-4xl Pally">
                    <div className="flex flex-col w-fit transition-transform group-hover:-translate-y-10 duration-300 ease-out">
                        <h1>Extras</h1>
                        <h1 className="bg-clip-text bg-gradient-to-br from-red-500 to-red-300 font-normal text-transparent text-sm tracking-wide">
                            Take you there? <br />  Just click!
                        </h1>
                    </div>
                </div>

                <FlyingSaucer
                    size="96%"
                    weight="thin"
                    className="mx-auto py-2 2xl:py-0 w-1/4 h-full group-hover:text-red-900 group-hover:scale-95 transition-all duration-300"
                />
            </a>
        </div>
    );
}

ExtrasCollapsed.propTypes = {
    setWhatsClicked: PropTypes.func.isRequired,
    setCursorColor: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};
