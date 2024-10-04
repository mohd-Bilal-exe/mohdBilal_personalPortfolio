import { Responsive, WidthProvider } from "react-grid-layout";
import PropTypes from 'prop-types';
import { AnimatePresence, m } from "framer-motion";
import Title from "./components/Title";
import { NavigationArrow } from "@phosphor-icons/react";
const ProjectGridLayout = WidthProvider(Responsive);
const projectLayouts = {
    lg: [
        { i: "verbi.AI", x: 0, y: 1, w: 3, h: 9 },
        { i: "ToDo Nest", x: 3, y: 8, w: 3, h: 9 },
        { i: "Poetica", x: 3, y: 0, w: 3, h: 9 },
        { i: "PreviousPortfolio", x: 0, y: 5, w: 3, h: 8 },
        { i: "Heading", x: 0, y: 0, w: 3, h: 1, static: true },
    ], //My laptop
    md: [
        { i: "verbi.AI", x: 0, y: 1, w: 3, h: 7 },
        { i: "ToDo Nest", x: 3, y: 7, w: 3, h: 7 },
        { i: "Poetica", x: 3, y: 0, w: 3, h: 7 },
        { i: "PreviousPortfolio", x: 0, y: 5, w: 3, h: 6 },
        { i: "Heading", x: 0, y: 0, w: 3, h: 1, static: true },
    ],
    sm: [
        { i: "verbi.AI", x: 0, y: 2, w: 5, h: 6 },
        { i: "ToDo Nest", x: 0, y: 0, w: 7, h: 1 },
        { i: "Poetica", x: 0, y: 9, w: 1, h: 2 },
        { i: "PreviousPortfolio", x: 0, y: 5, w: 3, h: 6 },
        { i: "Heading", x: 0, y: 0, w: 3, h: 1, static: true },
    ],
    xs: [
        { i: "verbi.AI", x: 0, y: 2, w: 3, h: 8 },
        { i: "ToDo Nest", x: 0, y: 1, w: 3, h: 8 },
        { i: "Poetica", x: 0, y: 8, w: 3, h: 8 },
        { i: "PreviousPortfolio", x: 0, y: 5, w: 3, h: 8 },
        { i: "Heading", x: 0, y: 0, w: 3, h: 1, static: true },
    ],
};
const Projects = [
    {
        key: "verbi.AI",
        title: "verbi.AI",
        imgScr: "/Verbi.png",
        link: "https://verbi-ai.vercel.app/",
        description: "AI-powered app for grammar correction and language translation with custom instructions.",
        tech: ["React js", "Redux js", "Google-GenAI", "TailwindCSS", "Framer-motion"],
    },
    {
        key: "ToDo Nest",
        title: "ToDo Nest",
        imgScr: "/Todo.png",
        link: "https://todo-nest.netlify.app/",
        description: "A task manager with custom colors, powered by Redux for persistent tasks.",
        tech: ["React js", "Redux js", "TailwindCSS", "Framer-motion"],
    },
    {
        key: "Poetica",
        title: "Poetica",
        imgScr: "/Poetica.avif",
        link: "",
        description: "A social platform for writers with AI-generated summaries and hashtags.",
        tech: ["Next js", "Firebase", "Google-GenAI", "TailwindCSS", "Framer-motion"],
    },
    {
        key: "PreviousPortfolio",
        title: "Oldfolio",
        imgScr: "/portfolio.png",
        link: "https://webweaver-personalportfolio.netlify.app/",
        description: "My first React project featuring Framer Motion animations.",
        tech: ["React js", "TailwindCSS", "Framer-motion"],
    },
]


export default function Project({ isFade, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br  from-cyan-500 to-green-600", size: "" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    }
    return (
        <div className={`layout w-full h-full mr-[1px] ${isFade && "pointer-events-none"}`}>
            <AnimatePresence>
                {isFade && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-[500] fixed top-0 left-0 h-full w-full bg-white/10 dark:bg-black/5 "
                    />
                )}
            </AnimatePresence>


            <ProjectGridLayout
                key="Projects"
                layouts={{ lg: projectLayouts.lg, md: projectLayouts.lg, sm: projectLayouts.sm, xxs: projectLayouts.xs }}
                breakpoints={{ lg: 1200, md: 992, sm: 768, xxs: 480 }}
                cols={{ lg: 6, md: 6, sm: 2, xxs: 2 }}
                margin={[1, 1]}
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
                                <div className={`group w-full h-full flex flex-col justify-center items-start   z-50 ${isFade && "grayscale opacity-10"} transition-all duration-300`}>
                                    <div className="w-full h-4/5 flex">
                                        <div id="Texts" className="w-2/5 smartphone:w-1/2  h-full p-6 text-4xl flex flex-col justify-center text-pretty">
                                            <h1 className="ml-1 tracking-wider Pally">{Project.title}</h1>
                                            <h2 className="text-xs ml-3 mt-2 tracking-wider font-extralight">{Project.description}</h2>
                                        </div>
                                        <div id="imageCont" className="w-3/5 smartphone:w-1/2  h-full p-4 flex items-center justify-center   ">
                                            <div
                                                className="w-full h-full overflow-hidden rounded-2xl drop-shadow-[0px_0px_2px_rgba(255,255,255,0.35)] transition-all duration-300 group-hover:scale-[99%] bg-contain bg-center bg-no-repeat"
                                                style={{
                                                    backgroundImage: `url(${Project.imgScr})`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div id="TechUsed" className="flex flex-wrap  items-center gap-2 px-4 group">
                                        {
                                            Project.tech.map((item) => {
                                                return (
                                                    <span key={item} className="dark:bg-white/5 bg-darkGray/5 px-2 text-sm smartphone:text-xs  rounded-sm group-hover:scale-[102%] transition-all">
                                                        {item}
                                                    </span>

                                                )
                                            })
                                        }
                                        <a href={Project.link ? Project.link : "/I'm_working_on_it(yet-another-project-that-no-one-cares-about)"}
                                            onMouseEnter={handleEnter}
                                            onMouseLeave={handleExit}
                                            target={Project.key !== "Poetica" ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 flex justify-center items-center  group-hover:dark:bg-white/5 group-hover:bg-darkGray/5 rounded-xl  -translate-y-1 transition-all duration-300 overflow-hidden">
                                            <span className="flex gap-2 flex-col justify-center items-center w-full h-24  rotate-45  -translate-x-[19px] hover:translate-x-3 translate-y-5 hover:-translate-y-3 transition-all duration-500">
                                                <NavigationArrow className="rotate-45  mb-[1px] h-1/2" size={"65%"} weight="duotone" />
                                                <span className="h-1/2">
                                                    Go!
                                                </span>
                                            </span></a>
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
