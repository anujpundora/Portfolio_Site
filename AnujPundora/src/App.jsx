
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/HeroSection/Home';
import About from './Components/HeroSection/About';
import Resume from './Components/HeroSection/resume';
function App() {

  return (
    <div className='bg-[#1E1E1E] text-[#d3d3d3] min-h-screen '>
    <Navbar />
    <Home />
    <About />
    <Resume />
    </div>
  );
}

export default App
