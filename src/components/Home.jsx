import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  //create a options array
  let optionsArr = [
    { name: "Home", route: "/" },
    { name: "Projects", route: "/projects" },
    { name: "Contact me", route: "/contact" },
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

  return (
    <div className="home--container">
      <div className="home--intro">
        <p>
          Hi, my name is <span className="name">Girish N.</span>
        </p>
        <p>
          I am a Web Developer. Checkout my projects or head to the contact page
          to get in touch with me.
        </p>
      </div>
      <div className="home--options">{optionsMap}</div>
    </div>
  );
}
