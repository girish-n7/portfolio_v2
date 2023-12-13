import { useNavigate } from "react-router-dom";
import errorIcon from "../assets/404.svg";

export default function Error() {
  let navigate = useNavigate();
  return (
    <div className="error--container">
      <img className="error--img" src={errorIcon}></img>
      <div className="error--content">
        <p className="error--prompt">
          404. Page not found.
          <br />
          Are you sure you have entered the correct URL?
        </p>
        <button className="error--btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
