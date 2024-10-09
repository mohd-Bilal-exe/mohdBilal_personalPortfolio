import { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { AnimatePresence, m } from "framer-motion";
import NavandButtons from "./components/NavandButtons";
import Banner from "./components/Banner";
import About from "./components/About";
import { Email, GitHub, Instagram, LinkedIn } from "./components/Contact";
import Resume from "./components/Resume";
import Location from "./components/Location";
import DarkMode from "./components/DarkMode";
import SkillStack from "./components/SkillStack";
import ExpandedAbout from "./pages/ExpandedAbout";
import { AnimationScreen } from "./components/AnimationScreen";
import ExtrasCollapsed from "./components/ExtrasCollapsed";
import ExpandedExtras from "./pages/ExpandedExtras";
import CursorGradient from "./components/CursorGradient";
import useResponsiveLayouts from "./hooks/useResponsiveLayouts";
import WelcomeScreen from "./components/WelcomeScreen";
import Project from "./components/Projects/Project";
import { ArrowUp } from "@phosphor-icons/react";
import smoothScrollToTop from "./utils/scrollBehaviour";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, });
  const [cursorColor, setCursorColor] = useState({ color: "bg-white", size: "w-2 h-2" });
  const [darkMode, setDarkMode] = useState(true);
  const [whatsClicked, setWhatsClicked] = useState("Nothing");
  const [showExtras, setShowExtras] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [showExpandedAbout, setShowExpandedAbout] = useState(false);
  const [layouts, updateLayout] = useResponsiveLayouts();

  useEffect(() => {
    const Welcome = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 1200); // Adjust timing according to your animation duration
    return () => clearTimeout(Welcome);
  })

  useEffect(() => {
    if (!isAnimating) return;
    const animationTimeout = setTimeout(() => {
      setShowGrid(false); // Hide the grid at a specific point in the animation
      if (whatsClicked === "About") {
        setShowExpandedAbout(true);
        setShowExtras(false);
      } else if (whatsClicked === "Extras") {
        setShowExtras(true);
        setShowExpandedAbout(false);
      }
    }, 360); // Adjust timing according to your animation duration

    return () => clearTimeout(animationTimeout);
  }, [isAnimating, whatsClicked]);
  const handleMouseMove = (e) => {
    const { pageX, pageY } = e;
    setCursorPos({ x: pageX, y: pageY });
  };
  //const ele = document.getElementById("root")
  window.addEventListener('mousemove', handleMouseMove);

  const handleClickAfter = () => {
    setIsAnimating(false);
    setShowGrid(true);
    setShowExpandedAbout(false);
    setShowExtras(false);
  };

  const handleClickBefore = () => {
    setIsAnimating(true);
  };



  const handleToTop = () => {
    smoothScrollToTop();
  };

  const [componentFaded, setComponentFaded] = useState({
    About: false,
    Banner: false,
    LinkedIn: false,
    GitHub: false,
    Instagram: false,
    Extras: false,
    Email: false,
    Resume: false,
    DarkMode: false,
    Location: false,
    Navbar: false,
    SkillStack: false,
    Projects: false
  });
  const handleLayoutUpdate = (navSelectedd) => {
    const screenSize = window.innerWidth;

    switch (navSelectedd) {
      case "Everything else": {
        setComponentFaded({
          About: false,
          Banner: false,
          LinkedIn: true,
          GitHub: true,
          Instagram: false,
          Extras: false,
          Email: true,
          Resume: true,
          DarkMode: false,
          Location: false,
          Navbar: false,
          SkillStack: true,
          Projects: true,
        });
        break;
      }

      case "Technologies": {
        setComponentFaded({
          About: true,
          Banner: false,
          LinkedIn: true,
          GitHub: true,
          Instagram: true,
          Extras: true,
          Email: true,
          Resume: false,
          DarkMode: true,
          Location: true,
          Navbar: true,
          SkillStack: false,
          Projects: false,
        });
        break;
      }

      default: {
        // Reset everything to false
        setComponentFaded({
          About: false,
          Banner: false,
          LinkedIn: false,
          GitHub: false,
          Instagram: false,
          Extras: false,
          Email: false,
          Resume: false,
          DarkMode: false,
          Location: false,
          Navbar: false,
          SkillStack: false,
          Projects: false,
        });
        break;
      }
    }

    setTimeout(() => {
      updateLayout(navSelectedd, screenSize);
    }, 1000);
  };

  const gridItems = [
    { key: "About", component: <About isFade={componentFaded.About} setWhatsClicked={setWhatsClicked} handleClickAfter={handleClickAfter} handleClick={handleClickBefore} setCursorColor={setCursorColor} /> },
    { key: "Banner", component: <Banner /> },
    { key: "LinkedIn", component: <LinkedIn isFade={componentFaded.LinkedIn} setCursorColor={setCursorColor} /> },
    { key: "GitHub", component: <GitHub isFade={componentFaded.GitHub} setCursorColor={setCursorColor} /> },
    { key: "Instagram", component: <Instagram isFade={componentFaded.Instagram} setCursorColor={setCursorColor} /> },
    { key: "Extras", component: <ExtrasCollapsed isFade={componentFaded.Extras} setWhatsClicked={setWhatsClicked} handleClick={handleClickBefore} setCursorColor={setCursorColor} /> },
    { key: "Email", component: <Email isFade={componentFaded.Email} setCursorColor={setCursorColor} /> },
    { key: "Resume", component: <Resume isFade={componentFaded.Resume} setCursorColor={setCursorColor} /> },
    { key: "DarkMode", component: <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} setCursorColor={setCursorColor} /> },
    { key: "Location", component: <Location isFade={componentFaded.Location} darkMode={darkMode} /> },
    { key: "Navbar", component: <NavandButtons setDarkMode={setDarkMode} darkMode={darkMode} handleLayoutUpdate={handleLayoutUpdate} /> },
    { key: "SkillStack", component: <SkillStack isFade={componentFaded.SkillStack} /> },
    { key: "Projects", component: <Project isFade={componentFaded.Projects} setCursorColor={setCursorColor} /> },
  ];
  return (
    <>
      {isAnimating && (
        <AnimationScreen
          setIsAnimating={setIsAnimating}
          setShowGrid={setShowGrid}
          setShowExpandedAbout={setShowExpandedAbout}
          darkMode={darkMode}
        />
      )}
      {showExpandedAbout && <ExpandedAbout handleClickAfter={handleClickAfter} darkMode={darkMode} />}
      {showExtras && <ExpandedExtras handleClickAfter={handleClickAfter} darkMode={darkMode} />}

      <AnimatePresence>
        {showWelcomeScreen && <WelcomeScreen />}
      </AnimatePresence>
      {(showGrid && !showWelcomeScreen) && <CursorGradient cursorPos={cursorPos} darkMode={darkMode} Properties={cursorColor} />}
      <div className="w-screen h-screen backdrop-blur-2xl grayscale z-[500] hidden smartphone:fixed top-0 left-0"> </div>
      {showGrid && (

        <div id="MainCunt"
          className={` ${darkMode && "dark"} ubuntu relative grid content-stretch  grid-cols-12 gap-[2px] dark:bg-white/20   text-bg1 select-none curso r-none scroll-smooth`}
        >
          <div className="col-span-1 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl h-[90px]   xs:-[45px]  z-[3]"></div>
          <div className="col-span-10 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl h-[90px]  xs:-[45px]  z-[3]"></div>
          <div className="col-span-1 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl h-[90px]   xs:-[45px]  z-[3]"></div>
          <div className="col-span-1 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl  z-[3]"></div>
          <div className={`col-span-10 bg-bg1 `}>
            <ResponsiveGridLayout
              className="layout"
              layouts={{ lg: layouts.lg, md: layouts.lg, sm: layouts.sm, xxs: layouts.xs }}
              breakpoints={{ lg: 1200, md: 992, sm: 768, xxs: 480 }}
              cols={{ lg: 12, md: 12, sm: 6, xxs: 3 }}
              margin={[2, 2]}
              containerPadding={[0, 0]}
              rowHeight={45}
              isResizable={false}
              isDraggable={false}
              useCSSTransforms={true}
            >
              {gridItems.map((gridItem, index) => (
                <m.div
                  key={gridItem.key}
                  initial={{
                    opacity: 0
                  }}
                  animate={!showWelcomeScreen && {
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.3,  // Adjust duration to match the speed you want
                    delay: index * 0.05,  // Stagger the tiles for a cascading effect
                    ease: "easeInOut",  // Smooth easing for a more natural effect
                  }}
                  className={` ${(gridItem.key === "Email" || gridItem.key === "Instagram" || gridItem.key === "LinkedIn") && "smartphone:border-r border-white/5"} w-full h-full ${gridItem.key !== "Projects" ? " dark:bg-darkGray/90 backdrop-blur-xl dark:text-white bg-white/90" : ""}  flex justify-center items-center `}
                >
                  {gridItem.component}
                </m.div>
              ))}
            </ResponsiveGridLayout>
          </div>
          <div className="col-span-1 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl z-[3]"></div>
          <div className="col-span-1 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl h-[90px]  z-[3]"></div>
          <div className="col-span-10 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl h-[90px]  z-[3]"></div>
          <div className="col-span-1 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl h-[90px]  z-[3]"></div>
          <div className="col-span-1 bg-white/90 dark:bg-darkGray/90 backdrop-blur-2xl z-[3]"></div>

        </div>
      )}
      <button onClick={handleToTop} className="fixed right-1 bottom-3 z-[500] text-white/10 hover:text-white/40 transition-all"> <ArrowUp size={32} /></button>
    </>
  );
}

export default App;
