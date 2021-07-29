import "./App.css";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";
import Skill from "./Skill.jsx";
import Work from "./Work.jsx";
import Coding from "./Coding.jsx";
import Classes from "./Classes";
import Learn from "./Learn.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Skill />
      <Coding />
      <Classes />
      <Learn />
      <Work />
    </div>
  );
}

export default App;
