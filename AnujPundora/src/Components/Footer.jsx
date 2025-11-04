import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
function Footer(){
    return (
       <div className=" flex justify-center items-center  h-100">
            <div id="contact-container"
                className=" flex flex-col justify-center items-center h-3/5 w-2/5 bg-[#2E2E2E] border border-amber-300 rounded-2xl space-y-8 p-10">
                    <p className=" font-extrabold bg-linear-to-r from-amber-700 to-orange-200 text-4xl bg-clip-text text-transparent">
                        FIND ME ON
                    </p>
                    <p className=" text-xl">
                        Let’s collaborate or stay in touch.</p>
                
            
            <div id="links" className="flex font-extrabold text-xl gap-2.5">
                <a href="https://github.com/anujpundora"><FaGithub /></a>
                <a href="www.linkdin.com/in/Anuj-pundora"><FaLinkedin /></a>
                <a href=""><FaGlobe /></a>
                <a href="mailto:youremail@gmail.com"><FaGoogle /></a>
            </div>
            </div>
       </div>
    ) 
}
export default Footer;