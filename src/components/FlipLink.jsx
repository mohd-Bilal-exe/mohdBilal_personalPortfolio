
import { ArrowFatLineRight } from "@phosphor-icons/react";
import { m } from "framer-motion";
const DURATION = 0.25;
const STAGGER = 0.025;
export const FlipLink = ({ children, href }) => {
    return (
        <m.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative  block overflow-hidden whitespace-nowrap "
            style={{
                lineHeight: 0.95,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <m.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className={` inline-block ${l === 'a' && "mx-1.5"}`}
                        key={i}
                    >
                        {l}
                    </m.span>
                ))}
            </div>
            <div className="absolute inset-0 ">
                {children.split("").map((l, i) => (
                    <m.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className={`inline-block ${l === 'a' && "mx-1.5"}`}
                        key={i}
                    >
                        {l}
                    </m.span>

                ))}
            </div>
        </m.a>
    );
};