import { DownloadSimple, Eye } from "@phosphor-icons/react";
import { AnimatePresence, m } from "framer-motion";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

export default function Resume({ isFade, setCursorColor }) {
    const resumeRef = useRef(null);
    const [iconSize, setIconSize] = useState(40);

    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-blue-500 to-purple-600 shadow-purple-600", size: "w-2 h-2" });
    };

    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    };

    useEffect(() => {
        if (resumeRef.current) {
            const height = resumeRef.current.offsetHeight;
            setIconSize(height > 137 ? 50 : 40);
        }
    }, [resumeRef.current]);

    return (
        <section ref={resumeRef} className={`relative p-4 w-full h-full flex gap-2 justify-between ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}>
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="z-[500] fixed dark:bg-white/10 bg-black/20 top-0 left-0 h-full w-full"
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-col justify-center w-1/2 h-full">
                <h5 className="text-xs font-light">2024</h5>
                <h1 className="text-4xl font-semibold Pally">Resume</h1>
            </div>

            <div className={`w-1/2 h-full flex ${iconSize <= 40 ? "flex-row" : "flex-col"} gap-4 justify-center items-center`}>
                <a
                    href="/resume.pdf"
                    download="resume.pdf"
                    className="w-full h-1/2 p-1 flex justify-center items-center text-xs font-light"
                    onMouseEnter={!isFade ? handleEnter : undefined}
                    onMouseLeave={!isFade ? handleExit : undefined}
                >
                    <DownloadSimple size={iconSize} weight="light" />
                </a>
                <button
                    className="w-full h-1/2 p-1 flex justify-center items-center text-xs font-light"
                    onMouseEnter={!isFade ? handleEnter : undefined}
                    onMouseLeave={!isFade ? handleExit : undefined}
                >
                    <Eye size={iconSize} weight="light" />
                </button>
            </div>
        </section>
    );
}

Resume.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};
