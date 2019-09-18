import React from "react";
import "./Works.css";
import dummyImage from "./dummyImage.jpg";
import psychedelic from "./psychedelic.jpg";
import tree from "./tree.jpg"

const Works = () => {
  return (
    <div className="Works">
      <div className="Work">
        <img src={dummyImage} alt="dummy"/>
      </div>
      <div className="Work">
        <img src={psychedelic} alt="dummy"/>
      </div>
      <div className="Work">
        <img src={tree} alt="dummy"/>
      </div>
      <div className="Work">
        <img src={dummyImage} alt="dummy"/>
      </div>
      <div className="Work">
        <img src={psychedelic} alt="dummy"/>
      </div>
      <div className="Work">
        <img src={tree} alt="dummy"/>
      </div>
    </div>
  );
};

export default Works;
