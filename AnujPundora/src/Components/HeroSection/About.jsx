import abtImg from "../../assets/img.jpeg"
function About(){
    return(
        <>
        <div id="about" className=" flex items-center gap-10 pl-30 pr-30 text-2xl text-[#d3d3d3] ">
            <div id="abt-txt" className="flex-col space-y-5 w-3/4 "> 
                <h1 className='text-8xl font-extrabold '>About me</h1>
                <p>Hi, I’m <span className=' text-[#FFB606]'>Anuj Pundora</span>- a tech enthusiast who loves exploring everything from<span className=' text-[#FFB606]'> web development to AI.</span> I enjoy building projects that connect creativity with logic, whether it’s designing smooth user experiences or working on the backend that powers them. I’m always curious to learn new technologies, take on fresh challenges, and grow through every opportunity the IT world offers.</p>
                <p><span className=' text-[#FFB606]'>I’m a Software Developer</span> with hands-on experience across both <span className=' text-[#FFB606]'>frontend and backend development.</span> I work with <span className=' text-[#FFB606]'>React, Java, Spring Boot, and PostgreSQL</span> to build reliable, scalable, and user-focused applications.I enjoy learning new technologies and adapting quickly to solve diverse software challenges.</p>  
                <p>My interests evolve with my environment, but right now <span className=' text-[#FFB606]'>I’m deeply engaged in Web Development, AI/ML</span>, and exploring areas like DevOps. I’m fascinated by how these fields connect — from creating intuitive web applications to building intelligent systems that <span className=' text-[#FFB606]'>solve real-world problems.</span> I enjoy experimenting, learning new tools, and staying updated with emerging technologies in the broader software ecosystem.</p>
                <p>I’m currently pursuing a <span className=' text-[#FFB606]'>B.Tech in Computer Science</span>, now in my 7th semester. My studies have given me a <span className=' text-[#FFB606]'>solid foundation in programming, data structures, and software development</span> principles. Alongside academics, I focus on practical learning through projects and exploring areas like web technologies and AI to strengthen my technical skills.</p>
                <p>Outside of coding, I enjoy activities that keep me curious and balanced — playing chess to sharpen my strategic thinking, listening to music to relax and stay inspired, and playing cricket for teamwork and focus. These hobbies help me stay creative and disciplined both inside and outside the tech world.</p>
                <p>If you’d like to connect or learn more about my work, feel free to reach out on <span className=' text-[#FFB606]'>LinkedIn </span>or check out my projects on GitHub. I’m always open to discussions, collaborations, and new opportunities to learn and grow.</p>
            </div> 
            <div id="abt-imp" className=" text-amber-50  outline-4 outline-[#8a2be2] w-1/4">
                <img src={abtImg} className=''/>
            </div>
        </div>
        </>
    )
}
export default About;