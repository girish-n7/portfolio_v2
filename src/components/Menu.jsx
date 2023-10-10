/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/up.svg";

export default function Menu({ selectedMenu, updateMenu }) {
  let navigate = useNavigate();

  //manage state for menu div
  let [menuDiv, setMenuDiv] = useState(false);

  //create menu array
  let menuArr = [
    { title: "Home", route: "/" },
    { title: "Miscellaneous", route: "/misc" },
  ];

  //map the array into options
  let menuMap = menuArr.map((item) => {
    return (
      <p
        key={item.title}
        className="project--option"
        onClick={() => {
          setMenuDiv((prevState) => !prevState);
          updateMenu(item.title);
          navigate(`${item.route}`);
        }}
      >
        {item.title}
      </p>
    );
  });

  //reuse styles from project dropdown

  return (
    <div className="project--dropdown">
      <p className="project--selector">
        {selectedMenu}
        <img
          className="arrow"
          src={arrow}
          style={{
            transform: `${menuDiv ? "rotate(0deg)" : "rotate(180deg)"}`,
          }}
          onClick={() => setMenuDiv((prevState) => !prevState)}
          alt="arrow"
        ></img>
      </p>
      {menuDiv && <div className="project--options__container">{menuMap}</div>}
    </div>
  );
}
