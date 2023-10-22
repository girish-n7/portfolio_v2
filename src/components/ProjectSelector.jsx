/* eslint-disable react/prop-types */

import { useState } from "react";
import arrow from "../assets/up.svg";

export default function ProjectSelector({ selectedProject, updateProject }) {
  //manage state for options div
  let [optionsDiv, setOptionsDiv] = useState(false);

  //create an array for options
  let optionsArr = [
    "All",
    "Summarizer",
    "Chatbot",
    "Quiz",
    "Portfolio",
    "Contact API",
    "e-commerce",
  ];

  //map the project data into options
  let optionsMap = optionsArr.map((item) => {
    return (
      <p
        key={item}
        className="project--option"
        onClick={() => {
          setOptionsDiv((prevState) => !prevState);
          updateProject(item);
        }}
      >
        {item}
      </p>
    );
  });

  return (
    <div className="project--dropdown">
      <p className="project--selector">
        {selectedProject}{" "}
        <img
          className="arrow"
          src={arrow}
          style={{
            transform: `${optionsDiv ? "rotate(0deg)" : "rotate(180deg)"}`,
          }}
          onClick={() => setOptionsDiv((prevState) => !prevState)}
          alt="arrow"
        ></img>
      </p>
      {optionsDiv && (
        <div className="project--options__container">{optionsMap}</div>
      )}
    </div>
  );
}
