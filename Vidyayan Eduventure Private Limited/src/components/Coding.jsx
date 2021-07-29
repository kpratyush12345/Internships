import "./Coding.css";
import CodeImg from "./images/coding.svg";
import Logic from "./images/code-sec/logic.png";
import Eval from "./images/code-sec/eval.png";
import Algo from "./images/code-sec/algo.png";
import Abs from "./images/code-sec/abs.png";
import Pat from "./images/code-sec/pat.png";
import Dec from "./images/code-sec/dec.png";

function Coding() {
  return (
    <div className="code">
      <div className="heading">
        <h2>Why Coding?</h2>
        <br />
        <p>
          Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make
          children
        </p>
      </div>
      <div className="sec">
        <div className="sec2">
          <div className="logo">
            <div className="logo-sec">
              <img src={Logic} alt="" />
            </div>
            <div>
              <h3>Login</h3>
              <p>for predicting & analysis</p>
            </div>
          </div>
          <div className="logo">
            <div className="logo-sec">
              <img src={Eval} alt="" />
            </div>
            <div>
              <h3>Evaluation</h3>
              <p>Involves making judgement</p>
            </div>
          </div>
          <div className="logo">
            <div className="logo-sec">
              <img src={Algo} alt="" />
            </div>
            <div>
              <h3>Algorithms</h3>
              <p>To make steps & rules</p>
            </div>
          </div>
        </div>
        <div className="secim">
          <img src={CodeImg} alt="" />
        </div>
        <div className="sec3">
          <div className="sec2">
            <div className="logo">
              <div className="logo-sec">
                <img src={Abs} alt="" />
              </div>
              <div>
                <h3>Abstraction</h3>
                <p>To remove unneccessary data</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-sec">
                <img src={Pat} alt="" />
              </div>
              <div>
                <h3>Patterns</h3>
                <p>To make use of similarities</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-sec">
                <img src={Dec} alt="" />
              </div>
              <div>
                <h3>Decomposition</h3>
                <p>Break down a problem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttn">
        <button className="btn2">Book a free class</button>
      </div>
    </div>
  );
}

export default Coding;
