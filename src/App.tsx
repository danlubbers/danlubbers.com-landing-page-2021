import { ReactComponent as SVGLogo } from "./assets/logos/danlubbers_logo_#A52A25_outlined.svg";
import "./App.scss";

function App() {
  return (
    <main className="App">
      <SVGLogo className="logo" />
      <div className="btn-container">
        <a
          href="https://danlubbersphotographs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="photo-btn">Photography / Retouching</button>
        </a>
        <a
          href="https://webdev.danlubbers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="webDev-btn">Web Development</button>
        </a>
      </div>
    </main>
  );
}

export default App;
