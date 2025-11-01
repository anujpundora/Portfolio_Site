import Skills from "./Skills"
function Filtering({filter}){
       
            switch (filter) {
                case "All":
                    return(<>
                    <Skills name="Java"/>
                    <Skills name="React" />
                    <Skills name="SpringBoot" />
                    <Skills name="PostgreSQL" />
                    <Skills name="JavaScript" />
                    <Skills name="TailwindCSS" />
                    <Skills name="Python"/>
                    <Skills name="Git" />
                    <Skills name="Dockers" />
                    <Skills name="Kubernative" />
                    <Skills name="Problem Solving" />
                </>)
                    break;
                case "AI and ML":
                    return(<>
                    <Skills name="Python"/>
                    <Skills name="Scikit-learn" />
                    <Skills name="TensorFlow" />
                    <Skills name="OpenCV" />
                    <Skills name="Pandas" />
                    <Skills name="NumPy" />
                    <Skills name="Matplotlib" />
                    </>)
                    break;
                case "WebDev":
                   return(<>
                    <Skills name="Python"/>
                    <Skills name="Scikit-learn" />
                    <Skills name="TensorFlow" />
                    <Skills name="OpenCV" />
                    <Skills name="Pandas" />
                    <Skills name="NumPy" />
                    <Skills name="Matplotlib" />
                    </>)
                    break;
                case "FrontEnd":
                    return(<>
                    <Skills name="Python"/>
                    <Skills name="Scikit-learn" />
                    <Skills name="TensorFlow" />
                    <Skills name="OpenCV" />
                    <Skills name="Pandas" />
                    <Skills name="NumPy" />
                    <Skills name="Matplotlib" />
                    </>)
                    break;
                case "BackEnd":
                    return(<>
                    <Skills name="Python"/>
                    <Skills name="Scikit-learn" />
                    <Skills name="TensorFlow" />
                    <Skills name="OpenCV" />
                    <Skills name="Pandas" />
                    <Skills name="NumPy" />
                    <Skills name="Matplotlib" />
                    </>)
                    break;
               
        } 
       
    }
    export default Filtering;