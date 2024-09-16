import { LinkedinLogo, GithubLogo, InstagramLogo, Envelope } from "@phosphor-icons/react";
import PropTypes from 'prop-types';

export const LinkedIn = ({ setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-lnkin to-cyan-300", size: "w-4 h-4" });
    };
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    };

    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleExit}
            className="group w-full h-full p-2 grid place-content-center"
        >
            <a
                href="https://www.linkedin.com/in/mohd-bilal--"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full grid place-content-center group-hover:text-lnkin/90 group-hover:scale-95 transition-all duration-700"
            >
                <LinkedinLogo size={"96%"} weight="thin" />
            </a>
        </div>
    );
};

// Define prop types
LinkedIn.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
};

export const GitHub = ({ setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-gray-500 to-gray-200", size: "w-4 h-4" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    }
    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleExit}
            className="group w-full h-full p-2 grid place-content-center">
            <a
                href="https://github.com/mohd-bilal-exe"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full grid place-content-center"
            >
                <GithubLogo size={"96%"} weight="thin" className="group-hover:text-gray-500 group-hover:scale-95 transition-all  duration-700" />
            </a>
        </div>
    );
};
GitHub.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
};
export const Instagram = ({ setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-insta to-red-700", size: "w-4 h-4" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    }
    return (
        <div onMouseEnter={handleEnter}
            onMouseLeave={handleExit}
            className="group w-full h-full p-2 grid place-content-center" >
            <a

                href="https://www.instagram.com/mohd.bilal__/"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full grid place-content-center"
            >
                <InstagramLogo size={"96%"} weight="thin" className="group-hover:scale-95  group-hover:text-insta transition-all  duration-700" />
            </a></div>
    );
};
Instagram.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
};
GitHub.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
};
export const Email = ({ setCursorColor }) => {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-yellow-500 to-yellow-600", size: "w-4 h-4" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    }
    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleExit}
            className="group w-full h-full flex items-center justify-center p-2 "
        >
            <div className="w-2/3 relative block overflow-hidden whitespace-nowrap">
                <a href="mailto:mohammadbilal.mail@gmail.com" target="_blank">
                    <div className="w-full text-4xl flex justify-start  ml-2 font-thin Pally  h-10 overflow-hidden">
                        <div className="w-fit flex flex-col group-hover:-translate-y-10 transition-transform ease-out duration-200">
                            <h1 >E-Mail</h1>
                            <h1
                                className="text-xs font-normal tracking-wide  bg-gradient-to-br from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
                                Have a cool project on mind? <br />Drop a hello
                            </h1>
                        </div>

                    </div></a>
            </div>
            <div className="h-full w-1/3 grid place-content-center group-hover:text-yellow-500 group-hover:scale-95 transition-all  duration-700">
                <Envelope size={"96%"} weight="thin" />
            </div>
        </div>
    );
};
Email.propTypes = {
    setCursorColor: PropTypes.func.isRequired,
};