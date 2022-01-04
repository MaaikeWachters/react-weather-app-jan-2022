import "./App.css";
import Weather from "./Weather";
import Loader from "react-loader-spinner";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Beijing" />

        <footer>
          This app was coded with 💖 &nbsp;by{" "}
          <a
            href="http://www.maaikewachters.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Maaike Wachters
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/MaaikeWachters/react-weather-app-jan-2022"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
