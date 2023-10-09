import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home--container">
      <div className="projects--container"></div>
      <div className="miscellaneous--container">
        <About />
        <Contact />
        <Resume />
        <button className="toTop" onClick={() => window.scroll(0, 0)}>
          Back to top
        </button>
      </div>
    </div>
  );
}

// add resume download button
