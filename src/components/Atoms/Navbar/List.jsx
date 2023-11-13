/* eslint-disable react/prop-types */
const List = (props) => {
    const {separator = "", title, redirect, text, isActive} = props;
    return (
        <div className={separator}>
            <ul id="nav-right-side" className="navigation__group navigation__aside">
                <li className={`navigation__item only-medium ${isActive}`}>
                    <a href={redirect} className="navigation__link link-border" aria-label={text}>
                        {title}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default List;
