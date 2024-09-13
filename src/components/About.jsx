import { ArrowUpRight } from "@phosphor-icons/react";
export default function About({ handleClick, setWhatsClicked }) {

    return (
        <section
            className="flex flex-col w-full h-full "
        >
            <div className="h-[92%] p-4  flex flex-col  max-w-md mx-auto">
                <div id="headingnpfp" className={`flex justify-between items-center px-2 h-32 `}>
                    <h2 className="text-5xl font-semibold text-gray-800 dark:text-white/50  mb-3 Pally">Mohd Bilal</h2>
                    <div className="size-[110px] overflow-hidden rounded-lg flex items-center justify-center border dark:border-white/20  bg-gradient-to-r dark:from-white/10 from-black/10 to-black/20 dark:to-white/20 ">
                        <img
                            src="/2821.png"
                            className={`h-[85%]  drop-shadow-2xl transition-all duration-300 ease-in-out 
              group-hover:scale-105`}
                            alt="hh"
                        />
                    </div>
                </div>
                <p className="w-[86%] text-sm  text-gray-600 dark:text-white mb-4 ml-3 text-pretty">
                    Full stack developer from Lucknow, India. <br /> A frontend expert with love for crafting modern UIs with React, Tailwind CSS and Framer-motion.
                </p>

            </div>
            <button
                onClick={() => {
                    setWhatsClicked("About");
                    handleClick()
                }}
                className="group h-[8%] w-fit place-self-end flex gap-1 justify-between items-center dark:bg-white/5 pl-2 pr-1  "
            >
                <span className="text-xs tracking-wider ">Unveil More</span>
                <ArrowUpRight size={18} className=" transition-all duration-300 ease-in-out" />
            </button>
        </section>
    );
}

