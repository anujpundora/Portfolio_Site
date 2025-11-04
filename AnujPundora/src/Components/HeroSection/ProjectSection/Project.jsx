import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Project({tittle,desc,tchStk,gH,src}){
    const link = gH
    return(
        <>
        <div id="" className="">
             <Tilt
                    glareEnable={false}
                    glareMaxOpacity={0}
                    scale={1.01}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    transitionSpeed={150}
                    className="rounded-2xl border-2 border-[#FFB606] shadow-[0_0_40px_#FFB606] overflow-hidden"
                    >
            <div className="relative p-20 border-2 border-[#FFB606] shadow-[0_0_40px_#FFB606] text--[#d3d3d3] h-[400px]  w-full rounded-2xl">
               
           <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
            ></video>
            <div className="absolute inset-0 bg-black/65 "></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center space-y-10 h-full b ">
            <h1 className=" text-5xl text-white">
                {tittle}</h1>
            <p className=" text-xl"
                >{desc}</p>
            <div className="flex space-x-2.5">
                {tchStk.map((tech, i) => (
                    <div
                    key={i}
                    className="px-4 py-1 bg-[#2A2A2A99] rounded-3xl text-[#FFB606] border border-[#FFB606]"
                    >
                    {tech}
                    </div>
            ))}</div>
            <a id="github-link" href={link} className="flex gap-3 text-xl text-amber-300">
                <FaGithub className="mt-1" /> See on Github
            </a></div></div> 
            </Tilt>
            </div>
           
        </>
    )
}
export default Project;