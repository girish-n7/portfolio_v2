import github from "../assets/github.svg";
import mail from "../assets/mail.svg";
import linkedIn from "../assets/linkedin.svg";

export default function Social() {
  return (
    <div className="social--container">
      <img className="social" src={linkedIn} alt="linkedIn"></img>
      <img
        className="social"
        src={github}
        alt="github"
        style={{ height: "1.2rem" }}
      ></img>
      <img className="social" src={mail} alt="mail"></img>
    </div>
  );
}
