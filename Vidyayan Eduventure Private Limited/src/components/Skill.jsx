import "./Skill.css";
import Python from "./images/python.png";
import Web from "./images/web.png";
import Ai from "./images/ai.png";
import Ml from "./images/ml.png";
import Cyber from "./images/cyber.png";
import Gd from "./images/gd.png";

function Skill() {
  return (
    <div className="skill">
      <h3 className="orange">
        Cutting edge courses to make your child future ready
      </h3>
      <div className="skills">
        <div className="pad">
          <img src={Python} alt="" /> <p>Python</p>
        </div>
        <div className="pad">
          <img src={Web} alt="" /> <p>Web Development</p>
        </div>
        <div className="pad">
          <img src={Ai} alt="" /> <p>Artificial Intelligence</p>
        </div>
        <div className="pad">
          <img src={Ml} alt="" /> <p>Machine Learning</p>
        </div>
        <div className="pad">
          <img src={Cyber} alt="" /> <p>Cyber Security</p>
        </div>
        <div className="pad">
          <img src={Gd} alt="" /> <p>App Development</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
