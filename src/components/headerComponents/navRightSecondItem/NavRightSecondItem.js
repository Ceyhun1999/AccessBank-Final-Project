import NavLanguage from "../navLanguage/NavLanguage";
import "./NavRightSecondItem.css";

export default function NavRightSecondItem() {
    return (
        <div className="nav__right-secondItem">
            <div className="nav__right-controls">
                <NavLanguage />
                <div className="nav__search">
                    <div className="nav__search-inner"></div>
                </div>
            </div>
        </div>
    );
}
