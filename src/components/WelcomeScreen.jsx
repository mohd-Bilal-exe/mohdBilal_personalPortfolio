import { twMerge } from "tailwind-merge";
import { m } from "framer-motion";
export default function WelcomeScreen() {
    return (
        <m.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className={twMerge("w-screen h-screen fixed top-0 left-0 z-[50]  bg-darkGray text-white text-7xl flex items-center justify-center drop-shadow-md ubuntu")}>
            <m.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Hi!</m.h1>
        </m.section>
    )
}