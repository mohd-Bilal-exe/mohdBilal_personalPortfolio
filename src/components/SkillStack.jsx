import { DivOrigami } from "./DivOrigami";
import { AnimatePresence, m } from "framer-motion"
import { Arrow } from "./Svgs";
import PropTypes from 'prop-types';
export default function SkillStack({ isFade }) {
    return (
        <section className={`w-full h-full flex justify-between items-center ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}>
            <AnimatePresence>
                {isFade && <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="z-[500]  fixed dark:bg-white/10  bg-black/20 backdrop:grayscale top-0 left-0  h-full w-full"></m.div>}
            </AnimatePresence>
            <div id="Stack" className="w-1/2 h-full  flex items-center justify-center">
                <h1 className="ml-4 text-5xl  font-bold leading-tight">
                    <span className="block Pally ">Tech stack </span>
                    <span className="block text-lg  mt-1 ml-3">
                        I <span className="text-purple-900 dark:text-purple-500">*casually* </span>dabble in&nbsp;
                        <span className="text-lg sm:text-xl md:text-2xl font-medium"></span>
                    </span>
                    <span className="block  text-xs tracking-tight ml-3">
                        (or so I say)
                    </span>
                </h1>

                <Arrow className="w-20 h-20 z-0  absolute top-12  rotate-[18deg]  -translate-y-10 translate-x-40" />
            </div>
            <DivOrigami isFade={isFade} />
        </section>
    );
}
SkillStack.propTypes = {
    isFade: PropTypes.bool.isRequired
};
