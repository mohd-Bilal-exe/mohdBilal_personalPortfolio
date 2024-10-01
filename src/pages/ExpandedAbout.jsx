import PropTypes from 'prop-types';
import { m } from "framer-motion";
import { ArrowBendDoubleUpLeft } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

export default function ExpandedAbout({ handleClickAfter, darkMode }) {
    const bgText = darkMode ? "bg-darkGray text-w1" : "bg-white text-darkGray"
    return (
        <div className={twMerge("fixed top-0 left-0 z-[20] backdrop-blur w-fit h-full overflow-y-auto", bgText)}>
            <m.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.50, ease: "easeInOut" }}
                className="h-full w-screen flex justify-center bg-bg2 "
            >
                <div className="w-3/5 smartphone:w-11/12 mb-2">
                    <div className="overflow-hidden">
                        <m.h1 initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            onClick={handleClickAfter}
                            transition={{ delay: 1, duration: 0.5, ease: "easeInOut", type: "spring" }} className="text-7xl smartphone:text-4xl coolfont ml-6 mt-48 laptop:mt-36 smartphone:mt-16  flex items-end tracking-widest drop-shadow-text-lg">
                            Hello There <span className="text-red-500  ml-4 h-full">!</span>
                        </m.h1></div><div className="overflow-hidden">
                        <m.h2
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut", type: "spring" }}
                            className=" mt-16 laptop:mt-14 text-3xl laptop:text-2xl smartphone:text-lg smartphone:text-center tracking-normal  ubuntu"
                        >
                            Ahoy! <span className="coolfont mr-2 ml-2 text-accent1 tracking-widest">Mohd Bilal</span>, your web wizard from Lucknow, India. <br className="smartphone:hidden" />
                            <span className=" tracking-widestestcum ml-1">Crafting</span>,{" digital marvels? You bet! Join me, and"} <br className="smartphone:hidden" /> {"let's "}
                            <span className=" tracking-widestestcum ml-1 ">weave wonders</span> together. Cheers!
                        </m.h2></div>
                    <m.div
                        initial={{ y: 200, opacity: 0.65 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.75, duration: 0.75, ease: "easeInOut", type: "tween" }}
                        className="w-full mt-12 grid grid-flow-col smartphone:grid-flow-row smartphone:text-center tracking-tight transition-transform smartphone:duration-300 duration-500 ease-out  transform-gpu"
                    >
                        <p className="  text-2xl laptop:text-lg smartphone:text-xl tracking-tighter mt-6 smartphone:mt-1 ibm-plexregular leading-10">
                            Consider me your go-getter enthusiast
                            or your friendly neighborhood web wizard. {"I'm"} all about coding and creating with gusto, infusing every project with a splash of creativity while keeping ethics in check.<span className="tracking-wide font-semibold text-accent1">
                                {" My mission?"}
                            </span>  To deliver jaw-dropping results that make both you and your users say

                            <span className="tracking-wide text-accent1 font-bold">
                                {" 'Wow'"}
                            </span>
                            {".So, if you're after a web developer who's totally hooked on crafting digital magic, look no further—I'm your guy!"}
                        </p>
                        <div className="smartphone:mt-10 smartphone:flex justify-center">
                            <img
                                className="h-fit w-fit translate-x-6 -translate-y-1 laptop:translate-x-10 laptop:-translate-y-14 smartphone:translate-x-0 smartphone:translate-y-0 rounded-sm  transition-all duration-700 overflow-hidden"
                                src="/billu.jpg"
                                alt=""
                            />
                            <div className={"flex justify-center items-center mt-10"}>
                                <h1 className="text-2xl coolfont">Yup! Thats me</h1>
                                <ArrowBendDoubleUpLeft size={65} className="rotate-[65deg] translate-x-1 -translate-y-10" />
                            </div>
                        </div>
                    </m.div>
                </div>
            </m.section>
        </div>
    );
};
ExpandedAbout.propTypes = {
    handleClickAfter: PropTypes.func,
    darkMode: PropTypes.boolean,
};