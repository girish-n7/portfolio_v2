import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import data from "../data/data.json";
import back from "../assets/back.svg";

export default function Projects() {
  let navigate = useNavigate();

  //manage state for filter
  let [projectFilter, setProjectFilter] = useState("All");

  //create array for filter
  let filterArr = ["All", "Full stack", "Frontend only", "Backend only"];

  //map the array
  let filterMap = filterArr.map((item) => {
    return (
      <p
        key={item}
        className={`filter ${projectFilter === item ? "active" : ""}`}
        onClick={() => setProjectFilter(item)}
      >
        {item}
      </p>
    );
  });

  //filter data based on user selection
  //use ternary operation to set data if "all" seleted or filter if other filter is selected
  let dataArr =
    projectFilter === "All"
      ? data
      : data.filter((item) => item.type === projectFilter);

  //map the data contents into individual cards
  let projectMap = dataArr.map((item) => {
    return <ProjectCard key={item.id} data={item} />;
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
