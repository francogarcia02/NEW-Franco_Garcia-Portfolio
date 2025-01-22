import './App.css';

import Navbar from './components/Navbar/Navbar';
import Presentation from './components/Presentation/Presentation';
import Experience from './components/Experience/Experience';
import Proyects from './components/Proyects/Proyects';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="bg-[#080808] min-h-screen">
        <Navbar/>
        <div className='flex flex-col justify-center items-center me-6 ms-6 lg:ms-64 lg:me-64'>
            <Presentation/>
            <Experience/>
            <Proyects/>
            <AboutMe/>
            <Skills/>
            <Contact/>
        </div>
    </div>
  );
}

export default App;
