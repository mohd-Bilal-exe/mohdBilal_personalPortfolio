import { LinkedinLogo, GithubLogo, InstagramLogo, Envelope } from "@phosphor-icons/react";
import PropTypes from 'prop-types';
import { AnimatePresence, m } from "framer-motion";
export const LinkedIn = ({ isFade, setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-lnkin to-cyan-300 shadow-cyan-300", size: "w-4 h-4" });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    };

    return (
        <div
            onMouseEnter={!isFade ? handleEnter : undefined}
            onMouseLeave={!isFade ? handleExit : undefined}
            className={`w-full h-full  p-2 group  grid place-content-center relative ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300 overflow-hidden`}
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
                href="https://www.linkedin.com/in/mohd--bilal--"
                target="_blank"
                rel="noreferrer"
                className="group place-content-center grid w-full h-full"
            >
                <LinkedinLogo size={"96%"}
                    className="mx-auto py-8 smartphone:w-[75%] group-hover:text-lnkin group-hover:scale-95 transition-all duration-300"
                    weight="thin" />
            </a>
        </div>
    );
};


// Define prop types
LinkedIn.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};

export const GitHub = ({ isFade, setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-gray-500 to-gray-200 shadow-gray-200", size: "w-4 h-4" });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    };

    return (
        <div
            onMouseEnter={!isFade ? handleEnter : undefined}
            onMouseLeave={!isFade ? handleExit : undefined}
            className={`w-full h-full p-2 grid place-content-center relative ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}
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
                href="https://github.com/mohd-bilal-exe"
                target="_blank"
                rel="noreferrer"
                className="group place-content-center grid w-full h-full"
            >
                <GithubLogo
                    size={"96%"}
                    weight="thin"
                    className="mx-auto py-8 group-hover:text-gray-500 group-hover:scale-95 transition-all duration-300"
                />
            </a>
        </div>
    );
};

GitHub.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};
export const Instagram = ({ isFade, setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-insta to-red-700 shadow-red-700", size: "w-4 h-4" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    }

    return (
        <div
            onMouseEnter={!isFade ? handleEnter : undefined}
            onMouseLeave={!isFade ? handleExit : undefined}
            className={`w-full h-full p-2 grid place-content-center relative ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}
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
                href="https://www.instagram.com/mohd.bilal__/"
                target="_blank"
                rel="noreferrer"
                className={`group w-full h-full grid place-content-center ${isFade ? "pointer-events-none grayscale" : ""}`}
            >
                <InstagramLogo
                    size={"96%"}
                    weight="thin"
                    className="mx-auto py-8 group-hover:text-insta group-hover:scale-95 transition-all duration-300"
                />
            </a>
        </div>
    );
};

Instagram.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};
GitHub.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};
export const Email = ({ isFade, setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-yellow-600", size: "w-4 h-4" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white shadow-white", size: "w-2 h-2" });
    }

    return (
        <div
            onMouseEnter={!isFade ? handleEnter : undefined}
            onMouseLeave={!isFade ? handleExit : undefined}
            className={`w-full h-full p-2 relative ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`} // Disable interactions when isFade
        >
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="top-0 left-0 z-[500] fixed bg-black/30 dark:bg-white/10 w-full h-full" // Blur and semi-transparent overlay
                    />
                )}
            </AnimatePresence>

            <div className={`group w-full h-full flex items-center justify-center ${isFade ? "grayscale" : ""}`}>
                <div className="block relative w-2/3 overflow-hidden whitespace-nowrap">
                    <a href="mailto:mohammadbilal.mail@gmail.com" target="_blank" className={`${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}>
                        <div className="flex justify-start ml-2 w-full h-10 overflow-hidden font-thin text-4xl Pally">
                            <div className="flex flex-col w-fit transition-transform group-hover:-translate-y-10 duration-300 ease-out">
                                <h1>E-Mail</h1>
                                <h1
                                    className="bg-clip-text bg-gradient-to-br from-yellow-900 dark:from-yellow-500 to-yellow-700 dark:to-yellow-300 font-normal text-transparent text-xs tracking-wide">
                                    Have a cool project on mind? <br />Drop a hello
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="place-content-center grid py-2 2xl:py-0 w-1/3 h-full group-hover:dark:text-yellow-500 group-hover:text-yellow-900 group-hover:scale-95 transition-all duration-300">
                    <Envelope size={"100%"} weight="thin" />
                </div>
            </div>
        </div>
    );
};

Email.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};