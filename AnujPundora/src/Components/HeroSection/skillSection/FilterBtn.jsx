function FilterBtn({type , clickHandler}){
return(
    <button 
    onClick={()=> {clickHandler({type})}}
    className=" border-2  font-extrabold border-[#FFB606] pl-5 pr-5 p-3  rounded-2xl">
        {type}
    </button>
)
}
export default FilterBtn;