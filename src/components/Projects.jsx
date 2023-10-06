import ProjectCard from "./ProjectCard";
import data from "../data/data.json";

export default function Projects() {
  //map the data contents into individual cards
  let projectMap = data.map((item) => {
    return <ProjectCard key={item.id} data={item} />;
  });
  return <div className="project--container">{projectMap}</div>;
}
