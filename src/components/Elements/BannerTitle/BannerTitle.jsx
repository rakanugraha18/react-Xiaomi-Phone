import React from "react";
import "./BannerTitle.css";

const BannerTitle = (props) => {
  const { Images } = props;
  return (
    <div className="site-banner__title">
      <img src={Images} alt="site banner title" />
    </div>
  );
};

export default BannerTitle;
