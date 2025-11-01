function FilterBtn({type , clickHandler}){
return(
    <button 
    onClick={()=> {clickHandler({type})}}
    className=" border-2 hover:border-[#8a2be2] hover:scale-105 ease-in-out hover:text-[#FFB606]  font-extrabold border-black-200 pl-5 pr-5 p-3  rounded-2xl">
        {type}
    </button>
)
}
export default FilterBtn;