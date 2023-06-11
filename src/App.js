import './App.css';
// import '../assets/fonds/fonts.css'
import {Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/Home/HomePage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Achievements from "./pages/Achievements/Achievements";
import Creations from "./pages/Creations/Creations";
function App() {
  return (
      <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/about-me" element={<AboutMe/>} />
      <Route path="/achievements" element={<Achievements/>} />
      <Route path="/creations" element={<Creations/>} />
      <Route Path="*" element={<NotFound/>} />
    </Routes>
        </>
  );
}

export default App;
