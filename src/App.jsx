import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Curriculum from "./pages/Curriculum";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/curriculum" element={<Curriculum />} />
    </Routes>
  )
}

export default App
