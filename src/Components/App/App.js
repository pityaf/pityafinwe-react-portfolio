import './App.css';

import { Container } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom';


import { Menu } from '../Menu/Menu'
import { Portfolio } from '../Portfolio/Portfolio';
import { Description } from '../Description/Description'
import { Footer } from '../Footer/Footer';

import { ScrollToTop } from '../../util/ScrollToTop/ScrollToTop';

import { projectInfo } from '../ProjectInfo/ProjectInfo';

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

            {/** Personal Brand */}
            <Route path={ projectInfo[0].url } element={ <Description info={ projectInfo[0] } /> } /> 
            {/** Paolo Cantoreggi Portfolio */}
            <Route path={ projectInfo[1].url } element={ <Description info={ projectInfo[1] } /> } /> 
            {/** .Comanda */}
            {/*<Route path={ projectInfo[2].url } element={ <Description info={ projectInfo[2] } /> } /> */}
            {/** First portfolio project codecademy */}
            <Route path={ projectInfo[3].url } element={ <Description info={ projectInfo[3] } /> } />
            {/** 3D tower scene */}
            <Route path={ projectInfo[4].url } element={ <Description info={ projectInfo[4] } /> } /> 
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
