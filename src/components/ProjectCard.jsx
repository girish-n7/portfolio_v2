/* eslint-disable react/prop-types */
import injury from "../assets/injury_live.png";
import summarizer from "../assets/summarizer_live.png";
import chatbot from "../assets/chatbot_live.png";
import portfolio from "../assets/portfolio_live.png";
import eCommerce from "../assets/e-commerce_live.png";
import quiz from "../assets/splash.png";
import link from "../assets/link.svg";
import live from "../assets/live.svg";

export default function ProjectCard({ data }) {
  let imgSource =
    data.name === "Injury Tracker"
      ? injury
      : data.name === "Summarizer"
      ? summarizer
      : data.name === "Chatbot"
      ? chatbot
      : data.name === "e-commerce website"
      ? eCommerce
      : data.name === "Portfolio"
      ? portfolio
      : quiz;
  return (
    <div className="project--card">
      <div className="project--head">
        <p className="project--tech">[Tech: {data.tech}]</p>
        <p className="project--title">{data.name}</p>
      </div>
      {data.links && (
        <img className="project--img" src={imgSource} alt="project image"></img>
      )}
      <div className="project--body">
        <p className="project--desc">{data.desc}</p>
        {data.api && (
          <p className="project--desc">
            <strong>Backend API:</strong> {data.api}
          </p>
        )}
        {data.links && (
          <div className="links--container">
            <button
              className="live link"
              onClick={() => (window.location.href = `${data.links.live}`)}
            >
              <img className="download" src={live} alt="live link"></img>
              View website
            </button>
            <button
              className="github link"
              onClick={() => (window.location.href = `${data.links.github}`)}
            >
              <img className="download" src={link} alt="repository link"></img>
              View repository on github
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
