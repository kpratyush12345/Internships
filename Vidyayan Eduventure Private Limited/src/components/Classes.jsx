import "./Classes.css";
import Cpp from "./images/class/cpp.png";
import Py from "./images/class/py.png";
import Webd from "./images/class/webd.png";
import Android from "./images/class/android.png";
import Banner1 from "./images/banner1.png";

function Classes() {
  return (
    <div>
      <section>
        <div className="box">
          <div className="back div1">
            <br />
            <img className="logo-image" src={Cpp} alt="" />
            <br />
            <br />
            <p>Introduction to Coding</p>
            <br />
            <br /> <br /> <hr /> <br />
            <a href="#no">KNOW MORE</a>
            <br />
          </div>
          <div className="back div2">
            <br />
            <img className="logo-image" src={Py} alt="" />
            <br />
            <br />
            <p>Advance Coding</p>
            <br />
            <br /> <br /> <hr /> <br />
            <a href="#no">KNOW MORE</a>
            <br />
          </div>
          <div className="back div3">
            <br />
            <img className="logo-image" src={Webd} alt="" />
            <br />
            <br />
            <p>Web App Development </p>
            <br />
            <br /> <br /> <hr /> <br />
            <a href="#no">KNOW MORE</a>
            <br />
          </div>
          <div className="back div4">
            <br />
            <img className="logo-image" src={Android} alt="" />
            <br />
            <br />
            <p>Android App Development</p>
            <br />
            <br /> <br /> <hr /> <br />
            <a href="#no">KNOW MORE</a>
            <br />
          </div>
        </div>
      </section>

      <section>
        <div className="cir-flex">
          <div className="cir active"></div>
          <div className="cir"></div>
          <div className="cir"></div>
        </div>
      </section>
      <div className="banner1">
        <img className="ban" src={Banner1} alt="" />
        <br />
      </div>
    </div>
  );
}

export default Classes;
