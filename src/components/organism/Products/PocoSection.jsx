import BannerCard from "../../molecule/Cards/BannerCard.jsx";
import LargeCard from "../../molecule/Cards/LargeCard.jsx";
import SmallCard from "../../molecule/Cards/SmallCard.jsx";

export default function PocoSection() {
  return (
    <>
      {/* Banner Flagship */}
      <BannerCard />
      {/* Large Card */}
      <section className="flex flex-wrap">
        <LargeCard />
        {/* Small Card Start */}
        <SmallCard />
      </section>
    </>
  );
}
