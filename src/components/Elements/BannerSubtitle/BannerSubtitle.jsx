import React from "react";
import "../../../App.css";

const BannerSubtitle = (props) => {
  const {
    UpperText = "50MP triple kamera｜Layar",
    BottomText = "AMOLED 120Hz",
  } = props;
  return (
    <h4 className="site-banner__subtitle">
      {UpperText} <br /> {BottomText}
    </h4>
  );
};

export default BannerSubtitle;
