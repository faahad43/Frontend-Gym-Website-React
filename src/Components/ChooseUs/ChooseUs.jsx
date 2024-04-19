import "./ChooseUs.css"
import pic1 from "../../assets/pic1.avif";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpg";
import tick from "../../assets/tickmark.png";
import addidas from "../../assets/addidas.svg";
import apple from "../../assets/apple.svg";
import nike from "../../assets/nike.svg";


const ChooseUs = () => {
  return (
    <div className="choose-sec" id="choose-section">
        <div className="left">
            <img src={pic1}/>
            <img src={pic2}/>
            <img src={pic3}/>
            <img src={pic4}/>
        </div>
        <div className="right">
            <span className="green">some reasons</span>
            <div className="main-line">
                <span className="stroke">Why </span><span>Choose us?</span>
            </div>
            <div className="points">
                <span><img className="tick" src={tick} alt="" />Over 140+ expert coaches</span>
                <span><img className="tick" src={tick} alt="" />train smarter and faster than before</span>
                <span><img className="tick" src={tick} alt="" />1 free program for new members</span>
                <span><img className="tick" src={tick} alt="" />reliable partners</span>
            </div>
            <div className="partner">
                <span>Our partners</span>
                <div className="logos">
                    <img src={addidas} alt="addidas logo" />
                    <img src={apple} alt="apple-logo" />
                    <img src={nike} alt="nike logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs