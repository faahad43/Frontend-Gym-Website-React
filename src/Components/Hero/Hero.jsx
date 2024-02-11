import Header from "../Header/Header"
import heart from "../../assets/heart.png"
import "./Hero.css"
import main from "../../assets/main.png";
import lines from "../../assets/lines.png";
import cicrle from "../../assets/circle.png";
import NumberCount from "react-countup";
import {motion} from "framer-motion";

const Hero = () => {

  const transition = {type:"spring", duration:3}
  return (
    <div className="hero">
      {/* left side of page */}
        <div className="blur hero-blur"></div>
        <div className="left-side">
          <Header/>

      {/* animated text */}
            <div className="animated-text">
              <div></div>
              <span>The Best fitness club in town</span>
            </div>

      {/* Hero text */}
            <div className="slogan">
              <h1><span className="stroke">shape </span>your <br/>ideal body</h1>
              <p className="description">
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </p>
            </div>
         {/*figures */}
         <div className="figure">
          <div>
            <span className="number">
              <NumberCount start={20} end={140} prefix="+" duration={4}/>
              </span>
              <br/>
            expert coaches
          </div>
          <div>
            <span className="number">
              <NumberCount start={600} end={978} prefix="+" duration={4}/>
              </span>
              <br/>
            members joined
          </div>
          <div>
            <span className="number">
            <NumberCount start={1} end={50} prefix="+" duration={4}/>
              </span><br/>
            fitness programs
          </div>
         </div>
         {/* buttons */}
         <div className="btn-container">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>


        <div className="right-side">
           <button className="btn">Join Now</button>
           <motion.div
            initial={{right: "-1rem"}}
            transition={transition}
            whileInView={{right:"5rem"}}
            className="heart-rate">
            <img src={heart } alt="heart icon" />
            <p>Heart Rate<br/><span className="rate">116 bpm</span></p>
           </motion.div>
           <motion.div
           transition={transition}
           initial={{left:"-40rem"}}
           whileInView={{left:"-30rem"}} 
           className="calories">
            <div className="cal-img">
            <img src={lines} alt="lines for showing calories"/>
            </div>
            <div className="cal-num">
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
           </motion.div>
           <div className="main-img">
            <img src={main} className="img-1" alt="main picture of hero section of man" />
            <motion.img 
            transition={transition}
            initial={{left:"-25rem"}}
            whileInView={{left:"-37rem"}}
            src={cicrle} className="img-2" alt="circular lines with pic" /> 
           </div>
    
          
        </div>
    </div>
  )
}

export default Hero