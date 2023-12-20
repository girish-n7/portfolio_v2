import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectSelector from "./ProjectSelector";
import Social from "./Social";
import Menu from "./Menu";
import logo from "../assets/logo.png";

export default function Header() {
  let navigate = useNavigate();

  //manage state for project dropdown
  let [selectedProject, setProject] = useState("All projects");

  //manage state for menu
  let [selectedMenu, setMenu] = useState("Home");

  //handle project selection
  function updateProject(option) {
    setProject(option);
  }

  //handle menu selection
  function updateMenu(option) {
    setMenu(option);
  }

  return (
    <header>
      <div className="logo--container" onClick={() => navigate("/")}>
        <img className="logo" src={logo} />
        <p className="name">Girish</p>
      </div>
      <ProjectSelector
        selectedProject={selectedProject}
        updateProject={updateProject}
      />
      <div className="search"></div>
      <Social />
      <Menu selectedMenu={selectedMenu} updateMenu={updateMenu} />
    </header>
  );
}
