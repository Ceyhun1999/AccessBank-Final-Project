import MenuToggleBtn from "../menuToggleBtn/MenuToggleBtn";
import NavRightSecondItem from "../navRightSecondItem/NavRightSecondItem";
import NavRightFirstItem from "../navRightFirstItem/NavRightFirstItem";
import NavLeft from "../navLeft/NavLeft";

import "./Header.css";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <NavLeft />
                    <div className="nav__right">
                        <NavRightFirstItem />
                        <NavRightSecondItem />
                        <MenuToggleBtn />
                    </div>
                </nav>
            </div>
        </header>
    );
}
