import React from "react";
import PocoSection from "./PocoSection";
import TitleSeeAll from "../../Atoms/BannerSeeAll/TitleSeeAll";

function PocoList() {
  return (
    <>
      <div>
        <TitleSeeAll
          SeriesName="Seri Poco"
          Motto="Extreme performance, extreme price"
        />
      </div>
      <div>
        <PocoSection />
      </div>
    </>
  );
}

export default PocoList;
