import { useNavigate } from "react-router-dom";
import errorIcon from "../assets/404.svg";

export default function Error() {
  let navigate = useNavigate();
  return (
    <div className="error--container">
      <div className="error--prompt">
        <img src={errorIcon}></img>
        <p>404. Page not found</p>
      </div>
      <p>Are you sure you have entered the correct URL?</p>
      <button className="error--btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
