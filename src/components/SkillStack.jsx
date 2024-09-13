import { ArrowBendDoubleUpLeft, ArrowBendDoubleUpRight } from "@phosphor-icons/react";
import { DivOrigami } from "./DivOrigami";
import { Arrow } from "./Svgs";

export default function SkillStack() {
    return (
        <section className="w-full h-full flex justify-between items-center ">
            <div id="Stack" className="w-1/2 h-full  flex items-center justify-center">
                <h1 className="ml-4 text-5xl  font-bold leading-tight">
                    <span className="block Pally ">Tech stack </span>
                    <span className="block text-lg  mt-1 ml-3">
                        I <span className="text-purple-900 dark:text-purple-500">*casually* </span>dabble in&nbsp;
                        <span className="text-lg sm:text-xl md:text-2xl font-medium"></span>
                    </span>
                    <span className="block  text-xs tracking-tight ml-3">
                        (or so I say)
                    </span>
                </h1>

                <Arrow className="w-20 h-20  absolute top-12  rotate-[18deg]  -translate-y-10 translate-x-40" />
            </div>
            {/* <DivOrigami />*/}
        </section>
    );
}
