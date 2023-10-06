import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import data from "../data/data.json";
import back from "../assets/back.svg";

export default function Projects() {
  let navigate = useNavigate();
  //map the data contents into individual cards
  let projectMap = data.map((item) => {
    return <ProjectCard key={item.id} data={item} />;
  });

  //manage state for filter
  let [filter, setFilter] = useState("All");

  //create array for filter
  let filterArr = ["All", "Full stack", "Frontend only", "Backend only"];

  //map the array
  let filterMap = filterArr.map((item) => {
    return (
      <p
        key={item}
        className={`filter ${filter === item ? "active" : ""}`}
        onClick={() => setFilter(item)}
      >
        {item}
      </p>
    );
  });

  return (
    <div className="project--container">
      <div className="filter--container">
        <img
          className="back"
          src={back}
          alt="back"
          onClick={() => navigate(-1)}
        ></img>
        {filterMap}
      </div>
      <div className="card--container">{projectMap}</div>
    </div>
  );
}
