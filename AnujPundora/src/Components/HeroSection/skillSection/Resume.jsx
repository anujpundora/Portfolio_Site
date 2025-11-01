import { useState } from "react";
import Filtering from "./Filtering.jsx";
import FilterBtn from "./FilterBtn.jsx";
import Skills from "./Skills.jsx";

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




            {/* <Skills name="Java"/>
            <Skills name="React" />
            <Skills name="SpringBoot" />
            <Skills name="PostgreSQL" />
            <Skills name="JavaScript" />
            <Skills name="TailwindCSS" />
            <Skills name="Python"/>
            <Skills name="Git" />
            <Skills name="Dockers" />
            <Skills name="Kubernative" />
            <Skills name="Problem Solving" /> */}

            

            </div>

        </div>
        </>
    )
}
export default Resume;