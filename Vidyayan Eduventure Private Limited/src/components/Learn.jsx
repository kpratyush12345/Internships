import "./Learn.css";
import Timeline from "./images/timeline.png";

function Learn() {
  return (
    <div>
      <div className="learn">
        <div>
          <h3>Learning Path</h3>
          <br />
        </div>
        <div>
          <img className="timeline-img" src={Timeline} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Learn;
