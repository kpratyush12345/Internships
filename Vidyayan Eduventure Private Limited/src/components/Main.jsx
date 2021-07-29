import "./Main.css";
import Image from "./images/main.svg";

function Main() {
  return (
    <div className="main">
      <div className="section-1">
        <div className="left">
          <h1>
            <span className="head">Creating Future</span> Tech Leaders
          </h1>
          <p className="para">
            Live coding classes for age 6 -15 to help your child learn to code
          </p>
        </div>
        <button className="btn">Join Now</button>
      </div>
      <div>
        <img className="section-2" src={Image} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Main;
