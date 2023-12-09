import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Misc from "./Misc";
import Error from "./Error";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/misc" element={<Misc />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
