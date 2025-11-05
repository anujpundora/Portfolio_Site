import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa"; // Copyright
function Footer(){
    return (
       <div className=" flex flex-col justify-between items-center pt-8 bg-linear-to-b from-[#1A1A1A] to-[#2b2929] border-t-2  border-amber-300  h-100">
                
                <div id="contact-container"
                className=" flex flex-col justify-center items-center mt-8 h-3/5 w-2/5 bg-[#2E2E2E] border border-amber-300 rounded-2xl space-y-8 p-10">
                    <p className=" font-extrabold bg-linear-to-r from-amber-700 to-orange-200 text-4xl bg-clip-text text-transparent">
                        FIND ME ON
                    </p>
                    <p className=" text-xl">
                        Let’s collaborate or stay in touch.</p>
                
            
                <div id="links" className="flex font-extrabold text-3xl gap-5 text-center">
                    <a href="https://github.com/anujpundora"
                            target="_blank"
                             rel="noopener noreferrer"><FaGithub /></a>
                    <a href="http://www.linkedin.com/in/anuj-pundora"
                            target="_blank"
                            rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href=""
                            target="_blank"
                            rel="noopener noreferrer"><FaGlobe /></a>
                    <a href="mailto:youremail@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"><FaGoogle /></a>
                </div>
            </div>
            {/* lower part that includes credit */}
                <div id="lower-part" className=" flex  pb-0 p-10  mb-5 w-full justify-between text-xl ">
                    <div id="bottom-left" className="flex gap-2.5 ">
                        <p className=" text-xl font-thin">Developed By </p>  
                            <a href="http://www.linkedin.com/in/anuj-pundora"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-xl font-extrabold text-blue-500 ">  
                                ME</a>
                            <p>With &lt;3</p>
                    </div>
                    <div id="credit" className="flex gap-2 text-center spacing" >
                        <FaRegCopyright className="mt-1"/><p>2025 Anuj pundora</p>
                    </div>
                    
                        <div id="links" className="flex font-extrabold mt-1 gap-5 text-center">
                            <a href="https://github.com/anujpundora"
                                    target="_blank"
                                    rel="noopener noreferrer"><FaGithub /></a>
                            <a href="http://www.linkedin.com/in/anuj-pundora"
                                    target="_blank"
                                    rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href=""
                            target="_blank"
                            rel="noopener noreferrer"><FaGlobe /></a>
                            <a href="mailto:youremail@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"><FaGoogle /></a>
                        </div>
                </div>
            </div>
       
    ) 
}
export default Footer;