import PropTypes from 'prop-types';
import { m } from 'framer-motion'
import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge';

export const AnimationScreen = ({ setIsAnimating, setShowGrid, setShowExpandedAbout, darkMode }) => {
    useEffect(() => {
        setIsAnimating(true);

        const AnimationTimeout = setTimeout(() => {
            setIsAnimating(false);
        }, 3000);
        // Clean up the timeout if the component unmounts
        return () => {
            //clearTimeout(gridHideTimeout); 
            clearTimeout(AnimationTimeout);
        }
    }, [setIsAnimating, setShowGrid, setShowExpandedAbout]);
    const darkModeclass = !darkMode ? "bg-darkGray" : "bg-white";
    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 0.3,
            staggerChildren: 0.3
        }
    };

    return (
        <m.section variants={variants} initial="initial" animate="animate" className="z-[150] fixed flex w-screen h-screen">
            {[4, 3, 2, 1, 0].map((item) => {
                return (
                    <m.div
                        initial={{ y: "100%" }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut", type: "spring", delay: item * 0.05 }}
                        key={item}
                        className={twMerge("z-[150] w-[10%] h-full", darkModeclass)}>
                    </m.div>
                )
            })}
            {[0, 1, 2, 3, 4].map((item) => {
                return (
                    <m.div
                        initial={{ y: "100%" }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut", type: "spring", delay: item * 0.05 }}
                        key={item}
                        className={twMerge("z-[150] w-[10%] h-full", darkModeclass)}>
                    </m.div>)
            })}
        </m.section>
    )
}
AnimationScreen.propTypes = {
    setIsAnimating: PropTypes.func.isRequired,
    setShowGrid: PropTypes.func.isRequired,
    setShowExpandedAbout: PropTypes.func.isRequired,
    darkMode: PropTypes.bool,
};