import React from "react";
import PocoSection from "../../organism/Products/PocoSection";
import TitleSeeAll from "../../Atoms/BannerSeeAll/TitleSeeAll";

function PocoList() {
  return (
    <>
      <div className="bg-[#F7F7F7] h-30 flex flex-col items-center justify-center z-0 md:gap-2 md:p-5">
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
