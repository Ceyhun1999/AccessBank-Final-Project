import "./Search.css";

export default function Search({ onChangeActiveSearch }) {
    return (
        <div onClick={() => onChangeActiveSearch()} className="nav__search">
            <div className="nav__search-inner"></div>
        </div>
    );
}
