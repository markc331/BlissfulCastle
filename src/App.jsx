import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Code from "./pages/Code"
import Curriculum from "./pages/Curriculum";
import StandBy from "./components/StandBy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/code" element={<Code />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/standby" element={<StandBy/>} />
    </Routes>
  )
}

export default App
