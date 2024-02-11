import arrow from "../../assets/right-arrow.svg"
import "./ProgramTemp.css"

const ProgramTemp = ({icon,title,descr}) => {
  return (
    <div className="card">
      <img src={icon} alt="icon for card" className="icon" />
      <span>{title}</span>
      <p>{descr}</p>
      <div className="join-now"><span>Join Now</span><img className="arrow" src={arrow} alt="right-arrow" /></div>
    </div>
  )
}

export default ProgramTemp;