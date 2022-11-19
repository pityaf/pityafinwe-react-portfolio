/* CSS */ 
import './App.css';

/* components */
import { Menu } from './components/Menu';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact'

/* bootstrap */
import { Container } from 'react-bootstrap';

/* routes */
import {
  Routes,
  Route,
} from 'react-router-dom';

export const App = () => {
  return (
    <div id='App'>
      <Container fluid className='no-pad'>

        <header className='App-header d-flex p-2'>
          <Container>
            <Menu />
          </Container>
        </header>

        <main className='App-main'>
          <Container>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Container>
        </main>

        <footer className='App-footer mt-5'>
          <Container>
            <Footer />
          </Container>
        </footer>

      </Container>
    </div>
  );
}
