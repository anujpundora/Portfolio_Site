import HomeAnimation from "../Animations/HomeAnimation.jsx";
import Typewriter from 'typewriter-effect';
function Home(){
    return(
        <div id="home" className=" flex flex-col md:flex-row  md:items-center justify-between md:pt-0  md:pr-0 md:p-15 md:pb-0 ">
            <div id="hm-txt" className="flex-col justify-center space-y-20 items-center max-w-1/3 text-[#FFB606] font-extrabold pt-15 pl-15 text-5xl "> 
                    <h6 className="text-5xl ">Launching ideas into the digital cosmos</h6>
                  
                    <span className=" font-bold  bg-linear-to-r from-[#FFB606] to-[#cba673] bg-clip-text text-transparent">
                        I'm Anuj Pundora</span>  
                    <div className=" text-xl mt-3  font-thin">                   
                    <Typewriter
                    options={{
                        strings: ['Web Developer', 'AI Enthusiast', 'Software Engineer','Tech Explorer', 'Coding. Debugging. Learning.'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 100,
                    }}
                    />
                    </div>
            </div>
            <div id="hm-Animation" className="h-full md:w-2/3 w-full">
                <HomeAnimation />
            </div>
        </div>
    )
}
export default Home;
