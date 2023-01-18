import "./App.css";
import { Outlet } from "react-router-dom";
import AppBar from "./components/Layout/AppBar";
import Home from "./components/Layout/Home";

function App() {
  return (
    <div className="App">
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <AppBar />
      <main id="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
