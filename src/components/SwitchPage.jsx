import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}
