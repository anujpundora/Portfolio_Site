import { useState } from "react";
import Filtering from "./Filtering.jsx";
import FilterBtn from "./FilterBtn.jsx";
import Skills from "./Skills.jsx";
import resume from "../../../assets/resume.png"
function Resume(){

    const [filter,setFilter]=useState("All");

    //Setting up the filter for showing intreseted Shkills only
    function clickHandler({type}){
        setFilter(type);
        //debugging
        console.log(filter);
    }

    
    //Filtering the Skills
    
    return(
        <>
        <div id="resume" className=" flex-col gap-y-5  p-30">

        <div id="filter" className=" flex justify-center gap-5 mb-10">
            <FilterBtn clickHandler={clickHandler} type = "All"/>
            <FilterBtn clickHandler={clickHandler} type = "AI and ML"/>
            <FilterBtn clickHandler={clickHandler} type = "WebDev"/>
            <FilterBtn clickHandler={clickHandler} type = "FrontEnd"/>
            <FilterBtn clickHandler={clickHandler} type = "BackEnd"/>
        </div>

        <div id="skills" className="flex flex-wrap gap-10">       

            <Filtering filter={filter}/>
            <div className=" w-full h-full mt-10 pt-20 pl-20 p-40">
            <img src={resume} className=''/>
            </div>
                </div>

        </div>
        </>
    )
}
export default Resume;