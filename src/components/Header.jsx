import { useNavigate } from "react-router-dom";
import ProjectSelector from "./ProjectSelector";
import { useState } from "react";

export default function Header() {
  let navigate = useNavigate();

  //manage state for project dropdown
  let [userSelection, setSelection] = useState("Home");

  //handle selection change
  function updateSelection(option) {
    setSelection(option);
  }

  return (
    <header>
      <div className="logo--container" onClick={() => navigate("/")}>
        <div className="logo">G</div>
        <p className="name">Girish</p>
      </div>
      <ProjectSelector
        userSelection={userSelection}
        updateSelection={updateSelection}
      />
    </header>
  );
}
