/* eslint-disable react/prop-types */

// import { useNavigate } from "react-router-dom";

export default function Menu({ selectedMenu, updateMenu }) {
  //   let navigate = useNavigate();

  //create menu array
  let menuArr = [
    { title: "Home", route: "/" },
    { title: "Miscellaneous", route: "/misc" },
  ];

  //map the array into options
  let menuMap = menuArr.map((item) => {
    return (
      <option key={item.title} value={item} className="menu--option">
        {item.title}
      </option>
    );
  });

  return (
    <div className="menu--dropdown">
      <select
        className="menu--selector"
        value={selectedMenu}
        onChange={(event) => updateMenu(event.target.value.title)}
      >
        {menuMap}
      </select>
    </div>
  );
}
