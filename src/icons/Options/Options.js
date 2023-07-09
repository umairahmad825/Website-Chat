import React from "react";

export const Options = ({ className }) => {
  return (
    <div className={`options ${className}`}>
      <div className="group">
        <div className="div">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
        </div>
      </div>
    </div>
  );
};
