/* eslint-disable react/prop-types */

export default function ProjectSelector({ selectedProject, updateProject }) {
  //create an array for options
  let optionsArr = [
    "All",
    "Summarizer",
    "Chatbot",
    "Quiz",
    "Contact API",
    "e-commerce",
  ];

  //map the project data into options
  let optionsMap = optionsArr.map((item) => {
    return (
      <option key={item} value={item} className="project--option">
        {item}
      </option>
    );
  });

  return (
    <div className="project--dropdown">
      <select
        className="project--selector"
        value={selectedProject}
        onChange={(event) => updateProject(event.target.value)}
      >
        {optionsMap}
      </select>
    </div>
  );
}
