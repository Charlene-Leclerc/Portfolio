import './App.css';
import EchoesOfDawn from './pages/game-projects/EchoesOfDawn';
import EuropMadness from './pages/game-projects/EuropMadness';
import Hyperbawl from './pages/game-projects/Hyperbawl';
import Kira from './pages/game-projects/Kira';
import AboutFullStack from './pages/AboutFullStack';
import GameProjects from './pages/game-projects/GameProjects';
import MainPage from './pages/MainPage';
import AboutGame from './pages/AboutGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import WebProjects from './pages/WebProjects';
import ScrollToTop from './components/ScrollToTop';

function App() {



  return (
    <BrowserRouter>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/about-fullstack' element={<AboutFullStack />} />
        <Route path='/about-videogame' element={<AboutGame />} />

        <Route path='/game_projects' element={<GameProjects />} />
        <Route path='/game_projects/europ-madness' element={<EuropMadness />} />
        <Route path='/game_projects/echoes-of-dawn' element={<EchoesOfDawn />} />
        <Route path='/game_projects/hyperbawl' element={<Hyperbawl />} />
        <Route path='/game_projects/le-monde-de-kira' element={<Kira />} />

        <Route path='/web_projects' element={<WebProjects />} />
        <Route path='*' element={<MainPage />} />
      </Routes >
    </BrowserRouter >


  );
}

export default App;
