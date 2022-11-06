import './App.css';

/* components */
import { Menu } from './components/Menu';
import { Works } from './components/Works';
import { About } from './components/About';

import { Container } from 'react-bootstrap';

import {
  Routes,
  Route,
} from 'react-router-dom';



export const App = () => {
  return (
    <div className='App'>

        <header className='App-header'>
          <Menu />
        </header>

      <main className='App-main'>
        <p>Main</p>
        <Routes>
            <Route path="/" element={<Works />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Works />} />
        </Routes>
      </main>

      <footer className='App-footer'>
        <p>Footer</p>
      </footer>
      
    </div>
  );
}
