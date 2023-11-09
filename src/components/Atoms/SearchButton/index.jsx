/* eslint-disable react/prop-types */


const SearchButton = () => {
    return (
        <ul className="navigation__group navigation__shortcut">
            <li className="navigation__item shortcut__item">
                <button className="mi-btn mi-btn--icon mi-btn--normal mi-btn--light navigation__link" tabIndex="0">
                    <div className="shortcut__item--wrapper">
                        <i className="micon micon-search-glass shortcut__icon"></i>
                    </div>
                </button>
            </li>
        </ul>
    )
}


export default SearchButton;