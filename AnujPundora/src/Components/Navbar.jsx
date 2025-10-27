import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";

function Navbar(){
    return (
        <><nav id="Navbar" className=" flex justify-evenly p-5 font-bold text-xl">
            <a className=" ml-10 text-[#d3d3d3] font-extrabold">ANUJ PUNDORA</a>
            <div id="right-side" className="flex justify-evenly ml-auto mr-10 space-x-5">
                <a href="#home" className="  flex gap-1.5 text-[#d3d3d3]">
                    <FaHome className="text-xl  relative top-1"/>Home</a>
                <a href="#about" className="  flex gap-1.5 text-[#d3d3d3]">
                    <IoPerson className="relative top-1" />
                    About</a>
                <a href="#project" className="  flex gap-1.5 text-[#d3d3d3]">
                    <FaCode  className="relative top-1"/>
                    Projects</a>
                <a href="#resume" className="  flex gap-1.5 text-[#d3d3d3]">
                    <FaFileCode className="relative top-1"/>
                    Resume</a>
                <button className=" flex gap-3 relative bottom-1.5 p-2 pl-3  pr-3 border-2 border-gold-100 text-[#FFB606]">
                    <CgGitFork /> <FaStar /></button>
            </div>
        </nav>
        </>
    )
}
export default Navbar