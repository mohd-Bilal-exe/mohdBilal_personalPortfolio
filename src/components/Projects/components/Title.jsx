import { Code, ListChecks } from "@phosphor-icons/react";
import { Poetica, VerbiAi } from "../../Svgs";
import PropTypes from 'prop-types';
export default function Title({ isFade }) {
    return (
        <div key="Heading" className={`w-full h-full flex items-center justify-between text-2xl font-extralight pl-4 my-auto uppercase text-white Pally ${isFade && "grayscale opacity-10"} transition-all duration-300`}>
            <h1>Projects</h1>
            <span className="h-full flex items-center gap-2 p-1">
                <VerbiAi />
                <ListChecks size={"80%"} weight={"duotone"} />
                <Code size={"80%"} />
                <Poetica />
            </span>
        </div>
    )
}
Title.propTypes = {
    isFade: PropTypes.bool.isRequired
};
