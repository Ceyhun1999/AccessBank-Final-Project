import NavLanguage from "../navLanguage/NavLanguage";
import Search from "../search/Search";
import "./NavRightSecondItem.css";

export default function NavRightSecondItem({ onChangeActiveSearch }) {
    return (
        <div className="nav__right-secondItem">
            <div className="nav__right-controls">
                <NavLanguage />
                <Search onChangeActiveSearch={onChangeActiveSearch} />
            </div>
        </div>
    );
}
