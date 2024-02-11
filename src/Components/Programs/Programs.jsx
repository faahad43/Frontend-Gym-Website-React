import ProgramTemp from "../Program-template/ProgramTemp";
import "./Programs.css";
import dumbell from "../../assets/dumbell.svg"
import man from "../../assets/running-icon.svg"
import heart from "../../assets/heart-svg.svg"
import fire from "../../assets/fire.svg"
 
const Programs = () => {
  return (
    <div className="prog-section" id="programs" >
        <div className="heading">
            <span className="stroke">Explore our </span>
            <span>Programs </span> 
            <span className="stroke">to shape you</span>
        </div>
        <div className="program-types">
            <ProgramTemp icon={dumbell} title={"Strength Training"} descr={"In this program you are trained to improve you strength and much more."}/>
            <ProgramTemp icon={man} title={"Cardio Training"} descr={"In this program you are trained to improve your sequential moves in range of 20 untill 30 minutes."}/>
            <ProgramTemp icon={heart} title={"Health Fitness"} descr={"This program is designed for those who exercise only for their body fitness not for body building."} />
            <ProgramTemp icon={fire} title={"Fat Burning"} descr={"This program is suitable for those who want to get rid of fat and lose their weight."}/>
    
            
        </div>
    </div>
    
  )
}

export default Programs