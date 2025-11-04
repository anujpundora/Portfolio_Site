import { useState } from "react";
import Filtering from "./Filtering.jsx";
import FilterBtn from "./FilterBtn.jsx";
import resume from "../../../assets/resume.png"
function Resume(){
    const [active,setActive] = useState("none")
    const [filter,setFilter]=useState("All");

    //Setting up the filter for showing intreseted Shkills only
    function clickHandler({type}){
        setFilter(type);
        setActive(type);
        console.log(type);
    }

    
    //Filtering the Skills
    
    return(
        
        <div id="resume" className=" flex-col gap-y-5  p-30">
        <h1 className=" text-8xl font-extrabold text-[#d3d3d3] pb-10">Resume</h1>
            <div id="filter" className=" flex justify-center gap-5 mb-10">
                <FilterBtn clickHandler={clickHandler} type = "All"/>
                <FilterBtn clickHandler={clickHandler} type = "WebDev"/>
                <FilterBtn clickHandler={clickHandler} type = "FrontEnd"/>
                <FilterBtn clickHandler={clickHandler} type = "BackEnd"/>
                <FilterBtn clickHandler={clickHandler} type = "AI and ML"/>
            </div>

        <div id="skills" className="flex flex-wrap gap-10">       

            <Filtering filter={filter}/>
            <div className=" w-full h-full mt-10 pb-0 pt-20 pl-20 p-40">
            <img src={resume} className=''/>
            </div>
                </div>

        </div>
       
    )
}
export default Resume;