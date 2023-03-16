import "./SearchMobile.css";

export default function SearchMobile({ onChangeActiveSearchMobile }) {
    return (
        <div onClick={onChangeActiveSearchMobile} className="nav__search-mobile">
            <div className="nav__search-inner-mobile"></div>
        </div>
    );
}
