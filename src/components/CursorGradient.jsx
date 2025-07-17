import PropTypes from 'prop-types';
import { m, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function CursorGradient({ cursorPos, darkMode, Properties }) {
    const controls = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        const updateCursorPosition = () => {
            controls.set({
                x: cursorPos.x - 48,
                y: cursorPos.y - 48,
            });
            const relativePos = Properties.size === "w-4 h-4" ? 9 : 5;
            controls2.set({
                x: cursorPos.x - relativePos,
                y: cursorPos.y - relativePos,
            });
        };
        updateCursorPosition();
    }, [cursorPos, controls, Properties.size, controls2]);

    return (
        <>
            <m.div
                key="Grad1"
                className={twMerge(
                    darkMode ? Properties.color : "bg-gradient-to-br from-purple-500 to-cyan-300",
                    "shadow-[0_0_20px_30px]  absolute top-0 w-24 h-24 smartphone:hidden rounded-full pointer-events-none z-[0] transition-colors transition-shadows  ",
                )}
                animate={controls}
                transition={{
                    type: "spring",
                }}
            />
            <m.div
                key="Grad2"
                className={twMerge(
                    "smartphone:hidden top-0 z-[200] absolute rounded-full transition-colors transition-shadows duration-300 pointer-events-none",
                    darkMode ? Properties.color : "bg-purple-500",
                    Properties.size
                )}
                style={{
                    transform: 'translate(-50%, -50%)',
                    transformOrigin: "center",
                    transitionProperty: 'width, height ',
                }}
                animate={controls2}
                transition={{
                    type: "spring",
                }}
            />
        </>
    );
}

CursorGradient.propTypes = {
    cursorPos: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    darkMode: PropTypes.bool,
    Properties: PropTypes.shape({
        size: PropTypes.string,
        color: PropTypes.string,
    }),
};
