import "./Footer.css";
import logo from "../../assets/logo1.png"
import instagram from "../../assets/icons8-instagram.svg"
import linkedin from "../../assets/icons8-linkedin.svg"
import github from "../../assets/icons8-github.svg"

const Footer = () => {
  return (
    <div className="footer">
        <div className="links">
            <button><img src={github} alt="github-icon" /></button>
            <button><img src={instagram} alt="instagram-icon" /></button>
            <button><img src={linkedin} alt="linkdin-icon" /></button>
        </div>
        <div className="flogo">
            <img src={logo} alt="" />
        </div>

        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer