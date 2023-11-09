/* eslint-disable react/prop-types */
const Icon = (props) => {
    const {redirect, classname} = props;
    return (
        <ul className="navigation__group navigation__shortcut">
            <li className="navigation__item shortcut__item">
                <div className="navigation__link" role="button" tabIndex="0">
                    <div className="shortcut__item--wrapper">
                        <a href={redirect}>
                            <i className={`micon micon-${classname} shortcut__icon`}></i>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Icon;