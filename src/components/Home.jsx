import { useState } from "react";
import { useNavigate } from "react-router-dom";
import right from "../assets/right.svg";
import left from "../assets/left.svg";

export default function Home() {
  let navigate = useNavigate();

  let [start, setStart] = useState(false);

  //create a options array
  let optionsArr = [
    { name: "Home", route: "/" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
    { name: "About", route: "/about" },
  ];

  //map the above array into options
  let optionsMap = optionsArr.map((item) => {
    return (
      <button
        key={item.name}
        className="option"
        onClick={() => navigate(`${item.route}`)}
      >
        {item.name}
      </button>
    );
  });

  function handleStart() {
    setStart((prevState) => !prevState);
  }

  return (
    <div className="home--container">
      <div
        className="home--intro__container"
        style={{
          width: start ? "70%" : "90%",
        }}
      >
        <p className="home--intro" style={{ width: start ? "760px" : "500px" }}>
          Hi, my name is <span className="name">Girish N.</span>
        </p>
        <p className="home--intro__sub">
          I am a Web Developer. Checkout my projects or head to the contact page
          to get in touch with me.
        </p>

        <button onClick={handleStart} className="start--button">
          <img src={start ? right : left} className="start--img" alt=""></img>
        </button>
      </div>
      <div
        className={`home--options ${!start && "hide"}`}
        style={{
          width: start ? "28%" : "0%",
        }}
      >
        {optionsMap}
      </div>
    </div>
  );
}
