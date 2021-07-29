import "./Work.css";
import WorkImg from "./images/work.svg";
import Banner2 from "./images/banner2.png";

function Work() {
  return (
    <div>
      <div className="work">
        <h3>How it Works</h3>
      </div>
      <div className="flx">
        <div className="pad-img">
          <img className="img" src={WorkImg} alt="" />
        </div>
        <div className="pad-right">
          <div className="col">
            <div className="circle">1</div>
            <div className="book">
              <h3>Book</h3>
              <p>
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity
              </p>
            </div>
          </div>
          <div className="col">
            <div className="circle">2</div>
            <div className="book">
              <h3>Book</h3>
              <p>
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity
              </p>
            </div>
          </div>
          <div className="col">
            <div className="circle">3</div>
            <div className="book">
              <h3>Book</h3>
              <p>
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity
              </p>
            </div>
          </div>
          <div className="col">
            <div className="circle">4</div>
            <div className="book">
              <h3>Book</h3>
              <p>
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity
              </p>
            </div>
          </div>
          <div className="col">
            <div className="circle">5</div>
            <div className="book">
              <h3>Book</h3>
              <p>
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity
              </p>
            </div>
          </div>
          <div className="col">
            <div className="circle">6</div>
            <div className="book">
              <h3>Book</h3>
              <p>
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-2">
        <img className="banner-img" src={Banner2} alt="" />
      </div>
    </div>
  );
}

export default Work;
