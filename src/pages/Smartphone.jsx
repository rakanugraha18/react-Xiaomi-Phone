import RedmiSection from "../components/molecule/Smartphone/RedmiSection";
import XiaomiSection from "../components/molecule/Smartphone/XiaomiSection";
import PocoSection from "../components/molecule/Smartphone/PocoSection";
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
          text="Lihat Semua Tipe"
          intent="dark"
          rounded="yes"
        />
      </div>
      <PocoSection />
    </>
  );
};

export default SmartPhone;
