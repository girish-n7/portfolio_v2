import { Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
