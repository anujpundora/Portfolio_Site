function FilterBtn({type , clickHandler}){
return(
    <button 
    onClick={()=> {clickHandler({type})}}
    className=" bg-[#2A2A2A99] border-2 border-[#2A2A2A] hover:border-[#2A2A2A] hover:scale-105 hover:shadow-[0_0_10px_#FFD700] hover:text-[#FFB606] transition-shadow duration-300 font-extrabold border-black-200 pl-5 pr-5 p-3  rounded-2xl">
        {type}
    </button>
)
}
export default FilterBtn;