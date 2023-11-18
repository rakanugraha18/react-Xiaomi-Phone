import React from "react";
import "../components/organism/Redmi/RedmiPhoneList.css";
import SiteBanner from "../components/organism/Redmi/SiteBanner/SiteBanner";
import SiteGoods from "../components/organism/Redmi/SiteGoods/SiteGoods";
import SubNavPhoneList from "../components/molecule/Redmi/SubNavPhoneList/SubNavPhoneList";

const RedmiPhoneList = () => {
  return (
    <div>
      <SubNavPhoneList />
      <div className="redmi-page">
        <SiteBanner />
        <SiteGoods />
      </div>
    </div>
  );
};

export default RedmiPhoneList;
