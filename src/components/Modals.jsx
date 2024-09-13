import { AnimatePresence, motion } from "framer-motion";

export const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur backdrop-grayscale p-8 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 w-full max-w-lg shadow-xl cursor-default relative overflow-hidden rounded-lg"
                    >
                        <h2 className="text-2xl font-bold mb-4">Links</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-6 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
