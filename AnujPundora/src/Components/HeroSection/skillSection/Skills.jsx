function Skills({name , isActive, onClick}){
    return(
        <div id="resume" className="">
       
            <button 
                    onClick={onClick}
                    className={"flex items-center justify-center bg-[#2A2A2A99] border-2 h-10  border-[#2A2A2A] pl-5 pr-5 p-3 text-[#d3d3d3] font-extrabold text-center rounded-2xl" }>
                {name}
            </button>
        </div>
   )
}
export default Skills;