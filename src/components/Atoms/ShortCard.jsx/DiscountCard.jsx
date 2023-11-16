/* eslint-disable react/prop-types */
const DiscountCard = (props) => {
  const { Discount } = props;
  return (
    <>
      <div className="font-normal text-[12px] leading-[17px] text-[#ff6900] border border-[#ff6900] bg-[#FFF0E5] rounded px-1 md:left-4 md:top-4 md:absolute">
        Diskon {Discount}%
      </div>
    </>
  );
};

export default DiscountCard;
