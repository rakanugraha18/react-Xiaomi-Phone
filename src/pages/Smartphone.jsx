import RedmiSection from "../components/molecule/Smartphone/RedmiSection";
import XiaomiSection from "../components/molecule/Smartphone/XiaomiSection";
import PocoSection from "../components/organism/Products/PocoSection";
import TitleSeeAll from "../components/Atoms/BannerSeeAll/TitleSeeAll";
import CustomButton from "../components/Atoms/WithCVA/CustomButton";

const SmartPhone = () => {
  return (
    <>
      <XiaomiSection />
      <RedmiSection />
      <TitleSeeAll
        SeriesName="Seri Poco"
        Motto="Extreme performance, extreme price"
      />
      <div className="flex justify-center items-center pb-6">
        <CustomButton
          to="/PocoList"
          text="Lihat semua tipe"
          order="text_first"
          icon=">"
          intent="accent_nobg"
          hover="bg_soft"
          media="mediumDark"
        />
      </div>
      <PocoSection />
    </>
  );
};

export default SmartPhone;
