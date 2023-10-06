import logo from "../assets/portfolio-logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  return (
    <header>
      <img
        className="logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      ></img>
    </header>
  );
}
