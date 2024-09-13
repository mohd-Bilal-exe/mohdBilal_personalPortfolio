import { Code, ListChecks } from "@phosphor-icons/react";
import { Poetica, VerbiAi } from "../../Svgs";

export default function Title() {
    return (
        <div key="Heading" className="w-full h-full flex items-center justify-between text-2xl font-extralight pl-4 my-auto uppercase text-white Pally">
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