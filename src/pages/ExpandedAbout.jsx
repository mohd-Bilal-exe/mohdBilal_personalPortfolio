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
            className={twMerge("top-0 left-0 z-[20] dark:bg-darkGray backdrop-blur w-fit h-full overflow-y-auto dark:text-w1 fixe d", bgText)}>
            <button
                onClick={handleClickAfter} className="group top-3 left-3 z-[500] absolute flex w-8 h-8 overflow-hidden dark:text-w1"
            >
                <div className="flex w-16 h-full transition-transform group-hover:-translate-x-8 duration-500 ease-in-out">
                    <ArrowLeft size={32} weight='thin' />
                    <ArrowLeft size={32} weight='regular' />
                </div>
            </button>
            <section

                className="flex justify-center bg-white dark:bg-darkGray w-screen h-full dark:text-w1"
            >
                <div className="mb-2 w-3/5 smartphone:w-11/12">
                    <div className="overflow-hidden">
                        <m.h1
                            key="1stWords"
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1, duration: 0.5, ease: "easeInOut", type: "spring" }}
                            className="flex items-end drop-shadow-text-lg mt-48 laptop:mt-36 smartphone:mt-24 ml-6 smartphone:text-3xl text-7xl tracking-widest coolfont">
                            Hello There <span className="ml-4 h-full text-red-500">!</span>
                        </m.h1>
                    </div>
                    <div className="overflow-hidden">
                        <m.h2
                            key="2ndWords"
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut", type: "spring" }}
                            className="mt-16 laptop:mt-14 smartphone:text-lg laptop:text-2xl text-3xl smartphone:text-center tracking-normal ubuntu"
                        >
                            Ahoy! <span className="mr-2 ml-2 text-red-600 tracking-widest coolfont">Mohd Bilal</span>, your friendly neighborhood web wizard from Lucknow, India! <br className="smartphone:hidden" />
                            <span className="ml-1 tracking-widestestcum">Crafting</span>,{" digital delights? You bet! Join me, and let's "}<br className="smartphone:hidden" />{" whip up some web wizardry together. Cheers!"}
                        </m.h2>
                    </div>
                    <m.div
                        initial={{ y: 200, opacity: 0.65 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.75, duration: 0.75, ease: "easeInOut", type: "tween" }}
                        className="grid smartphone:grid-flow-row grid-flow-col mt-12 w-full smartphone:text-center tracking-tight transform-gpu transition-transform duration-500 smartphone:duration-300 ease-out"
                    >
                        <p className="mt-6 smartphone:mt-1 laptop:text-lg smartphone:text-xl text-2xl leading-10 tracking-tighter ibm-plexregular">
                            Think of me as your go-getter enthusiast or your web wizard with a penchant for pixels! 🚀{" "}
                            I live and breathe coding, sprinkling every project with a touch of creativity and a splash of ethics. <span className="font-semibold text-red-600 tracking-wide">{" My mission?"}</span> To deliver jaw-dropping results that make you and your users go,
                            <span className="font-bold text-red-600 tracking-wide">{" 'Wow'"}</span>
                            {". So, if you’re looking for a web developer who’s totally hooked on creating digital magic, you've hit the jackpot—I'm your guy!"}
                        </p>
                        <div className="smartphone:flex smartphone:flex-col justify-center items-center gap-1 smartphone:mt-4">
                            <img
                                className="rounded-sm w-fit smartphone:w-[200px] h-fit overflow-hidden transition-all -translate-y-1 translate-x-6 laptop:-translate-y-14 laptop:translate-x-10 smartphone:translate-x-0 smartphone:translate-y-0 duration-700"
                                src="/billu.webp"
                                alt=""
                            />
                            <div className={" flex smartphone:flex-col  justify-center items-center smartphone:items-start mt-10"}>
                                <h1 className="w-fit smartphone:text-sm text-2xl coolfont">Yup! That&apos;s me</h1>
                                <ArrowBendDoubleUpLeft size={65} className="smartphone:hidden rotate-[65deg] -translate-y-10 translate-x-1" />
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
