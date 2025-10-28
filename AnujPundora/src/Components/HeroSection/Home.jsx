import HomeAnimation from "../HomeAnimation";

function Home(){
    return(
        <div id="home" className="flex items-center justify-around pt-0  pr-0 p-15 ">
            <div id="hm-txt" className="flex-col justify-center space-y-15 items-center min-w-1/3 text-[#FFB606] font-extrabold text-5xl "> 
                    <h6 className="text-7xl">WELCOME!</h6>
                  
                    <span className=" font-bold  bg-linear-to-r from-yellow-500 to-white bg-clip-text text-transparent">
                        I ' m Anuj Pundora</span> 
                    
                   
            </div>
            <div id="hm-Animation" className="h-full w-2/3">
                <HomeAnimation />
            </div>
        </div>
    )
}
export default Home;