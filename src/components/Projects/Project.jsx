import { Responsive, WidthProvider } from "react-grid-layout";
import PropTypes from 'prop-types';
import { AnimatePresence, m } from "framer-motion";
import Title from "./components/Title";
import { NavigationArrow } from "@phosphor-icons/react";
const ProjectGridLayout = WidthProvider(Responsive);
const projectLayouts = {
    lg: [
        { i: "ResumeIQ", x: 0, y: 1, w: 3, h: 9 },
        { i: "verbi.AI", x: 3, y: 1, w: 3, h: 9 },
        { i: "ToDo Nest", x: 0, y: 10, w: 3, h: 8 },
        { i: "PreviousPortfolio", x: 3, y: 10, w: 3, h: 9 },
        { i: "Heading", x: 0, y: 0, w: 3, h: 1, static: true },
    ],
    md: [
        { i: "ResumeIQ", x: 0, y: 1, w: 3, h: 8 },
        { i: "verbi.AI", x: 3, y: 1, w: 3, h: 8 },
        { i: "ToDo Nest", x: 0, y: 9, w: 3, h: 8 },
        { i: "PreviousPortfolio", x: 3, y: 9, w: 3, h: 8 },
        { i: "Heading", x: 0, y: 0, w: 3, h: 1, static: true },
    ],
    sm: [
        { i: "ResumeIQ", x: 0, y: 1, w: 2, h: 9 },
        { i: "verbi.AI", x: 0, y: 10, w: 2, h: 9 },
        { i: "ToDo Nest", x: 0, y: 19, w: 2, h: 9 },
        { i: "PreviousPortfolio", x: 0, y: 28, w: 2, h: 9 },
        { i: "Heading", x: 0, y: 0, w: 2, h: 1, static: true },
    ],
    xs: [
        { i: "ResumeIQ", x: 0, y: 1, w: 2, h: 9 },
        { i: "verbi.AI", x: 0, y: 10, w: 2, h: 9 },
        { i: "ToDo Nest", x: 0, y: 19, w: 2, h: 9 },
        { i: "PreviousPortfolio", x: 0, y: 28, w: 2, h: 9 },
        { i: "Heading", x: 0, y: 0, w: 2, h: 1, static: true },
    ],
};
const Projects = [
    {
        key: "ResumeIQ",
        title: "ResumeIQ",
        imgScr: "/resumeIQ.png",
        link: "https://resumeiq-mohdb.vercel.app/",
        description: "AI resume reviewer with real-time LaTeX preview and PDF export.",
        tech: ["Next js", "Firebase", "Express", "Framer Motion", "Node", "Gemini API"],
    },
    {
        key: "verbi.AI",
        title: "verbi.AI",
        imgScr: "/Verbi.webp",
        link: "#",
        description: "AI-powered app for grammar correction and language translation with custom instructions.",
        tech: ["React js", "Redux js", "Google-GenAI", "TailwindCSS", "Framer-motion"],
    },
    {
        key: "ToDo Nest",
        title: "ToDo Nest",
        imgScr: "/Todo.webp",
        link: "https://todo-nest.netlify.app/",
        description: "A task manager with custom colors, powered by Redux for persistent tasks.",
        tech: ["React js", "Redux js", "TailwindCSS", "Framer-motion"],
    },
    {
        key: "PreviousPortfolio",
        title: "Oldfolio",
        imgScr: "/portfolio.webp",
        link: "https://webweaver-personalportfolio.netlify.app/",
        description: "My first React project featuring Framer Motion animations.",
        tech: ["React js", "TailwindCSS", "Framer-motion"],
    },
]


export default function Project({ isFade, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br  from-cyan-500 to-green-600 shadow-green-600", size: "w-4 h-4" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white shadow-white", size: "w-2 h-2" });
    }
    return (
        <div className={`layout w-full h-full mr-[1px] ${isFade && "pointer-events-none"}`}>
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="top-0 left-0 z-[500] fixed bg-white/10 dark:bg-black/5 w-full h-full"
                    />
                )}
            </AnimatePresence>


            <ProjectGridLayout
                key="Projects"
                layouts={{ lg: projectLayouts.lg, md: projectLayouts.md, sm: projectLayouts.sm, xxs: projectLayouts.xs }}
                breakpoints={{ lg: 1200, md: 992, sm: 768, xxs: 480 }}
                cols={{ lg: 6, md: 6, sm: 2, xxs: 2 }}
                margin={[2, 2]}
                containerPadding={[0, 0]}
                rowHeight={45}
                isResizable={false}
                isDraggable={false}
                useCSSTransforms={false}
            >
                <div key="Heading" className={`dark:bg-darkGray/90 backdrop-blur-xl dark:text-white bg-white/90 `}>
                    <Title isFade={isFade} />
                </div>

                {
                    Projects.map((Project) => {
                        return (
                            <m.div
                                key={Project.key} className={`dark:bg-darkGray/90 backdrop-blur-xl dark:text-white bg-white/90 `}>
                                <div className={`group w-full h-full flex flex-col z-50 ${isFade && "grayscale opacity-10"} transition-all duration-300`}>
                                    <div id="imageCont" className="flex-1 p-3">
                                        <div
                                            className="bg-cover bg-center drop-shadow-[0px_0px_2px_rgba(255,255,255,0.35)] rounded-sm w-full h-full overflow-hidden group-hover:scale-[99%] transition-all duration-300"
                                            style={{
                                                backgroundImage: `url(${Project.imgScr})`,
                                            }}
                                        />
                                    </div>
                                    
                                    <div className="space-y-2 p-4">
                                        <div className="flex items-center gap-3"><h1 className="font-semibold smartphone:text-lg text-xl tracking-wider Pally">{Project.title}</h1>
                                        <a href={Project.link}
                                                onMouseEnter={handleEnter}
                                                onMouseLeave={handleExit}
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center group-hover:bg-darkGray/5 group-hover:dark:bg-white/5 rounded-xl w-10 h-10 overflow-hidden transition-all -translate-y-1 duration-300">
                                                <span className="flex flex-col justify-center items-center gap-2 w-full h-24 rotate-45 transition-all -translate-x-[19px] translate-y-5 hover:-translate-y-3 hover:translate-x-3 duration-500">
                                                    <NavigationArrow className="mb-[1px] h-1/2 rotate-45" size={"65%"} weight="duotone" />
                                                    <span className="h-1/2">
                                                        Go!
                                                    </span>
                                                </span>
                                            </a></div>
                                        
                                        
                                        <p className="font-light text-gray-600 smartphone:text-[10px] dark:text-white/70 text-xs leading-relaxed">{Project.description}</p>
                                        
                                        <div className="flex flex-wrap items-center gap-1">
                                            {
                                                Project.tech.map((item) => {
                                                    return (
                                                        <span key={item} className="bg-darkGray/5 dark:bg-white/5 px-1.5 py-0.5 rounded text-[13px] smartphone:text-[8px] group-hover:scale-[102%] transition-all">
                                                            {item}
                                                        </span>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        )
                    })
                }
            </ProjectGridLayout>
        </div>
    )
}
Project.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
    isFade: PropTypes.bool.isRequired
};
