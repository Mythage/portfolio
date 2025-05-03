import './App.css';
// import '../assets/fonds/fonts.css'
import {Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import NotFound from "./components/NotFound/NotFound";
import HomePage from "./components/Home/HomePage";
import AboutMe from "./components/AboutMe/AboutMe";
import Achievements from "./components/Achievements/Achievements";
import Creations from "./components/Creations/Creations";
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
