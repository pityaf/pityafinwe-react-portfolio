import './App.css';

import About from './components/About';
import Skill from './components/Skill';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Header</p>
        <Navbar />
      </header>
      <main className='App-main'>
        <p>Main</p>
        <About /> 
        <Skill />
        <Project />
        <Contact />
      </main>
      <footer className='App-footer'>
        <p>Footer</p>
        <Footer />
      </footer>
    </div>
  );
}
