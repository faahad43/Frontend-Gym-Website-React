import logo from "../../assets/logo1.png";
import "./Header.css";
import  menu  from "../../assets/humburger.png";
import { useState } from "react";
import {Link} from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 787 ? true : false;
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {menuIcon === false && mobile === true ? (
        <div>
          <img onClick={()=>setMenuIcon(!menuIcon)} className="humburger" src={menu} />
        </div>
      ) : (
        <ul className="nav-items">
          <li onClick={()=>setMenuIcon(!menuIcon)}>
            <Link
            to="hero"
            smooth={true}
            span={true}>Home</Link>
            </li>
          <li onClick={()=>setMenuIcon(!menuIcon)}>
            <a href="#programs">
              <Link 
              to="prog-section"
              span={true}
              smooth={true}
              >Programs</Link></a>
          </li>
          <li onClick={()=>setMenuIcon(!menuIcon)}>
            <Link
            to="choose-sec"
            span={true}
            smooth={true}
            >
            Why us</Link>
            </li>
          <li onClick={()=>setMenuIcon(!menuIcon)}>
          <Link
            to="Plans"
            span={true}
            smooth={true}
            >Plans</Link></li>
          <li onClick={()=>setMenuIcon(!menuIcon)}>
            <Link
            to="Testimonials"
            span={true}
            smooth={true}
            >
            Testimonials
            </Link>
            </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
