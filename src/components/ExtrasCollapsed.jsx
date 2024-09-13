import { FlyingSaucer } from "@phosphor-icons/react";

export default function ExtrasCollapsed({ setWhatsClicked, handleClick, setCursorColor }) {
    const handleEnter = () => {
        setCursorColor({ color: "bg-gradient-to-br from-red-900 to-red-600 ", size: "w-4 h-4" });
    }
    const handleExit = () => {
        setCursorColor({ color: "bg-white", size: "w-2 h-2" });
    }
    return (

        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleExit}
            className="group w-full h-full flex items-center p-2" >
            <div className="w-full h-full   flex items-center cursor-pointer" onClick={() => {
                setWhatsClicked("Extras");
                handleClick()
            }}>
                <div className="w-1/2 text-4xl flex justify-start  ml-4 font-thin Pally  h-10 overflow-hidden">
                    <div className="w-fit flex flex-col group-hover:-translate-y-10 transition-transform ease-out duration-200">
                        <h1 >Extras</h1>
                        <h1 className="text-sm font-normal tracking-wide  bg-gradient-to-br from-red-500 to-red-300 text-transparent bg-clip-text">Take you there? Just click!</h1>
                    </div>

                </div>

                <FlyingSaucer size={"96%"} weight="thin" className="group-hover:text-red-900 group-hover:scale-95 transition-all  duration-700" />
            </div>

        </div>
    )
}