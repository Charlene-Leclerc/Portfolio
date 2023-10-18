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
import { baseUrl, projectUrl } from './config';


function App() {



  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>
        <Route path={baseUrl} element={<MainPage />} />
        <Route path={`${baseUrl}/about-fullstack`} element={<AboutFullStack />} />
        <Route path={`${baseUrl}/about-videogame`} element={<AboutGame />} />
        <Route path={`${baseUrl}/game_projects`} element={<GameProjects />} />
        <Route path={`${projectUrl}/europ-madness`} element={<EuropMadness />} />
        <Route path={`${projectUrl}/echoes-of-dawn`} element={<EchoesOfDawn />} />
        <Route path={`${projectUrl}/hyperbawl`} element={<Hyperbawl />} />
        <Route path={`${projectUrl}/le-monde-de-kira`} element={<Kira />} />
        <Route path={`${baseUrl}/web_projects`} element={<WebProjects />} />
        <Route path='*' element={<MainPage />} />
      </Routes >
    </BrowserRouter >


  );
}

export default App;
