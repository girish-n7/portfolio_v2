/* eslint-disable react/prop-types */
import summarizer from "../assets/summarizer_live.png";
import chatbot from "../assets/chatbot_live.png";
import portfolio from "../assets/portfolio_live.png";
import eCommerce from "../assets/e-commerce_live.png";

export default function ProjectCard({ data }) {
  let imgSource =
    data.name === "Summarizer"
      ? summarizer
      : data.name === "Chatbot"
      ? chatbot
      : data.name === "e-commerce website"
      ? eCommerce
      : portfolio;
  return (
    <div className="project--card">
      <div className="project--head">
        <p className="project--tech">{data.tech}</p>
        <p className="project--title">{data.name}</p>
      </div>
      <img className="project--img" src={imgSource} alt="project image"></img>
      <div className="project--body">
        <p className="project--desc">{data.desc}</p>
        <div className="links--container">
          <button
            className="live link"
            onClick={() => (window.location.href = `${data.links.live}`)}
          >
            View
          </button>
          <button
            className="github link"
            onClick={() => (window.location.href = `${data.links.github}`)}
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
