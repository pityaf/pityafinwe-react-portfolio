import './App.css';

import { Container } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom';


import { Menu } from '../Menu/Menu'
import { Portfolio } from '../Portfolio/Portfolio';
import { Description } from '../Description/Description'
import { Footer } from '../Footer/Footer';

import { ScrollToTop } from '../../util/ScrollToTop/ScrollToTop';

import { ITSProjectInfo } from '../ProjectInfo/ProjectInfo';
import { PersonalProjectInfo } from '../ProjectInfo/ProjectInfo';

export const App = () => {

  return (
    <div id='App'>
      <Container fluid>

      <ScrollToTop />
      
        <header className="App-header d-flex p-2">
          <Container>
            <Menu />
          </Container>
        </header>

        <section className='App-main'>
          <Routes>
            {/** All projects */}
            <Route path='/' element={<Portfolio />} />  

            {
              PersonalProjectInfo.map(element => <Route path={ element.url } element={ <Description info={ element } /> } />)
            }

            {
              ITSProjectInfo.map(element => <Route path={ element.url } element={ <Description info={ element } /> } />)
            }

          </Routes>
        </section>

        <footer className="App-footer mt-5">
          <Container>
            <Footer />
          </Container>
        </footer>

      </Container>      
    </div>
  );
}
