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
                x: cursorPos.x - 64,
                y: cursorPos.y - 64,
            });
            const relativePos = Properties.size === "w-4 h-4" ? 9 : 5;
            controls2.set({
                x: cursorPos.x - relativePos,
                y: cursorPos.y - relativePos,
            });
        };

        updateCursorPosition();
        // Continuously update position
        window.addEventListener('mousemove', updateCursorPosition);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('mousemove', updateCursorPosition);
    }, [cursorPos, controls, Properties.size, controls2]);

    return (
        <>
            <m.div
                key="Grad1"
                className={twMerge(
                    darkMode ? Properties.color : "bg-purple-500",
                    "absolute top-0 w-32 h-32 xsmphone:hidden rounded-full pointer-events-none z-[0] transition-colors duration-500"
                )}
                animate={controls}
                transition={{
                    type: "spring",
                }}
            />
            <m.div
                key="Grad2"
                className={twMerge(
                    "absolute top-0 w-2 h-2 rounded-full pointer-events-none z-[200] transition-colors duration-300",
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
