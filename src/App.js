import './App.css';
import {Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
      <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route Path="*" element={<NotFound/>} />
    </Routes>
        </>
  );
}

export default App;
