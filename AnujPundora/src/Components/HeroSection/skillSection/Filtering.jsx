
import Skills from "./Skills"
function Filtering({filter}){
      
  
const skillMap = {
  All: [
    "Java", "React", "SpringBoot", "PostgreSQL", "JavaScript",
    "TailwindCSS", "Python", "Git", "Docker", "Kubernetes", "Problem Solving",
    "Node.js", "Express.js", "HTML", "CSS", "REST APIs", "GraphQL",
    "AWS", "Azure", "CI/CD", "Jest", "Next.js"
  ],
  "AI and ML": [
    "Python", "Scikit-learn", "TensorFlow", "OpenCV", "Pandas", "NumPy",
    "Matplotlib", "Keras", "PyTorch", "Seaborn", "Natural Language Processing",
    "Computer Vision", "Jupyter Notebook", "Data Analysis", "Data Visualization"
  ],
  WebDev: [
    "React", "JavaScript", "TailwindCSS", "SpringBoot", "PostgreSQL",
    "Node.js", "Express.js", "HTML", "CSS", "REST APIs", "GraphQL"
  ],
  FrontEnd: [
    "React", "JavaScript", "TailwindCSS", "HTML", "CSS", "Next.js", "Redux", "Framer Motion"
  ],
  BackEnd: [
    "SpringBoot", "PostgreSQL", "Java", "Git", "Node.js", "Express.js", "MongoDB", "Redis", "GraphQL"
  ],
  DevOps: [
    "Docker", "Kubernetes", "CI/CD", "AWS", "Azure", "Terraform", "GitHub Actions"
  ],
  "Java Full-Stack": [
    "Java", "SpringBoot", "Spring Security", "Hibernate", "JPA",
    "PostgreSQL", "MySQL", "JavaScript", "React", "TailwindCSS",
    "HTML", "CSS", "REST APIs", "GraphQL", "Git", "Docker", "Kubernetes",
    "CI/CD", "AWS", "Unit Testing", "Problem Solving"
  ]
};
    const selectedSkills = skillMap[filter];
    return(
        <div className="flex flex-wrap gap-10">

            {selectedSkills.map((name)=>(
                <Skills 
                  key={name}
                  name = {name} />
        ))}
        </div>
    )
    }
    export default Filtering;