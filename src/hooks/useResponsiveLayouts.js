import { useState } from "react";

const useResponsiveLayouts = () => {
  const initialLayouts = {
    lg: [
      { i: "About", x: 0, y: 2, w: 5, h: 7 },
      { i: "Banner", x: 0, y: 0, w: 7, h: 1, static: true },
      { i: "LinkedIn", x: 1, y: 9, w: 1, h: 2 },
      { i: "GitHub", x: 0, y: 9, w: 1, h: 2 },
      { i: "Instagram", x: 4, y: 11, w: 1, h: 2 },
      { i: "Extras", x: 0, y: 11, w: 4, h: 2 },
      { i: "Email", x: 2, y: 9, w: 3, h: 2 },
      { i: "SkillStack", x: 5, y: 9, w: 7, h: 6 },
      { i: "Resume", x: 8, y: 3, w: 4, h: 3 },
      { i: "DarkMode", x: 8, y: 6, w: 4, h: 2 },
      { i: "Location", x: 5, y: 2, w: 3, h: 5 },
      { i: "Navbar", x: 7, y: 0, w: 5, h: 1, static: true },
      { i: "Projects", x: 0, y: 13, w: 12, h: 18 },
    ], //My laptop
    md: [
      { i: "About", x: 0, y: 2, w: 5, h: 7 },
      { i: "Banner", x: 0, y: 0, w: 7, h: 1, static: true },
      { i: "LinkedIn", x: 1, y: 9, w: 1, h: 2 },
      { i: "GitHub", x: 0, y: 9, w: 1, h: 2 },
      { i: "Instagram", x: 4, y: 11, w: 1, h: 2 },
      { i: "Extras", x: 0, y: 11, w: 4, h: 2 },
      { i: "Email", x: 2, y: 9, w: 3, h: 2 },
      { i: "SkillStack", x: 5, y: 9, w: 7, h: 6 },
      { i: "Resume", x: 8, y: 3, w: 4, h: 3 },
      { i: "DarkMode", x: 8, y: 6, w: 4, h: 2 },
      { i: "Location", x: 5, y: 2, w: 3, h: 5 },
      { i: "Navbar", x: 7, y: 0, w: 5, h: 1, static: true },
      { i: "Projects", x: 0, y: 13, w: 12, h: 14 },
    ],
    sm: [
      { i: "About", x: 0, y: 2, w: 5, h: 6 },
      { i: "Banner", x: 0, y: 0, w: 7, h: 1 },
      { i: "LinkedIn", x: 0, y: 9, w: 1, h: 2 },
      { i: "GitHub", x: 1, y: 9, w: 1, h: 2 },
      { i: "Instagram", x: 0, y: 11, w: 1, h: 2 },
      { i: "Extras", x: 1, y: 11, w: 4, h: 2 },
      { i: "Email", x: 2, y: 9, w: 3, h: 2 },
      { i: "SkillStack", x: 5, y: 9, w: 7, h: 5 },
      { i: "Resume", x: 8, y: 3, w: 4, h: 3 },
      { i: "DarkMode", x: 8, y: 6, w: 4, h: 2 },
      { i: "Location", x: 5, y: 2, w: 3, h: 5 },
      { i: "Navbar", x: 7, y: 0, w: 5, h: 1, static: true },
      { i: "Projects", x: 0, y: 13, w: 3, h: 12 },
    ], //smartphone
    xs: [
      { i: "Navbar", x: 0, y: 0, w: 3, h: 1, static: true },
      { i: "Banner", x: 0, y: 1, w: 3, h: 1 },
      { i: "About", x: 0, y: 2, w: 3, h: 6 },
      { i: "SkillStack", x: 0, y: 8, w: 3, h: 5 },
      { i: "LinkedIn", x: 0, y: 13, w: 1, h: 2 },
      { i: "GitHub", x: 1, y: 13, w: 1, h: 2 },
      { i: "Email", x: 2, y: 13, w: 1, h: 2 },
      { i: "Instagram", x: 2, y: 15, w: 1, h: 2 },
      { i: "Extras", x: 0, y: 15, w: 2, h: 2 },
      { i: "Resume", x: 0, y: 13, w: 3, h: 3 },
      { i: "DarkMode", x: 8, y: 16, w: 4, h: 2 },
      { i: "Location", x: 5, y: 12, w: 3, h: 5 },
      { i: "Projects", x: 0, y: 10, w: 3, h: 12 },
    ],
  };

  const [layouts, setLayouts] = useState(initialLayouts);
  const updateLayout = (navSelectedd, screenSize) => {
    console.log(screenSize);
    if (screenSize > 1200) {
      switch (navSelectedd) {
        case "Everything else": {
          setLayouts((prevLayouts) => ({
            ...prevLayouts,
            ["lg"]: [
              { i: "Banner", x: 0, y: 0, w: 7, h: 1, static: true },
              { i: "Navbar", x: 7, y: 0, w: 5, h: 1, static: true },

              { i: "About", x: 0, y: 1, w: 5, h: 7 },
              { i: "Location", x: 5, y: 1, w: 3, h: 4 },

              { i: "Instagram", x: 8, y: 1, w: 1, h: 2 },
              { i: "Extras", x: 9, y: 1, w: 3, h: 2 },

              { i: "LinkedIn", x: 1, y: 9, w: 1, h: 2 },
              { i: "GitHub", x: 0, y: 9, w: 1, h: 2 },

              { i: "Email", x: 2, y: 9, w: 3, h: 2 },
              { i: "SkillStack", x: 5, y: 9, w: 7, h: 7 },
              { i: "Resume", x: 0, y: 10, w: 5, h: 2 },
              { i: "DarkMode", x: 8, y: 6, w: 4, h: 2 },

              { i: "Projects", x: 0, y: 13, w: 12, h: 18 },
            ],
          }));
          break;
        }
        case "Technologies": {
          setLayouts((prevLayouts) => ({
            ...prevLayouts,
            ["lg"]: [
              { i: "Banner", x: 0, y: 0, w: 7, h: 1, static: true },
              { i: "Navbar", x: 7, y: 0, w: 5, h: 1, static: true },

              { i: "SkillStack", x: 0, y: 1, w: 8, h: 6 }, // Adjusted next to Resume
              { i: "Resume", x: 8, y: 1, w: 4, h: 4 }, // Adjusted next to SkillStack
              { i: "DarkMode", x: 8, y: 4, w: 4, h: 2 }, // Placed below Resume
              { i: "Projects", x: 0, y: 10, w: 12, h: 18 }, // Projects placed below SkillStack and Resume

              { i: "About", x: 0, y: 24, w: 5, h: 5 },
              { i: "LinkedIn", x: 1, y: 31, w: 1, h: 2 },
              { i: "GitHub", x: 0, y: 31, w: 1, h: 2 },
              { i: "Instagram", x: 4, y: 33, w: 1, h: 2 },
              { i: "Extras", x: 0, y: 33, w: 4, h: 2 },
              { i: "Email", x: 2, y: 31, w: 3, h: 2 },
              { i: "Location", x: 5, y: 24, w: 7, h: 9 },
            ],
          }));
          break;
        }
        default: {
          setLayouts((prevLayouts) => ({
            ...prevLayouts,
            ["lg"]: [
              { i: "About", x: 0, y: 2, w: 5, h: 7 },
              { i: "Banner", x: 0, y: 0, w: 7, h: 1, static: true },
              { i: "LinkedIn", x: 1, y: 9, w: 1, h: 2 },
              { i: "GitHub", x: 0, y: 9, w: 1, h: 2 },
              { i: "Instagram", x: 4, y: 11, w: 1, h: 2 },
              { i: "Extras", x: 0, y: 11, w: 4, h: 2 },
              { i: "Email", x: 2, y: 9, w: 3, h: 2 },
              { i: "SkillStack", x: 5, y: 9, w: 7, h: 6 },
              { i: "Resume", x: 8, y: 3, w: 4, h: 3 },
              { i: "DarkMode", x: 8, y: 6, w: 4, h: 2 },
              { i: "Location", x: 5, y: 2, w: 3, h: 5 },
              { i: "Navbar", x: 7, y: 0, w: 5, h: 1, static: true },
              { i: "Projects", x: 0, y: 13, w: 12, h: 18 },
            ],
          }));
        }
      }
    } else if (screenSize > 768 && screenSize < 992) {
      console.log(navSelectedd, screenSize, 13);
    } else if (screenSize > 480 && screenSize < 768) {
      console.log(navSelectedd, screenSize, 14);
    }
  };
  return [layouts, updateLayout];
};

export default useResponsiveLayouts;
