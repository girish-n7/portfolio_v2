import download from "../assets/download.svg";

export default function About() {
  return (
    <div className="about--container">
      <p className="about--intro">
        Hello there! My name is Girish. I&#39;m a web developer with a passion
        for front-end technologies.
        <br />I specialize in building responsive websites and web applications
        using HTML, CSS, and JavaScript. I have experience working with modern
        front-end frameworks such as React. I always look for new challenges,
        opportunities to learn and grow as a developer. I love to travel and
        explore new places.
      </p>
      <div className="skills"></div>
      <button className="download">
        <img className="download--img" src={download} alt="download"></img>
        Resume
      </button>
    </div>
  );
}
