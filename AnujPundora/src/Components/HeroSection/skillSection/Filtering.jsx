import Skills from "./Skills"
function Filtering({filter}){
       
    const skillMap={
        All: [
      "Java", "React", "SpringBoot", "PostgreSQL", "JavaScript",
      "TailwindCSS", "Python", "Git", "Docker", "Kubernetes", "Problem Solving"
    ],
    "AI and ML": [
      "Python", "Scikit-learn", "TensorFlow", "OpenCV", "Pandas", "NumPy", "Matplotlib"
    ],
    WebDev: [
      "React", "JavaScript", "TailwindCSS", "SpringBoot", "PostgreSQL"
    ],
    FrontEnd: [
      "React", "JavaScript", "TailwindCSS"
    ],
    BackEnd: [
      "SpringBoot", "PostgreSQL", "Java", "Git"
    ]
    }
    const selectedSkills = skillMap[filter];
    return(
        <div className="flex flex-wrap gap-10">
            {selectedSkills.map((name)=>(
                <Skills key={name} name = {name} />
        ))}
        </div>
    )
    }
    export default Filtering;