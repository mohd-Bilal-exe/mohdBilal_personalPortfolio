import PropTypes from 'prop-types';
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, InstagramLogo } from "@phosphor-icons/react";
import { useRef, useEffect, useMemo } from "react";

export default function ExpandedExtras({ handleClickAfter }) {
    window.scrollTo({ top: 0 })
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Different scroll speeds for two columns
    const leftColumnScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]); // Adjust as needed
    const rightColumnScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]); // Adjust as needed

    const cards = useMemo(() => [
        { url: "/picc1.jpeg", title: "Sunshine Bloom", subtitle: "kuch bhi", id: 1 },
        { url: "/picc2.jpg", title: "Puppy Joy", subtitle: "kuch bhi", id: 2 },
        { url: "/picc4.jpg", title: "Fragrant Blossom", subtitle: "", id: 3 },
        { url: "/picc5.jpg", title: "Golden Farewell", subtitle: "kuch bhi", id: 4 },
        { url: "/picc6.jpg", title: "Crimson Arch", subtitle: "kuch bhi", id: 5 },
        { url: "/picc7.jpg", title: "Market Moments", subtitle: "kuch bhi", id: 6 },
        { url: "/picc8.jpg", title: "Eerie Clock", subtitle: "kuch bhi", id: 7 },
        { url: "/picc9.jpg", title: "Puppy Gathering", subtitle: "kuch bhi", id: 8 },
        { url: "/picc10.jpg", title: "Red Beauty", subtitle: "kuch bhi", id: 9 },
        { url: "/picc11.jpg", title: "Night Bloom", subtitle: "kuch bhi", id: 10 },
        { url: "/picc12.jpg", title: "Moonlit Blossom", subtitle: "kuch bhi", id: 11 },
        { url: "/picc13.jpg", title: "Sky Petal", subtitle: "kuch bhi", id: 12 },
        { url: "/picc15.jpg", title: "Dewy Bud", subtitle: "kuch bhi", id: 13 },
        { url: "/picc16.jpg", title: "Empty Street", subtitle: "kuch bhi", id: 14 },
    ], []);

    useEffect(() => {
        // Preload images
        cards.forEach((card) => {
            const img = new Image();
            img.src = card.url;
        });
    }, [cards]);

    // Split the cards into two columns
    const leftColumnCards = cards.filter((_, i) => i % 2 === 0); // Even indexed cards
    const rightColumnCards = cards.filter((_, i) => i % 2 !== 0); // Odd indexed cards

    return (
        <m.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.50, ease: "easeInOut" }}
            id="xtramain"
            className="w-screen h-full flex flex-col items-center justify-center bg-bg2 text-w1"
            ref={targetRef} // Set ref here
        >
            <button
                onClick={handleClickAfter} className="absolute z-[500]  dark:text-w1 top-3 left-3 group flex h-8 w-8 overflow-hidden"
            >
                <div className="flex h-full w-16 group-hover:-translate-x-8 transition-transform duration-500 ease-in-out ">
                    <ArrowLeft size={32} weight='thin' />
                    <ArrowLeft size={32} weight='regular' />
                </div>

            </button>
            <section id="text" className="overflow-hidden w-full mt-32 smartphone:mt-14">
                <m.h1
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
                    className="text-6xl m-16 smartphone:m-8  smartphone:text-4xl coolfont tracking-widest smartphone:tracking-wider">
                    Photography
                </m.h1>
                <m.h2
                    initial={{ y: 400 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: .5,
                        type: "spring",
                        delay: 1.75,
                        ease: "easeInOut"
                    }}
                    className=" w-full text-xl smartphone:text-base  ml-24 smartphone:ml-8 smartphone:mt-10 ubuntu tracking-wide smartphone:tracking-normal">
                    <span className="text-accent2lt">:)</span> Some clicks that {"I'm"} proud of
                </m.h2>
            </section>

            <m.section
                id="photography" className="w-11/12">
                <div className="grid grid-cols-2 gap-4 mx-auto my-8"> {/* Two columns layout */}
                    <m.div
                        style={{ y: leftColumnScroll }}
                        transition={{ ease: "easeInOut", type: "spring", stiffness: 200, damping: 30 }} // Added spring transition
                        className="flex flex-col gap-4"> {/* Left column */}
                        {leftColumnCards.map((card) => (
                            <div key={card.id} className="relative group overflow-hidden rounded-lg">
                                <img
                                    src={card.url}
                                    loading="lazy"
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute bottom-2 left-2 z-10 translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <p className="bg-gradient-to-bl from-black/60 to-white/10 p-3 text-lg font-bold text-white backdrop-blur-md ubuntu drop-shadow-lg">
                                        {card.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </m.div>

                    <m.div
                        style={{ y: rightColumnScroll }}
                        transition={{ ease: "easeInOut", type: "spring", stiffness: 200, damping: 30 }} // Added spring transition
                        className="flex flex-col gap-4"> {/* Right column */}
                        {rightColumnCards.map((card) => (
                            <div key={card.id} className="relative group overflow-hidden rounded-lg">
                                <img
                                    src={card.url}
                                    loading="lazy"
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute bottom-2 left-2 z-10 translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <p className="bg-gradient-to-bl from-black/60 to-white/10 p-3 text-lg font-bold text-white backdrop-blur-md ubuntu drop-shadow-lg">
                                        {card.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </m.div>
                </div>

                <section className="mx-auto w-11/12 h-[500px] flex justify-center items-center text-white">
                    <h1 className="flex flex-col justify-center items-center text-5xl smartphone:text-lg ibm-plexregular tracking-tight">
                        I post cool stuff here
                        <a href="https://www.instagram.com/mohd.bilal__?igsh=MW9ydDcwcTR4dmVjaQ==" className="group flex items-center justify-center transition-all duration-700 ease-in-out my-4 hover:text-insta tracking-tighter">
                            <InstagramLogo size={"13%"} weight="duotone" className="mx-2 transition-transform ease-in-out group-hover:scale-105" />
                            @mohd.bilal__
                        </a>
                    </h1>
                </section>
            </m.section>
        </m.section>
    );
}

ExpandedExtras.propTypes = {
    handleClickAfter: PropTypes.func,
};