import './App.css';
// import '../assets/fonds/fonts.css'
import {Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import NotFound from "./Pages/NotFound/NotFound";
import HomePage from "./Pages/Home/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Achievements from "./Pages/Achievements/Achievements";
import Creations from "./Pages/Creations/Creations";
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
