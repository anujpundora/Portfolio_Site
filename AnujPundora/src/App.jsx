
import './CssFiles/App.css';

import Navbar from './Components/Navbar';
import Home from './Components/HeroSection/Home';
import About from './Components/HeroSection/About';
import Resume from './Components/HeroSection/skillSection/Resume';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='bg-[#1E1E1E] text-[#d3d3d3] min-h-screen absolute'>
    <Navbar />
    <Home />
    <About />
    <Resume />
    <Footer/>
    </div>
  );
}

export default App
