import githubLogo from "../assets/github.svg";
import mailLogo from "../assets/mail.svg";
import linkedInLogo from "../assets/linkedin.svg";

export default function Social() {
  const gitHub = "https://github.com/girish-n7";
  const linkedIn = "https://www.linkedin.com/in/girish-n-7075ba1a4";
  const email = "mailto: ngirish1729@gmail.com";

  return (
    <div className="social--container">
      <a href={linkedIn} title="linkedIn">
        <img className="social" src={linkedInLogo} alt="linkedIn"></img>
      </a>
      <a href={gitHub} title="github">
        <img
          className="social"
          src={githubLogo}
          alt="github"
          style={{ height: "1.2rem" }}
        ></img>
      </a>
      <a href={email} title="e-mail">
        <img className="social" src={mailLogo} alt="mail"></img>
      </a>
    </div>
  );
}
