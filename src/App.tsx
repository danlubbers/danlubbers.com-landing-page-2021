import { ReactComponent as SVGLogo } from "./assets/logos/danlubbers_logo_#A52A25_outlined.svg";
import "./App.scss";
import ReactGA from "react-ga";

ReactGA.initialize("UA-1733817-2");

function App() {
  return (
    <main className="App">
      {ReactGA.event({
        category: "[danlubbers.com]",
        action: "[danlubbers.com]: User landed on landing page",
      })}
      ;
      <SVGLogo className="logo" />
      <div className="btn-container">
        <a
          href="https://danlubbersphotographs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="photo-btn"
            onClick={() =>
              ReactGA.event({
                category: "[danlubbers.com]",
                action:
                  "[danlubbers.com]: User clicked Photographs/Retouching site link",
              })
            }
          >
            Photography / Retouching
          </button>
        </a>
        <a
          href="https://webdev.danlubbers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="webDev-btn"
            onClick={() =>
              ReactGA.event({
                category: "[danlubbers.com]",
                action:
                  "[danlubbers.com]: User clicked Web Development site link",
              })
            }
          >
            Web Development
          </button>
        </a>
      </div>
    </main>
  );
}

export default App;
