
import './CssFiles/App.css';

import Navbar from './Components/Navbar';
import Home from './Components/HeroSection/Home';
import About from './Components/HeroSection/About';
import Resume from './Components/HeroSection/skillSection/Resume';
import Footer from './Components/Footer';
import Project from './Components/HeroSection/ProjectSection/Project';
import ProjectHandler from './Components/HeroSection/ProjectSection/ProjectHandler';

function App() {

  return (
    <div className='bg-[#1E1E1E] text-[#d3d3d3] font-RobotoMono,sans-serif min-h-screen absolute'>
    <Navbar />
    <Home />
    <About />
    <Resume />
    <ProjectHandler />
    <Footer/>
    </div>
  );
}

export default App
