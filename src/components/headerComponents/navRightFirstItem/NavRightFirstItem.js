import { useState } from "react";
import "./NavRightFirstItem.css";

export default function NavRightFirstItem() {
    const [active, setActive] = useState(true);

    return (
        <div className="nav__right-firstItem">
            <div className="nav__right-line"></div>
            <div className="nav__right-links">
                <div
                    onClick={() => setActive(x => !x)}
                    className={active ? "nav__right-item nav__right-item--active" : "nav__right-item"}>
                    <a>Fərdi</a>
                </div>
                <div
                    onClick={() => setActive(x => !x)}
                    className={!active ? "nav__right-item--active" : " "}>
                    <a>Biznes</a>
                </div>
            </div>
        </div>
    );
}
