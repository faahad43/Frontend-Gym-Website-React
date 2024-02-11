import "./Testimonial.css";
import { testimonialData } from "../Data/testimonial";
import { useState } from "react";
import arrow from "../../assets/right-arrow.svg"
import {motion} from "framer-motion";

const Testimonials = () => {
  const [Testimony, setTestimony] = useState(0);
  const tLength = testimonialData.length

  return (
    <div className="Testimonials">
      <div className="Left-side">
        <div>Testimonials</div>
        <div>
          <span className="stroke">What they </span>
          <span>say about us</span>
        </div>

        <motion.div
        key={Testimony}
        transition={{type:"spring",duration:2}}
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        exit={{x:100,opacity:0}}
         className="review">{testimonialData[Testimony].review}</motion.div>
        <div>
          <span
          >{testimonialData[Testimony].name}</span>{" "}
          <span>- {testimonialData[Testimony].status}</span>
        </div>
      </div>
      <div className="Right-side">
        <div className="img">
            <motion.div
            transition={{type:"spring",duration:2}}
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
             className="border"></motion.div>

            <motion.div
            transition={{type:"spring",duration:2}}
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
             className="gradient"></motion.div>

            <motion.img 
            key={Testimony}
            initial={{opacity:0,x:100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0,x:-100}}
            transition={{type:"spring",duration:2}}
            src={testimonialData[Testimony].image} alt="image of testimonial person"/>

        </div>
        <div className="arrows">
            <img src={arrow} alt="arrow-icon" className="leftarrow" onClick={()=>{
                Testimony===0?setTestimony(2):setTestimony((prev)=>prev-1)
            }}/>
            <img src={arrow} alt="arrow-icon" className="rightarrow" onClick={()=>{
                Testimony === 2? setTestimony(0): setTestimony((prev)=>prev+1)
            }}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
