import { DownloadSimple, Eye } from "@phosphor-icons/react";
import PropTypes from 'prop-types';
export default function Resume({ setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br  from-blue-500 to-purple-600", size: "w-2 h-2" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    }
    const element = document.getElementById('ReSec');

    const resHeight = element && element.offsetHeight;
    const iconSize = resHeight > 137 ? 50 : 40
    return (
        <section id='ReSec' className="p-4 w-full h-full flex gap-2 justify-between ">
            <div id="resumeHeading" className="flex flex-col justify-center w-1/2 h-full ">
                <h5 className={`text-xs font-light`}>2024 </h5>
                <h1 className={`text-4xl font-semibold Pally`}>Resume</h1>
            </div>
            <div id="resumeButton" className={` w-1/2 h-full flex ${resHeight <= 91 ? "flex-row" : "flex-col"} gap-4 justify-center items-center`}>
                <a href="/resume.pdf" download="resume.pdf" className={`w-full h-1/2 p-1 flex justify-center items-center text-xs font-light `}>
                    <DownloadSimple size={iconSize} onMouseEnter={handleEnter}
                        onMouseLeave={handleExit} weight="light" />
                </a>
                <button className={`w-full h-1/2 p-1 flex justify-center items-center text-xs font-light `}>
                    <Eye size={iconSize} onMouseEnter={handleEnter}
                        onMouseLeave={handleExit} weight="light" />
                </button>
            </div>
        </section>
    )
}
Resume.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
};