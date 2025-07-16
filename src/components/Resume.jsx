import { AnimatePresence, m } from "framer-motion";
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import useStore from "../stores/useStores";
import { DownloadSimple, Eye } from "@phosphor-icons/react";
import DownloadNormal from "../icons/DownloadNormal";
import DownloadAnimated from "../icons/DownloadAnimated";

export default function Resume({ isFade, setCursorColor }) {

    const { setResumeModalOpen } = useStore();
    const resumeRef = useRef(null);
    const [iconSize, setIconSize] = useState(40);
    const [isHoveredDownload, setIsHoveredDownload] = useState(false);
    const [isHoveredEye, setIsHoveredEye] = useState(false);

    const handleEnter = (type, isFade) => {
        if (isFade) return; // Prevent cursor change when isFade is true
        setCursorColor({ color: "bg-purple-600 shadow-purple-600", size: "w-4 h-4" });
        if (type === "download") {
            setIsHoveredDownload(true);
        } else if (type === "eye") {
            setIsHoveredEye(true);
        }
    };

    const handleExit = (type, isFade) => {
        if (isFade) return; // Prevent cursor change when isFade is true
        setCursorColor({ color: "bg-white shadow-white", size: "w-4 h-4" });
        if (type === "download") {
            setIsHoveredDownload(false);
        } else if (type === "eye") {
            setIsHoveredEye(false);
        }
    };
    useEffect(() => {
        if (resumeRef.current) {
            const height = resumeRef.current.offsetHeight;
            setIconSize(height > 137 ? 45 : 32);
        }
    });
    return (<>
        <section ref={resumeRef} className={`relat ive p-4 w-full h-full flex gap-2 justify-between ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}>
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

            <div className="flex flex-col justify-center w-1/2 h-full">
                <h5 className="font-light text-xs">2024</h5>
                <h1 className="font-semibold text-4xl Pally">Resume</h1>
            </div>

            <div className={`w-1/2 h-full flex ${iconSize <= 40 ? "flex-row" : "flex-col"} gap-4 justify-center items-center`}>
                <a
                    href="/MohdBilalresume.pdf"
                    download="MohdBilalresume"
                    className="flex justify-center items-center p-1 w-full h-1/2 font-light text-xs hover:scale-[0.90] active:scale-75 transition-all duration-300"
                    onMouseEnter={() => handleEnter("download", isFade)}
                    onMouseLeave={() => handleExit("download", isFade)}
                >
                    {isHoveredDownload ? <DownloadAnimated size={iconSize} styles={"dark:text-purple-300 text-purple-700 transition-all "}  /> : <DownloadNormal size={iconSize} styles=""  />
}
                </a>
                <button
                    className="flex justify-center items-center p-1 w-full h-1/2 font-light text-xs hover:scale-[0.90] active:scale-75 transition-all duration-300"
                    onMouseEnter={() => handleEnter("eye", isFade)}
                    onMouseLeave={() => handleExit("eye", isFade)}
                    onClick={() => setResumeModalOpen(true)}
                ><Eye size={iconSize} weight="light" className={`${isHoveredEye ? "dark:text-purple-300 text-purple-700" : ""}`} />
                </button>
            </div>
        </section>

    </>
    );
}

Resume.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired,
};
