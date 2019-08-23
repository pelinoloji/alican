import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact col-8">
      <div className="ContactImage col-3">BOX</div>
      <div className="col-6">
        <div className="NameTitle">Alican Hicyorulmaz</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
          natus optio adipisci explicabo modi distinctio voluptatem ad nihil
          beatae, quis perspiciatis deserunt quae alias quisquam! Sit, nam
          vitae. Molestiae.
        </div>
        <span>+90 530 300 60 77</span> | <span>hi@ali-can.co</span>
      </div>
      <div className="ContactForm">
        <form>
          <label>
            First Name
            <input type="text" name="name" />
          </label>
          <label>
            Last Name
            <input type="text" name="name" />
          </label>
          <label>
            Email Adress
            <input type="email" name="name" />
          </label>
          <label>
            Message
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
