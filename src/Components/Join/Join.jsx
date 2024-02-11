import "./Join.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {

  const [email,setEmail]=useState("");
  const [name,setName]= useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3430mhy', 'template_fcisnco', form.current, {
        publicKey: '_r2MSPa8NDGMoKhb7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setName('');
      setEmail('');
  };

  return (
    <div>
      <div className="join">
        <div className="l-side">
          <hr />
          <div className="join-tag">
            <div>
              <span className="stroke">ready to </span>
              <span>level up</span>
            </div>
            <div>
              <span>your body </span>
              <span className="stroke">with us?</span>
            </div>
          </div>
        </div>
        <div className="r-side">
          <form ref={form} onSubmit={sendEmail} className="form">
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="user-email" placeholder="Enter your email here" />

            <input type="text" value={name} name="user-name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>

            <button className="btn">Join Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
