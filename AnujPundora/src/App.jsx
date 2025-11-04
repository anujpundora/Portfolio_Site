
import './CssFiles/App.css';

import Navbar from './Components/Navbar';
import Home from './Components/HeroSection/Home';
import About from './Components/HeroSection/About';
import Resume from './Components/HeroSection/skillSection/Resume';
import Footer from './Components/Footer';
import ProjectHandler from './Components/HeroSection/ProjectSection/ProjectHandler';

function App() {
// bg-[#1E1E1E]
  return (
    <div className='bg-linear-to-b from-[#1E1E1E] to-[#1f1f1f] text-[#d3d3d3] font-RobotoMono,sans-serif min-h-screen absolute'>
    <Navbar />
    <Home />
    <About />
    <ProjectHandler />
    <Resume />
    <Footer/>
    </div>
  );
}

export default App
