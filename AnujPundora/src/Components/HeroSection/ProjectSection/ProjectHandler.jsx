import Project from "./Project";
import { useTechStack } from "./TechStackContext";
function ProjectHandler(){
    const stacks = useTechStack();
    return (

        <div id="project" className="flex flex-col space-y-20 pl-20 pr-20">
            <Project 
                tittle="AI-Powered Page Summarizer Chrome-ext" 
                desc="AI-driven Chrome Extension that generates concise summaries of web pages using the Gemini API, improving user productivity. " 
                tchStk={stacks.summarizer}
                gH="www.youtube.com" 
                src="/src/assets/IMG_3123.mp4"
            />
            <Project tittle="Temp" 
            desc="THis is for testing " 
            tchStk={stacks.temp} gH="www.youtube.com"
             src="/src/assets/IMG_3123.mp4"/>
            <Project tittle="Temp" 
            desc="THis is for testing " 
            tchStk={stacks.temp} gH="www.youtube.com"
             src="/src/assets/IMG_3123.mp4"/>
        </div>
    )
}
export default ProjectHandler;