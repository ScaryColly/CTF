import React, { useState } from "react";
import "./KissAnimation.css"; // Import CSS file for styling

const KissAnimation = () => {
  const [kiss, setKiss] = useState(false);

  const handleKiss = () => {
    setKiss(true);
    setTimeout(() => {
      setKiss(false);
    }, 2000); // Set the kiss duration (in milliseconds)
  };

  return (
    <div className="kiss-container">
      <div
        className={`person person1 ${kiss ? "kiss1" : ""}`}
        onClick={handleKiss}
      >
        😘
      </div>
      <div
        className={`person person2 ${kiss ? "kiss2" : ""}`}
        onClick={handleKiss}
      >
        😘
      </div>
    </div>
  );
};

export default KissAnimation;
