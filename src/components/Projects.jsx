import ProjectCard from "./ProjectCard";
import data from "../data/data.json";

export default function Projects() {
  //map the data into card
  let projectMap = data.map((item) => {
    return <ProjectCard key={item.id} data={item} />;
  });

  return <div className="projects--container">{projectMap}</div>;
}
