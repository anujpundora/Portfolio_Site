import { useState } from "react";

function FilterBtn({type , clickHandler , isActive}){
    
return(
    <button 
    onClick={()=> {
        clickHandler({type})
      
    }}
    className={` bg-[#2A2A2A99] border-2 border-[#2A2A2A] hover:border-[#2A2A2A] hover:scale-105 hover:shadow-[0_0_10px_#FFD700] transition-shadow duration-300 font-extrabold border-black-200 pl-5 pr-5 p-3  rounded-2xl
        ${isActive
          ? "bg-[#FFB606] text-[#1E1E1E] "
          : "bg-[#2A2A2A99] text-[#FFB606] border-[#FFB606]"
        }
    `}>
        {type}
    </button>
)
}
export default FilterBtn;