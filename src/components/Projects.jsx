import data from "../data/data.json";

export default function Projects() {
  //map the data contents into individual cards
  let projectMap = data.map((item) => {
    return <p key={item.id}>{item.name}</p>;
  });
  return <div className="project--container">{projectMap}</div>;
}
