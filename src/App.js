import logo from './logo.svg';
import './App.css';
import './animate.css';

import { NavBar } from './components/Navbar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
// import { NewsLetter } from './components/NewsLetter';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ProjectCard/>
      <Contact/>
      <Footer/>
      {/* <NewsLetter/> */}
      
    </div>
  );
}

export default App;
 