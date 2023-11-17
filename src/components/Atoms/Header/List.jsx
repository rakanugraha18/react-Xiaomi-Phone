/* eslint-disable react/prop-types */
const List = (props) => {
  const { title, redirect, text, isActive } = props;
  return (
    <div className="h-full flex">
      <li
        className={`h-full navigation__item px-[8px] lg:px-[16px] only-medium ${isActive}`}
      >
        <a
          href={redirect}
          className="px-[8px] lg:px-[16px] h-full flex items-center text-base link-border "
          aria-label={text}
        >
          {title}
        </a>
      </li>
    </div>
  );
};

export default List;
