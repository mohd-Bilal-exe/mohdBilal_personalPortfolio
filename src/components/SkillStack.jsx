import { DivOrigami } from "./DivOrigami";
import { AnimatePresence, m } from "framer-motion"
import { Arrow } from "./Svgs";
import PropTypes from 'prop-types';
export default function SkillStack({ isFade, setCursorColor }) {
    return (
        <section className={`w-full h-full flex justify-between items-center ${isFade && "pointer-events-none grayscale opacity-10"} transition-all duration-300`}>
            <AnimatePresence>
                {isFade && <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="top-0 left-0 z-[500] fixed bg-black/20 dark:bg-white/10 backdrop:grayscale w-full h-full"></m.div>}
            </AnimatePresence>
            <div id="Stack" className="flex justify-center items-center w-1/3 h-full">
                <h1 className="ml-4 font-bold smartphone:text-3xl text-5xl leading-tight">
                    <span className="block Pally">Tech stack </span>
                    <span className="block mt-1 ml-3 smartphone:ml-0 smartphone:text-xs text-lg">
                        I <span className="text-purple-900 dark:text-purple-500">*casually* </span>dabble in&nbsp;
                        <span className="font-medium text-lg sm:text-xl md:text-2xl"></span>
                    </span>
                    <span className="block ml-3 smartphone:ml-0 text-xs tracking-tight">
                        (or so I say)
                    </span>
                </h1>

                <Arrow className="smartphone:hidden top-12 z-0 absolute w-20 h-20 rotate-[18deg] -translate-y-12 translate-x-[8.5rem]" />
            </div>
            <DivOrigami isFade={isFade}  setCursorColor={setCursorColor}/>
        </section>
    );
}
SkillStack.propTypes = {
    isFade: PropTypes.bool.isRequired
};
