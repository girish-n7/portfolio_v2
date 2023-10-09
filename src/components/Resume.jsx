import download from "../assets/download.svg";
import resume from "../assets/GIRISH N_Resume_web_dev.pdf";

export default function Resume() {
  return (
    <div className="resume--container">
      <p className="contact--head">Download resume</p>
      <p className="resume--prompt">
        Click on the button below to download my resume.
      </p>
      <a
        href={resume}
        download="GIRISH N_resume_web_dev.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <button className="download--btn">
          <img className="download" src={download} alt="download"></img>Download
          resume
        </button>
      </a>
    </div>
  );
}

//reuse styles from contact card
