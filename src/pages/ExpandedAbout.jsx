import PropTypes from 'prop-types';
import { m } from "framer-motion";
import { ArrowBendDoubleUpLeft, ArrowLeft } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

export default function ExpandedAbout({ handleClickAfter, darkMode }) {
    const bgText = darkMode ? "dark" : "Some_other_thing_but_not_dark";
    return (
        <m.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ delay: 0.75, duration: 0.50, ease: "easeInOut" }}
            className={twMerge("fixed top-0 left-0 z-[20] backdrop-blur w-fit h-full overflow-y-auto dark:bg-darkGray dark:text-w1", bgText)}>
            <button
                onClick={handleClickAfter} className="absolute z-[500] dark:text-w1 top-3 left-3 group flex h-8 w-8 overflow-hidden"
            >
                <div className="flex h-full w-16 group-hover:-translate-x-8 transition-transform duration-500 ease-in-out ">
                    <ArrowLeft size={32} weight='thin' />
                    <ArrowLeft size={32} weight='regular' />
                </div>
            </button>
            <section

                className="h-full w-screen flex justify-center dark:bg-darkGray dark:text-w1 bg-white"
            >
                <div className="w-3/5 smartphone:w-11/12 mb-2">
                    <div className="overflow-hidden">
                        <m.h1
                            key="1stWords"
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1, duration: 0.5, ease: "easeInOut", type: "spring" }}
                            className="text-7xl smartphone:text-3xl coolfont ml-6 mt-48 laptop:mt-36 smartphone:mt-24 flex items-end tracking-widest drop-shadow-text-lg">
                            Hello There <span className="text-red-500 ml-4 h-full">!</span>
                        </m.h1>
                    </div>
                    <div className="overflow-hidden">
                        <m.h2
                            key="2ndWords"
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut", type: "spring" }}
                            className="mt-16 laptop:mt-14 text-3xl laptop:text-2xl smartphone:text-lg smartphone:text-center tracking-normal ubuntu"
                        >
                            Ahoy! <span className="coolfont mr-2 ml-2 text-red-600 tracking-widest">Mohd Bilal</span>, your friendly neighborhood web wizard from Lucknow, India! <br className="smartphone:hidden" />
                            <span className="tracking-widestestcum ml-1">Crafting</span>,{" digital delights? You bet! Join me, and let's "}<br className="smartphone:hidden" />{" whip up some web wizardry together. Cheers!"}
                        </m.h2>
                    </div>
                    <m.div
                        initial={{ y: 200, opacity: 0.65 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.75, duration: 0.75, ease: "easeInOut", type: "tween" }}
                        className="w-full mt-12 grid grid-flow-col smartphone:grid-flow-row smartphone:text-center tracking-tight transition-transform smartphone:duration-300 duration-500 ease-out transform-gpu"
                    >
                        <p className="text-2xl laptop:text-lg smartphone:text-xl tracking-tighter mt-6 smartphone:mt-1 ibm-plexregular leading-10">
                            Think of me as your go-getter enthusiast or your web wizard with a penchant for pixels! 🚀{" "}
                            I live and breathe coding, sprinkling every project with a touch of creativity and a splash of ethics. <span className="tracking-wide font-semibold text-red-600">{" My mission?"}</span> To deliver jaw-dropping results that make you and your users go,
                            <span className="tracking-wide text-red-600 font-bold">{" 'Wow'"}</span>
                            {". So, if you’re looking for a web developer who’s totally hooked on creating digital magic, you've hit the jackpot—I'm your guy!"}
                        </p>
                        <div className="smartphone:mt-4 smartphone:flex smartphone:flex-col  gap-1 justify-center items-center">
                            <img
                                className="h-fit w-fit smartphone:w-[200px] translate-x-6 -translate-y-1 laptop:translate-x-10 laptop:-translate-y-14 smartphone:translate-x-0 smartphone:translate-y-0 rounded-sm transition-all duration-700 overflow-hidden"
                                src="/billu.jpg"
                                alt=""
                            />
                            <div className={" flex smartphone:flex-col  justify-center items-center smartphone:items-start mt-10"}>
                                <h1 className="text-2xl w-fit  smartphone:text-sm  coolfont">Yup! That&apos;s me</h1>
                                <ArrowBendDoubleUpLeft size={65} className="rotate-[65deg] smartphone:hidden translate-x-1 -translate-y-10" />
                            </div>
                        </div>
                    </m.div>
                </div>
            </section>
        </m.div>
    );
};

ExpandedAbout.propTypes = {
    handleClickAfter: PropTypes.func,
    darkMode: PropTypes.bool,
};
