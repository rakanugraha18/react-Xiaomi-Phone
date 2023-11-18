/* eslint-disable react/prop-types */
const ImgFlagship = (props) => {
  const { PhonePicDesktop, PhonePicMobile } = props;
  return (
    <picture className="w-full h-[460px]">
      <source media="(min-width: 768px)" srcSet={`${PhonePicDesktop}`} />
      <img
        src={`${PhonePicMobile}`}
        alt="phone1"
        className="inset-0 object-cover w-full h-full"
      />
    </picture>
  );
};

export default ImgFlagship;
