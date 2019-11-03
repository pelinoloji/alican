import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact col-12">
      <div className="ContactImage col-4"></div>
      <div className="ContactDetails col-6">
        <div className="NameTitle"><strong>Ali Can Hiçyorulmaz</strong></div>
        <div className="FormText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
          natus optio adipisci explicabo modi distinctio voluptatem ad nihil
          beatae, quis perspiciatis deserunt quae alias quisquam! <br />
          <span>+90 530 300 60 77</span> | <span>hi@ali-can.co</span>
        </div>
        <div className="ContactForm">
          <form>
          <div>
            <label>
              First Name *
            </label>
            <input className="col-4" type="text" name="name" />

            <label>
              Last Name *
            </label>
            <input className="col-4" type="text" name="lastname" />
          </div>
            <label>
              Email Address *
            </label>
            <input type="email" name="email" />

            <label>
              Message *
            </label>
            <input className="msgBox" type="text" name="message" />

            <input className="button col-4" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
