import React from "react";
import "./Works.css";

import allWorks from "./works-data";

const Works = ({ type }) => {
  const worksByType =
    (type === "all" && allWorks) || allWorks.filter(work => work.type === type);
    
  return (
    <div className="col-9 Works">
      {worksByType.map(work => (
        <div key={work.index} className="Work">
          <img src={require(`./${work.path}`)} alt="dummy" />
        </div>
      ))}
    </div>
  );
};

export default Works;
