import Project from "./Project";
import { useTechStack } from "./TechStackContext";
function ProjectHandler(){
    const stacks = useTechStack();
    return (

        <div id="project" className="flex flex-col space-y-20 pt-30 pl-50 pr-50">
            <h1 className=" ml-[-100px] text-8xl font-extrabold">
                Projects</h1>
            <Project 
                tittle="AI-Powered Page Summarizer Chrome-ext" 
                desc="AI-driven Chrome Extension that generates concise summaries of web pages using the Gemini API, improving user productivity. " 
                tchStk={stacks.summarizer}
                gH="https://github.com/anujpundora/Page_Summarizing-Chrome-Extension" 
                src="/src/assets/IMG_3123.mp4"
            />
            <Project tittle="E-COMIFY" 
                desc="Developed a full-stack e-commerce platform with Spring Boot and React.js, implementing RESTful APIs, dynamic UI." 
                tchStk={stacks.ecomify} gH="https://github.com/anujpundora/ecom_project"
                src="/src/assets/vid.mp4"/>

            <Project tittle="Personal Portfolio Website" 
                desc="Built a responsive personal portfolio using React.js and Tailwind CSS, featuring project highlights and smooth UI interactions" 
                tchStk={stacks.portfolio} gH="www.youtube.com"
                src="/src/assets/portfolio.mp4"/>
        </div>
    )
}
export default ProjectHandler;