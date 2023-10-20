import './App.css';
import EuropMadness from './pages/game_projects/EuropMadness';
import AboutFullStack from './pages/AboutFullStack';
import GameProjects from './pages/game_projects/GameProjects';
import MainPage from './pages/MainPage';
import AboutGame from './pages/AboutGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebProjects from './pages/WebProjects';
import ScrollToTop from './components/ScrollToTop';
import { baseUrl, gameProjectUrl, webProjectUrl } from './config';
import GamePortfolio from './pages/game_projects/GamePortfolio';
import { ECHOES_VIDEOS, HYPERBAWL_VIDEOS, KIRA_VIDEOS } from './models/projects-videos';
import { EchoesData, HyperbawlData, KiraData } from './models/projects-models';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={baseUrl} element={<MainPage />} />
        <Route path={`${baseUrl}/about-fullstack`} element={<AboutFullStack />} />
        <Route path={`${baseUrl}/about-videogame`} element={<AboutGame />} />
        {/*Portfolio video game*/}
        <Route path={`${baseUrl}/game_projects`} element={<GameProjects />} />
        <Route path={`${gameProjectUrl}/europ-madness`} element={<EuropMadness />} />
        <Route path={`${gameProjectUrl}/echoes-of-dawn`}
          element={<GamePortfolio
            TemplateData={EchoesData}
            videos={ECHOES_VIDEOS} />} />
        <Route path={`${gameProjectUrl}/hyperbawl`} element={<GamePortfolio
          TemplateData={HyperbawlData}
          videos={HYPERBAWL_VIDEOS} />} />
        <Route path={`${gameProjectUrl}/le-monde-de-kira`} element={<GamePortfolio
          TemplateData={KiraData}
          videos={KIRA_VIDEOS} />} />
        {/*Portfolio web*/}
        <Route path={`${webProjectUrl}`} element={<WebProjects />} />
        <Route path='*' element={<MainPage />} />
      </Routes >
    </BrowserRouter >


  );
}

export default App;
