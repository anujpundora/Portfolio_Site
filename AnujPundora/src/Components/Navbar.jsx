import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";


function Navbar(){
    //For blur on scroll functionality

    const[scrolled ,setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    //For adding shadow on hover
    const[hover,setHover] = useState(0)
    //For on click color change
    const[click,setClick]=useState(0)
    return (
        <nav id="Navbar" className={` fixed flex pt-7.5 w-full justify-evenly p-5 font-bold text-xl z-50
         ${scrolled ? "backdrop-blur-md bg-[#0f0f0f80] shadow-md" : "bg-transparent"}`}>
            <a id="logo" className=" ml-10 text-[#d3d3d3] font-extrabold">ANUJ PUNDORA</a>
            <div id="links" className="flex justify-evenly ml-auto mr-10 space-x-5">
                <a href="#home" 
                    onClick={()=>{setClick(1)}}
                    onMouseEnter={()=>{setHover(1)}}
                    onMouseLeave={()=>{setHover(0)}}
                    className={`flex gap-1.5 
                                ${click === 1 ?"text-amber-300":"text-[#d3d3d3] "  }`}
                    style = {{
                        textShadow : hover === 1 ? "-20px 0 30px rgba(255,182,6,1)":"none",
                    }}>
                    <FaHome className="text-xl  relative top-1"/>Home</a>
                <a href="#about" 
                    onMouseEnter={()=>{setHover(2)}}
                    onMouseLeave={()=>{setHover(0)}}
                    onClick={()=>{setClick(2)}}
                    className={`flex gap-1.5 
                                ${click === 2 ?"text-amber-300":"text-[#d3d3d3] "  }`}
                    style = {{
                        textShadow : hover === 2 ? "-20px 0 30px rgba(255,182,6,1)":"none",
                    }}>
                    <IoPerson className="relative top-1" />
                    About</a>
                <a href="#project"
                    onMouseEnter={()=>{setHover(3)}}
                    onMouseLeave={()=>{setHover(0)}} 
                    onClick={()=>{setClick(3)}}
                    className={`flex gap-1.5 
                                ${click === 3 ?"text-amber-300":"text-[#d3d3d3] "  }`}
                    style = {{
                        textShadow : hover === 3 ? "-20px 0 30px rgba(255,182,6,1)":"none",
                    }}>
                    <FaCode  className="relative top-1"/>
                    Projects</a>
                <a href="#resume" 
                    onMouseEnter={()=>{setHover(4)}}
                    onMouseLeave={()=>{setHover(0)}}
                    onClick={()=>{setClick(4)}}
                    className={`flex gap-1.5 
                                ${click === 4 ?"text-amber-300":"text-[#d3d3d3] "  }`}
                    style = {{
                        textShadow : hover === 4 ? "-20px 0 30px rgba(255,182,6,1)":"none",
                    }}>
                    <FaFileCode className="relative top-1"/>
                    Resume</a>
                
                <a
                    href="https://github.com/anujpundora/Portfolio_Site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex gap-5 relative bottom-1.5 p-2  pr-3 border-2 border-gold-100 text-[#FFB606] hover:bg-[#FFB606] hover:text-[#1E1E1E] transition-all duration-300">
                    <CgGitFork /> <FaStar /></a>
            </div>
        </nav>

    )
}
export default Navbar