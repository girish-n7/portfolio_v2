import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Misc from "./Misc";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/misc" element={<Misc />} />
    </Routes>
  );
}
