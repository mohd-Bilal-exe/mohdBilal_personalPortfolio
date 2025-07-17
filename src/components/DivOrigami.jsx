import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { FaGithub, FaJs, FaJava, FaDocker } from "react-icons/fa";
import { SiCss3, SiHtml5, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiExpress, SiFirebase, SiMongodb, SiGit, SiVisualstudiocode, SiPostman, SiMysql } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { LiaNode } from "react-icons/lia";
import { MdDesignServices, MdPsychology, MdArchitecture, MdStorage } from "react-icons/md";

export const DivOrigami = ({ isFade, setCursorColor }) => {
    const techItems = [
        // Core Languages
        { id: 1, icon: FaJs, name: "JavaScript", className: "bg-[#F7DF1E] text-black", cursorColor: "bg-[#F7DF1E]" },
        { id: 2, icon: SiTypescript, name: "TypeScript", className: "bg-[#3178C6] text-white", cursorColor: "bg-[#3178C6]" },
        { id: 3, icon: FaJava, name: "Java", className: "bg-[#ED8B00] text-black", cursorColor: "bg-[#ED8B00]" },
        { id: 4, icon: SiHtml5, name: "HTML", className: "bg-[#E34F26] text-white", cursorColor: "bg-[#E34F26]" },
        { id: 5, icon: SiCss3, name: "CSS", className: "bg-[#1572B6] text-white", cursorColor: "bg-[#1572B6]" },
        // Frontend Frameworks
        { id: 6, icon: SiReact, name: "React.js", className: "bg-[#61DAFB] text-black", cursorColor: "#61DAFB" },
        { id: 7, icon: SiNextdotjs, name: "Next.js", className: "bg-black text-white", cursorColor: "#000000" },
        { id: 8, icon: SiTailwindcss, name: "Tailwind", className: "bg-[#06B6D4] text-white", cursorColor: "bg-[#06B6D4]" },
        // Backend
        { id: 9, icon: LiaNode, name: "Node.js", className: "bg-[#339933] text-white", cursorColor: "bg-[#339933]" },
        { id: 10, icon: SiExpress, name: "Express.js", className: "bg-gray-800 text-white", cursorColor: "bg-[#374151]" },
        // Databases
        { id: 11, icon: SiMongodb, name: "MongoDB", className: "bg-[#47A248] text-white", cursorColor: "bg-[#47A248]" },
        { id: 12, icon: SiMysql, name: "SQL", className: "bg-[#4479A1] text-white", cursorColor: "bg-[#4479A1]" },
        { id: 13, icon: SiFirebase, name: "Firebase", className: "bg-[#FFCA28] text-black", cursorColor: "bg-[#FFCA28]" },
        // Development Tools
        { id: 14, icon: SiGit, name: "Git", className: "bg-[#F05032] text-white", cursorColor: "bg-[#F05032]" },
        { id: 15, icon: SiVisualstudiocode, name: "VSCode", className: "bg-[#007ACC] text-white", cursorColor: "bg-[#007ACC]" },
        { id: 16, icon: FaDocker, name: "Docker", className: "bg-[#2496ED] text-white", cursorColor: "bg-[#2496ED]" },
        { id: 17, icon: SiPostman, name: "Postman", className: "bg-[#FF6C37] text-white", cursorColor: "bg-[#FF6C37]" },
        // CS Concepts & Interests
        { id: 18, icon: MdStorage, name: "Data Structures", className: "bg-purple-600 text-white", cursorColor: "bg-[#9333ea]" },
        { id: 19, icon: MdArchitecture, name: "System Design", className: "bg-teal-600 text-white", cursorColor: "bg-[#0d9488]" },
        { id: 20, icon: MdDesignServices, name: "UI/UX Design", className: "bg-pink-500 text-white", cursorColor: "bg-[#ec4899]" },
        { id: 21, icon: MdPsychology, name: "AI/ML", className: "bg-indigo-600 text-white", cursorColor: "bg-[#4f46e5]" },
    ];

    return (
        <div className="flex justify-center items-center w-2/3 h-full">
            <TechGrid items={techItems} isFade={isFade}  setCursorColor={setCursorColor} />
        </div>
    );
};

// PropTypes for DivOrigami
DivOrigami.propTypes = {
    isFade: PropTypes.bool.isRequired,
};

const TechGrid = ({ items, isFade, setCursorColor }) => {
    const [mainIndex, setMainIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isSwapped, setIsSwapped] = useState(false);

    useEffect(() => {
        if (isFade || isHovering) return;
        const interval = setInterval(() => {
            setMainIndex(prev => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [items.length, isFade, isHovering]);

    // Only swap to hoveredIndex if isSwapped is true
    const currentMain = (hoveredIndex !== null && isSwapped) ? hoveredIndex : mainIndex;
    const sideItems = items.filter((_, index) => index !== currentMain);

    return (
        <div 
            className="flex items-center gap-4 smartphone:gap-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                }
                setHoveredIndex(null);
                setIsSwapped(false);
            }}
        >
            {/* Main large icon */}
            <m.div
                key={currentMain}
                initial={{ x:12,opacity: 0 }}
                animate={{ x:0,opacity: 1 }}
                exit={{ x:12,opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={twMerge(
                    "flex flex-col justify-center items-center shadow-lg rounded-lg w-24 smartphone:w-20 h-24 smartphone:h-20",
                    items[currentMain].className
                )}
            >
                {(() => {
                    const IconComponent = items[currentMain].icon;
                    return <IconComponent className="mb-1 smartphone:text-3xl text-4xl" />;
                })()}
                <span className="font-medium text-md">{items[currentMain].name}</span>
            </m.div>

            {/* Grid of smaller icons */}
            <div className="gap-2 smartphone:gap-1 grid grid-cols-5 smartphone:max-w-40">
                {sideItems.map((item, index) => {
                    const originalIndex = items.findIndex(i => i.id === item.id);
                    return (
                        <m.div
                            key={item.id}
                            initial={{  opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onMouseEnter={() => {
                                if (isSwapped) return; // Prevent further swaps until mouse leaves
                                if (hoverTimeout) clearTimeout(hoverTimeout);
                                setHoveredIndex(originalIndex);
                                setCursorColor({ color: item.cursorColor, size: "w-4 h-4" });
                                // Only swap if hovered for 1.5s
                                const timeout = setTimeout(() => {
                                    setIsSwapped(true);
                                }, 1500);
                                setHoverTimeout(timeout);
                            }}
                            onMouseLeave={() => {
                                if (hoverTimeout) {
                                    clearTimeout(hoverTimeout);
                                    setHoverTimeout(null);
                                }
                                setCursorColor({ color: "bg-white", size: "w-2 h-2" });
                                setIsSwapped(false);
                            }}
                            className={twMerge(
                                "flex justify-center items-center hover:rounded-lg w-12 smartphone:w-10 h-12 smartphone:h-10 hover:scale-105 transition-transform duration-150 cursor-pointer",
                                item.className
                            )}
                        >
                            {(() => {
                                const IconComponent = item.icon;
                                return <IconComponent className="smartphone:text-lg text-xl" />;
                            })()}
                        </m.div>
                    );
                })}
            </div>
        </div>
    );
};

TechGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        icon: PropTypes.elementType.isRequired,
        name: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
    })).isRequired,
    isFade: PropTypes.bool.isRequired,
};
