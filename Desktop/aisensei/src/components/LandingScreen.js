import React from "react";
import Header from "./Header";
import "./LandingScreen.css";

const LandingScreen = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="landingImg"
          src="https://mobidev.biz/wp-content/uploads/2020/07/1488-human-pose-estimation-ai-fitness.png"
        />
      </div>
    </div>
  );
};

export default LandingScreen;
