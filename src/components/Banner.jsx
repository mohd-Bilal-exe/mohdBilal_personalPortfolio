import { m } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function Banner() {
    return (
        <div className="overflow-hidden h-full flex items-center  relative select-none ">
            <div className="absolute h-full w-1/3 bg-gradient-to-r dark:from-darkGray from-white/50 to-transparent z-50 transition-colors"></div>
            <MarqueeItem />
            <div className="absolute h-full right-0  w-1/3 bg-gradient-to-l dark:from-darkGray from-white/50 to-transparent z-50 transition-colors"></div>
        </div>
    );
}
const MarqueeItem = () => {
    const from = "0%";
    const to = "-100%";
    const texts = [
        "Personal Portfolio", "Mohd Bilal", "Full Stack Developer", "Frontend Expert"
    ]
    return (
        <div className="flex items-center transform-gpu">
            <m.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{
                    duration: 12, //repeat: Infinity, ease: "linear"
                }}
                className="flex flex-shrink-0 transform-cpu"
            >
                {texts.map((text, index) => {
                    return (
                        <div key={index} className="mx-1 flex justify-center items-center">
                            <img src="/star1.svg" className={`h-4 mr-2`}></img>
                            <span className={`${index === 0 && "font-medium text-purple-500 Pally"}`}>{text}</span>
                        </div>
                    );
                })}
            </m.div>
            <m.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{
                    duration: 12, //repeat: Infinity, ease: "linear"
                }}
                className="flex flex-shrink-0 transform-cpu"
            >
                {texts.map((text, index) => {
                    return (
                        <div key={index} className="mx-1 flex justify-center items-center">
                            <img src="/star1.svg" className={`h-4 mr-2`}></img>
                            <span className={twMerge(index === 0 ? "font-medium text-purple-500 Pally" : "ubuntu")}>{text}</span>
                        </div>
                    );
                })}
            </m.div>
        </div>
    );
};