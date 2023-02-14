import React from "react";
import backgroundImage from "../../../media/Home page/Background  Elements/Background.png";
import Logo from "../../Shared/Logo/Logo";

const Banner = () => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover"
      style={{
        background: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Logo />
    </div>
  );
};

export default Banner;
