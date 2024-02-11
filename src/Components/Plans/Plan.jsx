import "./Plan.css";
import Slider from "../Slider/Slider";

const Plan = () => {
  return (
    <div className="Plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
        <div className="plan-heading">
          <span className="stroke">Ready to start </span>
          <span className="center">Your journey </span>
          <span className="stroke">now withus</span>
        </div>
        <Slider/>
    </div>
  )
}

export default Plan