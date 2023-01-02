import React from "react";

const Title = ({ h2, span }) => {
  return (
    <div className="section-title">
      <h2>
        {h2} <span>{span}</span>
      </h2>
    </div>
  );
};

export default Title;
