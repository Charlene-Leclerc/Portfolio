import './App.css';
import EchoesOfDawn from './pages/game_projects/EchoesOfDawn';
import EuropMadness from './pages/game_projects/EuropMadness';
import Hyperbawl from './pages/game_projects/Hyperbawl';
import Kira from './pages/game_projects/Kira';
import AboutFullStack from './pages/AboutFullStack';
import GameProjects from './pages/game_projects/GameProjects';
import MainPage from './pages/MainPage';
import AboutGame from './pages/AboutGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebProjects from './pages/web_projects/WebProjects';
import ScrollToTop from './components/ScrollToTop';

function App() {



  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about-fullstack' element={<AboutFullStack />} />
        <Route path='/about-videogame' element={<AboutGame />} />
        <Route path='/game_projects' element={<GameProjects />} />
        <Route path='/europ-madness' element={<EuropMadness />} />
        <Route path='/echoes-of-dawn' element={<EchoesOfDawn />} />
        <Route path='/hyperbawl' element={<Hyperbawl />} />
        <Route path='/le-monde-de-kira' element={<Kira />} />
        <Route path='/web_projects' element={<WebProjects />} />
        <Route path='*' element={<MainPage />} />
      </Routes >
    </BrowserRouter >


  );
}

export default App;
