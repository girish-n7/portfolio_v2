/* eslint-disable react/prop-types */

export default function ProjectCard({ data }) {
  return (
    <div className="project--card">
      <img className="project--img" src="" alt=""></img>
      <div className="project--body">
        <p className="project--title">{data.name}</p>
        <p className="project--tech">{data.tech}</p>
        <p className="project--desc">{data.desc}</p>
        <div className="link--container">
          <button className="live--link">{data.links.live}</button>
          <button className="github--link">{data.links.github}</button>
        </div>
      </div>
    </div>
  );
}
