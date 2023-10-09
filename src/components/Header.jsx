import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  return (
    <header>
      <div className="logo--container" onClick={() => navigate("/")}>
        <div className="logo">G</div>
        <p className="name">Girish</p>
      </div>
    </header>
  );
}
