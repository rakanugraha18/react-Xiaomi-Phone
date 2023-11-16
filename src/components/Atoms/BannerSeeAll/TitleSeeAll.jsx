/* eslint-disable react/prop-types */
const BannerSeeAll = (props) => {
  const { SeriesName, redirect, Motto } = props;
  return (
    <section className="bg-[#F7F7F7] h-30 flex flex-col items-center justify-center z-0 md:gap-2 md:p-5">
      <div className="font-bold text-[24px] leading-[30px] md:text-[36px] md:leading-[43px]">
        {SeriesName}
      </div>
      <div className="font-normal text-[20px] leading-[18px] md:text-[18px] md:leading-[22px]">
        {Motto}
      </div>
    </section>
  );
};

export default BannerSeeAll;
