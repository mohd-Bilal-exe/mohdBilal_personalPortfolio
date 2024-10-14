import { AnimatePresence, m } from "framer-motion";
import useStore from "../stores/useStores";

export const SpringModal = () => {

    const { resumeModalOpen, setResumeModalOpen } = useStore();
    return (
        <AnimatePresence>
            {resumeModalOpen && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setResumeModalOpen(false)}
                    className="fixed top-0 left-0 w-screen h-screen bg-slate-900/20 backdrop-blur backdrop-grayscale p-1 z-[5000] flex justify-center smartphone:items-center  overflow-y-scroll cursor-pointer "
                >
                    <m.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-black/90 to-darkGray/80 text-white p-5 w-[85%] smartphone:h-[430px]   max-w-5xl shadow-xl cursor-default relative overflow-y-auto rounded"
                    >
                        <div className="w-full h-[1200px] smartphone:h-[320px]  rounded-sm  bg-contain"
                            style={{
                                backgroundImage: "url(/resumePicture.jpg)"
                            }}
                        >

                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={() => setResumeModalOpen(false)}
                                className=" bg-white text-indigo-600 px-4 py-2 rounded-sm font-semibold shadow-md hover:bg-gray-100 transition"
                            >
                                Go Back
                            </button>
                            <a href="/MohdBilalresume.pdf" download className=" bg-white text-indigo-600 px-4 py-2 rounded-sm font-semibold shadow-md hover:bg-gray-100 transition">
                                Download
                            </a>
                        </div>

                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    );
};


