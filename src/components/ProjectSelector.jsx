/* eslint-disable react/prop-types */

export default function ProjectSelector({ userSelection, updateSelection }) {
  //create an array for options
  let optionsArr = [
    "Home",
    "Summarizer",
    "Chatbot",
    "Quiz",
    "Contact API",
    "e-commerce",
  ];

  //map the project data into options
  let optionsMap = optionsArr.map((item) => {
    return <option key={item}>{item}</option>;
  });

  return (
    <div className="project--dropdown">
      <select
        className="project--selector"
        value={userSelection}
        onChange={(event) => updateSelection(event.target.value)}
      >
        {optionsMap}
      </select>
    </div>
  );
}
