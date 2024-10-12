import PropTypes from "prop-types"; // Import PropTypes
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FaGithub, FaJs } from "react-icons/fa";
import { SiCss3, SiHtml5, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { LiaNode } from "react-icons/lia";

export const DivOrigami = ({ isFade }) => {
    return (
        <section className="w-1/2 flex h-full flex-col items-center justify-start gap-12 px-4 py-24 md:flex-row">
            <LogoRolodex
                items={[
                    <LogoItem key={1} className="bg-[#E34F26] text-neutral-900">
                        <SiHtml5 /> <div className="text-xs uppercase">HTML</div>
                    </LogoItem>,
                    <LogoItem key={2} className="bg-css text-neutral-900">
                        <SiCss3 /><div className="text-xs uppercase">CSS</div>
                    </LogoItem>,
                    <LogoItem key={3} className="bg-js text-neutral-900">
                        <FaJs /><div className="text-xs uppercase">JavaScript</div>
                    </LogoItem>,
                    <LogoItem key={4} className="bg-react text-neutral-900">
                        <SiReact /><div className="text-xs uppercase">React JS</div>
                    </LogoItem>,
                    <LogoItem key={5} className="bg-tailwind text-neutral-900">
                        <SiTailwindcss /><div className="text-xs uppercase">Tailwind CSS</div>
                    </LogoItem>,
                    <LogoItem key={6} className="bg-white text-neutral-900 border border-neutral-900">
                        <SiNextdotjs /><div className="text-xs uppercase">Next JS</div>
                    </LogoItem>,
                    <LogoItem key={7} className="bg-green-700 text-neutral-900">
                        <LiaNode /><div className="text-xs uppercase">Node JS</div>
                    </LogoItem>,
                    <LogoItem key={8} className="bg-gray-400 text-neutral-900">
                        <FaGithub /><div className="text-xs uppercase">GitHub</div>
                    </LogoItem>,
                ]}
                isFade={isFade}
            />
        </section>
    );
};

// PropTypes for DivOrigami
DivOrigami.propTypes = {
    isFade: PropTypes.bool.isRequired,
};

const DELAY_IN_MS = 1800;
const TRANSITION_DURATION_IN_SECS = 1.2;

const LogoRolodex = ({ items, isFade }) => {
    const intervalRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            !isFade && setIndex((pv) => pv + 1);
        }, DELAY_IN_MS);

        return () => {
            clearInterval(intervalRef.current || undefined);
        };
    }, [isFade]);

    return (
        <div
            style={{
                transform: "rotateY(-20deg)",
                transformStyle: "preserve-3d",
            }}
            className="relative z-0 h-2 w-56 smartphone:w-[10rem] shrink-0 rounded-full border border-neutral-700 bg-neutral-900 dark:bg-white"
        >
            <AnimatePresence mode="sync">
                <m.div
                    style={{
                        y: "-50%",
                        x: "-50%",
                        clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                        zIndex: -index,
                        backfaceVisibility: "hidden",
                    }}
                    key={index}
                    transition={{
                        duration: TRANSITION_DURATION_IN_SECS,
                        ease: "easeInOut",
                    }}
                    initial={{ rotateX: "0deg" }}
                    animate={{ rotateX: "0deg" }}
                    exit={{ rotateX: "-180deg" }}
                    className="absolute left-1/2 top-1/2"
                >
                    {items[index % items.length]}
                </m.div>
                <m.div
                    style={{
                        y: "-50%",
                        x: "-50%",
                        clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                        zIndex: index,
                        backfaceVisibility: "hidden",
                    }}
                    key={(index + 1) * 2}
                    initial={{ rotateX: "180deg" }}
                    animate={{ rotateX: "0deg" }}
                    exit={{ rotateX: "0deg" }}
                    transition={{
                        duration: TRANSITION_DURATION_IN_SECS,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2"
                >
                    {items[index % items.length]}
                </m.div>
            </AnimatePresence>

            <hr
                style={{
                    transform: "translateZ(1px)",
                }}
                className="absolute w-[93%] smartphone:w-[91%] left-2 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
            />
        </div>
    );
};

// PropTypes for LogoRolodex
LogoRolodex.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element).isRequired,
    isFade: PropTypes.bool.isRequired,
};

const LogoItem = ({ children, className }) => {
    return (
        <div
            className={twMerge(
                "flex flex-col justify-center items-center h-36 w-52 smartphone:w-36 place-content-center  bg-neutral-700 text-8xl text-neutral-50",
                className
            )}
        >
            {children}
        </div>
    );
};

// PropTypes for LogoItem
LogoItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
