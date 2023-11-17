import React from "react";
import "./BannerButtonBeliSekarang.css";
import "../../../../App.css";

const BannerButtonBeliSekarang = (props) => {
  const { url } = props;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.href = url;
      }}
      className="banner-button btn-beli-sekarang"
    >
      Beli sekarang
    </button>
  );
};

export default BannerButtonBeliSekarang;
