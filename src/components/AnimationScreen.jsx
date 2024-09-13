import { m } from 'framer-motion'
import { useEffect } from 'react'

export const AnimationScreen = ({ setIsAnimating, setShowGrid, setShowExpandedAbout }) => {
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

    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }
    };

    return (
        <m.section variants={variants} initial="initial" animate="animate" className="w-screen h-screen fixed flex z-[150]">
            {[4, 3, 2, 1, 0].map((item) => {
                return (
                    <m.div
                        initial={{ y: "100%" }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 2, ease: "easeInOut", type: "spring", delay: item * 0.05 }}
                        key={item}
                        className="w-[10%]  h-full bg-white dark:bg-darkGray z-[150]">
                    </m.div>
                )
            })}
            {[0, 1, 2, 3, 4].map((item) => {
                return (
                    <m.div
                        initial={{ y: "100%" }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 2, ease: "easeInOut", type: "spring", delay: item * 0.05 }}
                        key={item}
                        className="w-[10%] h-full bg-white dark:bg-darkGray z-[150]">
                    </m.div>)
            })}
        </m.section>
    )
}
